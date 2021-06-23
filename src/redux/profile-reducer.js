import { profileAPI, usersAPI } from './../api/api'
const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you? ", likesCount: 15 },
    { id: 2, message: "It's my first post ", likesCount: 10 },
    { id: 3, message: "Kak tebe takoe Elon Sobaks? ", likesCount: 7 },
    {
      id: 4,
      message: "Primu v dar Korm dla puppies, ya mnogodetniy papka ",
      likesCount: 3,
    },
    { id: 5, message: "Kak dela? ", likesCount: 2 },
    { id: 6, message: "Kot poel kaktus ", likesCount: 1 },
  ],
  newPostText: "",
  profile: null,
  status: ""
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          { id: 7, message: state.newPostText, likesCount: 0 },
        ],
        newPostText: "",
      };
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.text,
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  text: text,
})
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
})
export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
})



export const getUserProfile = (userId) => {
  return (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
      dispatch(setUserProfile(response.data))
    })
  }
}

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then(response => {
    dispatch(setStatus(response.data))
  })
}
export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status))
    }
  })
}




export default profileReducer;
