import React from "react";
import "./App.css";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {store} from "./redux/store";

const App = (props) => {
     debugger
    return (<div className="app-wrapper">
            <Header/>
            <Navbar state={props.state.sidebar}/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/dialogs/*" element={<Dialogs
                        newMessageText={props.state.dialogsPage.newMessageText}
                        state={props.state.dialogsPage}
                        dispatch={props.dispatch}
                        store={props.store}
                    />}/>
                    <Route path="/profile/*" element={<Profile
                        profilePage={props.state.profilePage}
                        dispatch={props.dispatch}
                    />}/>
                    <Route path="/news/*" element={<News/>}/>
                    <Route path="/music/*" element={<Music/>}/>
                    <Route path="/settings/*" element={<Settings/>}/>
                </Routes>
            </div>
        </div>);
};

export default App;
