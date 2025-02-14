import React from "react";
import s from "./Profile.module.css";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getProfile, setUserProfile} from "../../redux/profile-reduser";
import {useParams} from "react-router-dom";

class ProfileContainer extends React.Component {

  componentDidMount() {
      // convert to thunk
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

let mapStateToProps = (state) =>({
    profile: state.profilePage.profile,
})


function ProfileContainerWrapper(props) {
    const { userID } = useParams();
    return <ProfileContainer {...props} userID={userID} />;
}

export default connect(mapStateToProps, {setUserProfile, getProfile}) (ProfileContainerWrapper);
