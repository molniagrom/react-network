import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthMeThunk, setAuthUserData} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthMeThunk()
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    email: state.auth.email,
    login: state.auth.login,
})

export default connect(mapStateToProps, {setAuthUserData, getAuthMeThunk}) (HeaderContainer);