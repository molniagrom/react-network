import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {usersAPi} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        usersAPi.getAuthMe()
            .then((response) => {
                // convert to thunk
               if (response.status === 200 || response.resultCode === 0) {
                   let {id, email, login,} = response.data;
                   this.props.setAuthUserData(id, email, login);
               }
            })
    }

    render() {
        // debugger
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

export default connect(mapStateToProps, {setAuthUserData}) (HeaderContainer);