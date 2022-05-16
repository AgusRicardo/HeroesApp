// Cuando la acción modifique el state, entonces React va a volver a renderizar lo que tenga que renderizar

import { types } from "../types/types";

// const state = {
//   name: 'Agustin',
//   logged: true
// }

export const authReducer = (state = {}, action) => {
// El tipo de accion debería ser el login o logout
  switch (action.type) {
    case types.login:
      return {
        ...action.payload,
        logged: true
      }
      case types.logout:
      return {
        logged: false
      }
    default:
      return state
  }


};