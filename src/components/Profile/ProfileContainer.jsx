import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, savePhoto, setUserProfile, upDateStatus, saveProfile} from "../../redux/profile-reduser";
import {Navigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    refreshProfile(){
        this.props.getProfile(this.props.userID)
        this.props.getStatus(this.props.userID)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.userID !== prevProps.userID) {
            this.refreshProfile()
        }
    }

    render() {

        if (!this.props.isAuth) return <Navigate to="/login" />;

        return (
            <div>
                <Profile
                    savePhoto={this.props.savePhoto}
                    isOwner={!this.props.userID}
                    {...this.props}
                    error={this.props.error}
                    profile={this.props.profile}
                    status={this.props.status}
                    upDateStatus={this.props.upDateStatus}/>
            </div>
        )
    }
}

function ProfileContainerUseParams(props) {
    const { userID } = useParams();
    return <ProfileContainer {...props} userID={userID} />;
}

function ProfileContainerWrapper(props) {
    return <ProfileContainerUseParams {...props} />;
}

let mapStateToProps = (state) => {
    return ({
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authUserID: state.auth.userID,
        error: state.profilePage.error,
    })

}

export default compose(
    connect(mapStateToProps, {setUserProfile, getProfile, getStatus, upDateStatus, savePhoto, saveProfile}),
    withAuthRedirect
)(ProfileContainerWrapper)