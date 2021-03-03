import { stopSubmit } from "redux-form";
import { usersAPI, authAPI } from "../API/api";

let SET_AUTH_USER_DATA = 'samurai-network/auth/SET_AUTH_USER_DATA';

let initialState = {
  userID: null,
  email: null,
  login: null,
  isAuth: false
}

let authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state;
  }
}

export let setAuthUserData = (userID, login, email, isAuth) => ({
  type: SET_AUTH_USER_DATA,
  payload: { userID, login, email, isAuth }
})

export let getAuthUserData = () => {
  return async (dispatch) => {
    let data = await usersAPI.getAuthUserData();

    if (data.resultCode === 0) {
      let { id, login, email } = data.data
      dispatch(setAuthUserData(id, login, email, true))
    }
  }
}

export let login = (email, password, rememberMe) => {
  return async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe);

    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData())
    } else {
      let message = response.data.messages.length > 0 ? response.data.messages : 'Some Error'
      dispatch(stopSubmit('login', { _error: message }))
    }

  }
}

export let logout = () => {
  return async (dispatch) => {
    let response = await authAPI.logout();

    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false))
    }
  }
}

export default authReducer;