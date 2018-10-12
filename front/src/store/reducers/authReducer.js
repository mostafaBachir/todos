import * as auth from '../actions/authActions'
const initialState = {
  todos: undefined,
  is_auth:false,
  errors: {},
}
export default (state=initialState, action) => {
  switch(action.type) {
    case auth.LOGIN_SUCCESS:

      return {
        todos:action.payload,
        is_auth:true,
        errors: {}
    }

    case auth.LOGIN_FAILURE:
    return {
      ...state,
      is_auth:false,
    }
    default:
      return state
    }
}


export function errors(state) {
   return  state.errors
}
