import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {

    render() {
        return (
            <Header {...this.props} profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    email: state.auth.email,
    login: state.auth.login,
    profile: state.profilePage.profile,
})

export default connect(mapStateToProps, {logout}) (HeaderContainer);