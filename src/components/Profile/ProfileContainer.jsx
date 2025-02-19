import React from "react";
import s from "./Profile.module.css";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, setUserProfile, upDateStatus} from "../../redux/profile-reduser";
import {useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.getProfile(this.props.userID)
        this.props.getStatus(this.props.userID)
        console.log(this.props.userID)
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} upDateStatus={this.props.upDateStatus}/>
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

let mapStateToProps = (state) =>({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
})

export default compose(
    connect(mapStateToProps, {setUserProfile, getProfile, getStatus, upDateStatus}),
    withAuthRedirect
)(ProfileContainerWrapper)