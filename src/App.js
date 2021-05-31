import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/profile'
                           render={() => <Profile state={props.state.profilePage}/>}/>
                    <Route path='/dialogs'
                           render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                    <Route path='/news'
                           render={() => <News/>}/>
                    <Route path='/music'
                           render={() => <Music/>}/>
                    <Route path='/settings'
                           render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

{/*<Route path='/profile' component={ProfileComponent}/> так же можно создать выже через let функцию
 дать ей название и передать название внутрь component и props кинуть выше <component/>*/
}
{/*route path='' render={() => {<Profile/>}} анонимная функция {component()}*/
}