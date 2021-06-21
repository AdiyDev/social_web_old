import React from 'react';
import Profile from './Profile'
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from './../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    // if (!userId) {
    //   userId = 2
    // }
    !userId ? userId = 2 : userId = 3
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId) //когда в конце urlа то можно добавить и плюсом сделать конкатенацию
      .then(response => {
        this.props.setUserProfile(response.data);
      })
  }


  render() {
    return (
      <Profile  {...this.props}
        profile={this.props.profile}
      />
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer) // находится в библиотеке react-router-dom

export default connect(mapStateToProps, { setUserProfile })(WithUrlDataContainerComponent);