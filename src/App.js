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
import {getMyAvatar} from "./redux/auth-reducer";
import {getMyUserId} from "./redux/users-selectors";

const DialogsContainer = lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainerWrapper = lazy(() => import("./components/Profile/ProfileContainer"));
const UsersContainer = lazy(() => import("./components/Users/UsersContainer"));
const Login = lazy(() => import("./components/Login/Login"));

class App extends React.Component {
    hasLoadedAvatar = false;

    catchAllUnhandledErrors = (promiseRejectionEvent) => {
        alert("Some error current")
        // todo: make dispatch thunk in app-reducer something globalError, and if globalError have text - display it
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)
    }

    componentDidUpdate(prevProps) {
        if (
            this.props.initialized &&
            this.props.id &&
            !this.hasLoadedAvatar
        ) {
            this.props.getMyAvatar(this.props.id);
            this.hasLoadedAvatar = true;
        }
    }


    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors)
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
                    <Route path="/profile/:userID?/*" element={withSuspense(ProfileContainerWrapper)()} />
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
    id: getMyUserId(state),

});

let AppContainer = connect(mapStateToProps, {initializeApp, getMyUserId, getMyAvatar})(App);

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
