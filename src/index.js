import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/store";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                     addPost={store.addPost.bind(store)}
                     addMessage={store.addMessage.bind(store)}
                     updateNewPostText={store.updateNewPostText.bind(store)}
                     updateNewMessageText={store.updateNewMessageText.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);
reportWebVitals();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
