import { profileAPI, usersAPI } from "../API/api";

let ADD_POST = 'ADD-POST';
let SET_USER_PROFILE = 'SET_USER_PROFILE';
let SET_STATUS = 'SET_STATUS';
let DELETE_POST = 'DELETE_POST';
let SAVE_PHOTO = 'SAVE_PHOTO'


let initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likesCount: 11 },
    { id: 2, message: 'It\'s my first message', likesCount: 20, },
    { id: 3, message: 'Good day:)', likesCount: 33, },
    { id: 4, message: 'Best Life', likesCount: 33, },
    { id: 5, message: 'I like my Cat:)', likesCount: 100 }
  ],
  profile: null,
  status: ''
}

let profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let message = action.newPostText;
      return {
        ...state,
        posts: [...state.posts, { id: 6, message, likesCount: 50 }],
      }
    }
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(p => p.id != action.postID)
      }
    case SAVE_PHOTO:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos }
      }
    default:
      return state;
  }
}

export let addPostActionCreator = (newPostText) => ({
  type: ADD_POST,
  newPostText
});

export let setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile
});

export let setStatus = (status) => ({
  type: SET_STATUS,
  status
});

export let deletePost = (postID) => ({
  type: DELETE_POST,
  postID
});

export let savePhotoSuccess = (photos) => ({
  type: SAVE_PHOTO,
  photos
});


export const getUserProfile = (userID) => {
  return async (dispatch) => {
    let data = await usersAPI.getUsersProfile(userID);
    dispatch(setUserProfile(data))
  }
}

export const getProfileStatus = (userID) => {
  return async (dispatch) => {
    let response = await profileAPI.getProfileStatus(userID);
    dispatch(setStatus(response.data))
  }
}

export const updateProfileStatus = (status) => {
  return async (dispatch) => {
    let response = await profileAPI.updateProfileStatus(status);
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status))
    }
  }
}

export const savePhoto = (file) => {
  return async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
      dispatch(savePhotoSuccess(response.data.data.photos))
    }
  }
}

export default profileReducer;