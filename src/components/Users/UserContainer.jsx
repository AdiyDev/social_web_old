import React from 'react';
import { followAC, setUsersAC, unfollowAC } from '../../redux/users-reducer';
import Users from './Users';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (usersId) => {
            dispatch(followAC(usersId));
        },
        unfollow: (usersId) => {
            dispatch(unfollowAC(usersId));
        },
        setUsers: (usersId) => {
            dispatch(setUsersAC(usersId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);