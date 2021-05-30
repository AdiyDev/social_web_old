import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: "Hi, how are you? ", likesCount: " 15"},
    {id: 2, message: "It's my first post ", likesCount: " 10"},
    {id: 3, message: "privet ", likesCount: " 7"},
    {id: 4, message: "Zdarov ", likesCount: " 3"},
    {id: 5, message: "Kak dela? ", likesCount: " 2"},
    {id: 6, message: "Vse normalno ", likesCount: " 1"}
]

let dialogs = [
    {id: 1, name: "Arkady"},
    {id: 2, name: "Ludmila"},
    {id: 3, name: "Marat"},
    {id: 4, name: "Danis"},
    {id: 5, name: "Elena"},
    {id: 6, name: "Pasha"}
]

let messages = [
    {id: 1, message: "HI"},
    {id: 2, message: "How are your reactJS"},
    {id: 3, message: "privet"},
    {id: 4, message: "Zdarov"},
    {id: 5, message: "Kak dela?"},
    {id: 6, message: "Vse normalno"}
]

ReactDOM.render(
    <React.StrictMode>
        <App posts={posts} dialogs={dialogs} messages={messages}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
