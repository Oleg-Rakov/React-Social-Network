import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getProfileStatus, getUserProfile, savePhoto, updateProfileStatus } from '../../redux/profile-reducer';
import { withRouter } from "react-router";
import { compose } from 'redux';

class ProfileContainer extends React.Component {

  refreshProfile() {
    let userID = this.props.match.params.userID;
    if (!userID) {
      userID = this.props.authorizedUserID;
      if (!userID) {
        this.props.history.push('/login')
      }
    }
    this.props.getUserProfile(userID)
    this.props.getProfileStatus(userID)
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.userID != prevProps.match.params.userID) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <Profile {...this.props}
        savePhoto={this.props.savePhoto}
        isOwner={!this.props.match.params.userID}
        profile={this.props.profile}
        status={this.props.status}
        updateProfileStatus={this.props.updateProfileStatus}
      />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserID: state.auth.userID
  }
}


export default compose(connect(mapStateToProps, { getUserProfile, getProfileStatus, updateProfileStatus, savePhoto }), withRouter)(ProfileContainer)