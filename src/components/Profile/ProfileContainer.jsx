import React from "react";
import s from "./Profile.module.css";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reduser";
import {useParams} from "react-router-dom";

class ProfileContainer extends React.Component {

  componentDidMount() {
     const userID = this.props.userID || 2
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
          .then((response) => {
              this.props.setUserProfile(response.data);
          })
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

export default connect(mapStateToProps, {setUserProfile}) (ProfileContainerWrapper);
