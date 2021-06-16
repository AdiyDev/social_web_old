import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
<<<<<<< HEAD
import store from './redux/redux-store';
=======
import store from "./redux/redux-react";
>>>>>>> a0533e1428c01de93fe62c4d8982f9767f1870bd

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                     store={store}
                     dispatch={store.dispatch.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>, 
        document.getElementById('root')
    );
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
<<<<<<< HEAD
    rerenderEntireTree(state)
});
=======
    rerenderEntireTree(state);
});

>>>>>>> a0533e1428c01de93fe62c4d8982f9767f1870bd
reportWebVitals();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
