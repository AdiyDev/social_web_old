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
        ...action.data, //так как данные свойства находятся ниже они перезатруд которые выше в ...state
        isAuth: true,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (id, email, login) => ({
  type: SET_USER_DATA,
  data: { id, email, login },
});

export default authReducer;
