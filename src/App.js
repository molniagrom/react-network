import React from "react";
import "./App.css";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import s from "./components/Dialogs/Dialogs.module.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {addMessage, state, store, upDateMessageText, upDatePostText} from "./redux/state";

const App = (props) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar state={store.state.sidebar}/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/dialogs/*" element={<Dialogs state={props.store.getState()}
                                                               store={props.store}/>}/>
                    <Route path="/profile/*" element={<Profile state={props.store.getState()}
                                                               store={props.store}/>}/>
                    <Route path="/news/*" element={<News/>}/>
                    <Route path="/music/*" element={<Music/>}/>
                    <Route path="/settings/*" element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default App;
