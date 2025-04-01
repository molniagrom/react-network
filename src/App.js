import React, {lazy} from "react";
import "./App.css";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {NavbarContainer} from "./components/Navbar/NavbarContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {Preloader} from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = lazy(() => import("./components/Profile/ProfileContainer"));
const UsersContainer = lazy(() => import("./components/Users/UsersContainer"));
const Login = lazy(() => import("./components/Login/Login"));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>;
        }

        return (<div className="app-wrapper">
            <HeaderContainer/>
            <NavbarContainer/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/dialogs/*" element={withSuspense(DialogsContainer)()} />
                    <Route index path="/profile/:userID?/*" element={withSuspense(ProfileContainer)()} />
                    <Route path="/news/*" element={<News />} />
                    <Route path="/music/*" element={<Music />} />
                    <Route path="/users/*" element={withSuspense(UsersContainer)()} />
                    <Route path="/login/*" element={withSuspense(Login)()} />
                    <Route path="/settings/*" element={<Settings />} />
                    {/*<Route path="/react-network/*" element={<Navigate to="/profile/:userID?/*" />} />*/}
                    <Route path="*" element={<div>404 not found</div>} />
                    <Route path="/react-network/*" element={<Navigate to="/profile/:userID?/*" />} />
                </Routes>
            </div>
        </div>);
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
});

let AppContainer = connect(mapStateToProps, {initializeApp})(App);

let SamuraiJSApp = () => {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <AppContainer />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    );
};

export default SamuraiJSApp;
