import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { LoginScreen } from '../components/login/LoginScreen'
import { DashboardRoutes } from './DashboardRoutes'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* El PublicRoute va a ser el encargado de mostrar las rutas publicas */}
        <Route path="/login" element={
          <PublicRoute>
            <LoginScreen />
          </PublicRoute>
        } />



        {/* El /* indica que si no es login ingrese por ese route */}
        {/* ProvateRoute va a ser el encargado de verificar si el usuario está logeado o no para mostrarle el contenido  */}
        <Route  path='/*' element={
          <PrivateRoute>
            <DashboardRoutes/>
          </PrivateRoute>
          }
        />
        {/* <Route  path='/*' element={<DashboardRoutes />}/> */}
      </Routes>
    </BrowserRouter>
  )
}
