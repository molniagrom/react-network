// ProfileContainer.jsx
import React from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import {
    getProfile,
    getStatus,
    savePhoto,
    setUserProfile,
    upDateStatus,
    saveProfile
} from "../../redux/profile-reduser";
import { Navigate, useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

// Классовый компонент
class ProfileContainer extends React.Component {
    refreshProfile() {
        // userID из параметров URL или из авторизации
        const userID = this.props.authUserID;
        // debugger
        this.props.getProfile(userID);
        this.props.getStatus(userID);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps) {
        if (this.props.userID !== prevProps.userID) {
            this.refreshProfile();
        }
    }

    render() {
        // Если не авторизован — редирект
        if (!this.props.isAuth) return <Navigate to="/login" />;

        return (
            <Profile
                savePhoto={this.props.savePhoto}
                isOwner={!this.props.userID} // если userID нет — это профиль текущего пользователя
                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                upDateStatus={this.props.upDateStatus}
            />
        );
    }
}

// Функциональная обёртка, получающая userID из URL
function ProfileContainerWrapper(props) {
    const { userID } = useParams();
    return <ProfileContainer {...props} userID={userID} />;
}

// Подключение Redux
const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authUserID: state.auth.userID,
    error: state.profilePage.error,
    isAuth: state.auth.isAuth,
});

// Экспорт с авторизацией и Redux
export default compose(
    connect(mapStateToProps, {
        setUserProfile,
        getProfile,
        getStatus,
        upDateStatus,
        savePhoto,
        saveProfile
    }),
    withAuthRedirect
)(ProfileContainerWrapper);
