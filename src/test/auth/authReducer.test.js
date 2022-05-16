import { authReducer } from "../../auth/authReducer"
import { types } from "../../types/types"


describe('Pruebas en authReducer', () => {  
  test('Debe de retornar el estado por defecto', () => {  
    // Le mandamos un estado inicial 
    const state = authReducer({logged:false}, {/*Acción*/})
    expect(state).toEqual({logged:false})
  })

  test('Debe de autenticar y colocar el name del usuario', () => {  
    const action = {
      type: types.login,
      payload: {
        name: 'Agustin',
      }
    }
    const state = authReducer({logged:false}, action)
    expect(state).toEqual({
      logged: true,
      name: 'Agustin'
    })
  })

  test('Debe de borrar el name del usuario y logged en false', () => {  
    const action = {
      type: types.logout,
    }
    const state = authReducer({logged:true, name:'Agustin'}, action)
    expect(state).toEqual({logged: false})

  })
})