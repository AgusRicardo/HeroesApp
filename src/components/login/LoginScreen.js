import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const LoginScreen = () => {
  const {dispatch} =  useContext(AuthContext)

  // El useNavigate te lleva a una url
  // Se utiliza replace en true para no poder volver para atras con la flechita
  const navigate = useNavigate();

  const handleLogin = () => {
    // Disparamos la action
    // Buscamos en types la accion login ya creada
    // El payload es el cambio que debe hacerse, en este caso, hay que mandar el nombre del usuario para que lo detecte y ponga el logged en true
    const action = {
      type: types.login,
      payload: {name: 'Agustin'}
    }
    dispatch(action);

    const lastPath = localStorage.getItem('lastPath') || '/marvel'
    navigate(lastPath, {
      replace: true
    })
  }
  return (
    <div className='container mt-5'>
      <h1>Login Screen</h1>
      <hr />
      <button className='btn btn-primary' onClick={handleLogin}>Login</button>
    </div>
  )
}
