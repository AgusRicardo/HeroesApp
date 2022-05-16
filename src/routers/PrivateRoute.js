import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/authContext'

// Private route recibe como CHILDREN a DashboardRoute
export const PrivateRoute = ({ children }) => {
  const {user} = useContext(AuthContext);

  // El location va a mostrarnos en un objeto todas las propiedades del URL
  // Con este se puede manipular la URL por ejemplo: recordar la ultima URL por si al usuario se le cierra la app
  const {pathname, search} = useLocation();

  // Aca guardamos bajo el nombre de "lastPath" el ultimo URL donde estuvo el usuario en el localStorage
  localStorage.setItem('lastPath', pathname + search);

  // Entonces si el usuario tiene logged en true, que devuelva a su componente children
  // Si no está logeado, va a volver al /login
  return user.logged
      ? children
      : <Navigate to="/login"/>
}
