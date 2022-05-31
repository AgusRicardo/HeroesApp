import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { useForm } from '../../hooks/useForm';
import { types } from '../../types/types';
import '../../styles/loginScreen.css'

export const LoginScreen = () => {
  const {dispatch} =  useContext(AuthContext)

  // El useNavigate te lleva a una url
  // Se utiliza replace en true para no poder volver para atras con la flechita
  const navigate = useNavigate();

  const [formValue, handleInputChange] = useForm();
  const {name} = formValue;
  const handleLogin = (e) => {
    e.preventDefault();
    // Disparamos la action
    // Buscamos en types la accion login ya creada
    // El payload es el cambio que debe hacerse, en este caso, hay que mandar el nombre del usuario para que lo detecte y ponga el logged en true
    if (name) {
      const action = {
        type: types.login,
        payload: {name: name}
      }
      dispatch(action);
    }else {
      alert('Ingrese un nombre');
    }

    const lastPath = localStorage.getItem('lastPath') || '/marvel'
    navigate(lastPath, {
      replace: true
    })
  }
  return (
    <div className='container mt-5'>
      <form action="" onSubmit={handleLogin} className='lgS_form-container bg-dark'>
        <h1>Login</h1>
        <div className="lgS__form-input">
          <label style={{padding: "5px"}}>Name: </label>
          <input type="text" maxLength='12' name='name' value={name} onChange={handleInputChange} autoComplete="off" />
        </div>
        <input className='btn btn-primary btn-login' type="submit" value="Login"/>
        <div className="icons">
          <span>Created by:</span>
          <a href="https://github.com/agustinricardo1" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/agustin-ricardo" target="_blank">
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </form>
    </div>
  )
}
