import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar state={props.store.getState()}/>
            <div className="app-wrapper-content">
                <Route path='/profile'
                       render={() => <Profile profilePage={props.store.getState().profilePage}
                                              store={props.store}/>}/>
                <Route path='/dialogs'
                       render={() => <Dialogs dialogsPage={props.store.getState().dialogsPage}
                                              store={props.store}/>}/>
                <Route path='/news'
                       render={() => <News/>}/>
                <Route path='/music'
                       render={() => <Music/>}/>
                <Route path='/settings'
                       render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;