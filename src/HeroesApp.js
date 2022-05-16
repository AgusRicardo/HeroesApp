import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/authContext'
import { authReducer } from './auth/authReducer';
import { AppRouter } from './routers/AppRouter'


const init = () => {
  return JSON.parse(localStorage.getItem('user')) || {logged: false}
};

export const HeroesApp = () => {
// El state es el que vamos a enviar a nuestro reducer para ejecutar una accion diferente
// y el dispatch es la funcion que se utiliza para disparar acciones al reducer
  const [user, dispatch ] = useReducer(authReducer, {}, init);

  useEffect(() => {
    // Si el usuario no existe, que no haga nada
    if (!user) return;
    // Pero si el usuario existe, es decir, inició sesion, lo guardamos en el localstorage para que cuando tire f5 no se desloguee
    localStorage.setItem('user', JSON.stringify(user));
  }, [user])
  

  return (
    // El provider se utiliza para que el AuthContext le provea información a sus hijos
    <AuthContext.Provider value={{
      user,
      dispatch
    }}>
      <AppRouter/>
    </AuthContext.Provider>
  )
}
