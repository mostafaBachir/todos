import jwtDecode from 'jwt-decode'
import * as auth from '../actions/authActions'
const initialState = {
  access: undefined,
  errors: {},
}
export default (state=initialState, action) => {
  switch(action.type) {
    case auth.LOGIN_SUCCESS:

      return {
        access: {
          token: action.payload.token,
          infos :{
            ...jwtDecode(action.payload.token)
          }
        },
        errors: {}
    }
    case auth.TOKEN_RECEIVED:
      return {
        ...state,
        access: {
          token: action.payload.token,
          ...jwtDecode(action.payload.token)
        }
      }
    case auth.LOGIN_FAILURE:
    case auth.TOKEN_FAILURE:
      return {
         access: undefined,
         errors:
             action.payload.response ||
                {'non_field_errors': action.payload.statusText},
      }
    default:
      return state
    }
}

export function accessToken(state) {
    if (state.access) {
        return  state.access.token
    }
}


export function isAccessTokenExpired(state) {
  if (state.access && state.access.infos.exp) {
    return 1000 * state.access.infos.exp - (new Date()).getTime() < 5000
  }
  return true
}
export function isAuthenticated(state) {
  console.log(state)
  return !isAccessTokenExpired(state)
}
export function errors(state) {
   return  state.errors
}
