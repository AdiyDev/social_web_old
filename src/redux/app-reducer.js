import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

let initialState = {
  data: {
    initialized: false
  }
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
}

export const initializedSiccess = () => ({ type: INITIALIZED_SUCCESS });

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserData())
  promise.all([promise])
    .then(() => {
      dispatch(initializedSiccess())
    })
}

export default appReducer;
