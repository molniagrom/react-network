import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true,
        })
            .then((response) => {
               if (response.status === 200 || response.data.resultCode === 0) {
                   let {id, login, email} = response.data.data;
                   this.props.setAuthUserData(id, login, email);
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
})

export default connect(mapStateToProps, {setAuthUserData}) (HeaderContainer);