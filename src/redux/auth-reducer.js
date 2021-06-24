import { authAPI } from "../api/api";
const SET_USER_DATA = "ADD-SET_USER_DATAPOST";

let initialState = {
  data: {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    // isFetching: false
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload, //так как данные свойства находятся ниже они перезатруд которые выше в ...state
      };
    default:
      return state;
  }
};

export const setAuthUserData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { id, email, login, isAuth },
});

export const getAuthUserData = () => (dispatch) => {
  authAPI.me()
    .then(response => {
      if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data
        dispatch(setAuthUserData(id, email, login, true)) //first data from axios
      }
    })
}

export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe)
    .then(response => {
      if (response.data.resultCode === 0) { //статус 0 тогда всё хорошо 
        dispatch(getAuthUserData())
      }
    })
}


export const logout = () => (dispatch) => {
  authAPI.logout()
    .then(response => {
      if (response.data.resultCode === 0) { //статус 0 тогда всё хорошо 
        dispatch(setAuthUserData(null, null, null, false))
      }
    })
}

export default authReducer;
