import { combineReducers, createStore, applyMiddleware } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import { reducer as formReducer } from 'redux-form'
import appReducer from './app-reducer';
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({ // воспринимает всё в combineReducers how state
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware)) // закомбайненные редусеры отдаём стору //прими такие middleware мидл вейр из редакса для санки, что бы можно было вклиниться 

// window.store = store;

export default store;