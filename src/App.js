import React from "react";
import "./App.css";
import {Header} from "./components/Header/Header";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {NavbarContainer} from "./components/Navbar/NavbarContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer2} from "./components/Profile/ProfileContainer";

const App = () => {
    return (<div className="app-wrapper">
        <Header/>
        <NavbarContainer/>
        <div className="app-wrapper-content">
            <Routes>
                <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                <Route path="/profile/*" element={<ProfileContainer2/>}/>
                <Route path="/news/*" element={<News/>}/>
                <Route path="/music/*" element={<Music/>}/>
                <Route path="/users/*" element={<UsersContainer/>}/>
                <Route path="/settings/*" element={<Settings/>}/>
            </Routes>
        </div>
    </div>);
};

export default App;