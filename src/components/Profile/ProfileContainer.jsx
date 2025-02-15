import React from "react";
import s from "./Profile.module.css";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getProfile, setUserProfile} from "../../redux/profile-reduser";
import {useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

  componentDidMount() {
     this.props.getProfile(this.props.userID)
  }

   render() {
      return (
        <div>
            <Profile {...this.props} profile={this.props.profile}/>
        </div>
      )
   }
}

function ProfileContainerWrapper(props) {
    const { userID } = useParams();
    return <ProfileContainer {...props} userID={userID} />;
}

let mapStateToProps = (state) =>({
    profile: state.profilePage.profile,
})

export default compose(
    connect(mapStateToProps, {setUserProfile, getProfile}),
    withAuthRedirect
)(ProfileContainerWrapper)
