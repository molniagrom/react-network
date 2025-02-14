import React from "react";
import s from "./Profile.module.css";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getProfile, setUserProfile} from "../../redux/profile-reduser";
import {Navigate, useParams} from "react-router-dom";

class ProfileContainer extends React.Component {

  componentDidMount() {
      // convert to thunk
     this.props.getProfile(this.props.userID)
  }

   render() {

       if(!this.props.isAuth) {
           return <Navigate to="/login"/>
       }

      return (
        <div>
            <Profile {...this.props} profile={this.props.profile}/>
        </div>
      )
   }
}

let mapStateToProps = (state) =>({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
})


function ProfileContainerWrapper(props) {
    const { userID } = useParams();
    return <ProfileContainer {...props} userID={userID} />;
}

export default connect(mapStateToProps, {setUserProfile, getProfile}) (ProfileContainerWrapper);
