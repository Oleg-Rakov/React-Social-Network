import { usersAPI } from "../API/api";
import { updateObjectinArray } from "../UTILS/object-helpers";

let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET-USERS';
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
let TOTAL_USERS = 'TOTAL_USERS';
let IS_FETCHING = 'IS_FETCHING';
let IS_FOLLOWING = 'IS_FOLLOWING';

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  isFollowing: []
}

let usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectinArray(state.users, action.userId, 'id', { followed: true })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectinArray(state.users, action.userId, 'id', { followed: false })
      }
    case SET_USERS:
      return {
        ...state,
        users: action.users
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }
    case TOTAL_USERS:
      return {
        ...state,
        totalUsersCount: action.totalUsers
      }
    case IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }
    case IS_FOLLOWING:
      return {
        ...state,
        isFollowing: action.isFollowing
          ? [...state.isFollowing, action.userID]
          : state.isFollowing.filter(id => id !== action.userID)
      }
    default:
      return state;
  }
}

export let followSuccess = (userId) => ({
  type: FOLLOW,
  userId
});

export let unFollowSuccess = (userId) => ({
  type: UNFOLLOW,
  userId
});

export let setUsers = (users) => ({
  type: SET_USERS,
  users
});

export let setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage
});

export let setTotalUsers = (totalUsers) => ({
  type: TOTAL_USERS,
  totalUsers
});

export let toggleFetching = (isFetching) => ({
  type: IS_FETCHING,
  isFetching
});

export let toggleFollowingProgress = (isFollowing, userID) => ({
  type: IS_FOLLOWING,
  isFollowing,
  userID
});

export const getUsers = (currentPage, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleFetching(true));

    let data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(toggleFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsers(data.totalCount))
  }
}

export const onPageChangedUsers = (numberPage, pageSize) => {
  return async (dispatch) => {
    dispatch(setCurrentPage(numberPage));
    dispatch(toggleFetching(true))

    let data = await usersAPI.getUsers(numberPage, pageSize);
    dispatch(toggleFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsers(data.totalCount))
  }
}

let followUnfollowFlow = async (dispatch, userID, apiMethod, actionCreator) => {
  dispatch(toggleFollowingProgress(true, userID))
  let data = await apiMethod(userID);

  if (data.resultCode === 0) {
    dispatch(actionCreator(userID))
  }
  dispatch(toggleFollowingProgress(false, userID))
}

export const follow = (userID) => {
  return async (dispatch) => {
    followUnfollowFlow(dispatch, userID, usersAPI.follow.bind((userID)), followSuccess)
  }
}

export const unFollow = (userID) => {
  return async (dispatch) => {
    followUnfollowFlow(dispatch, userID, usersAPI.unFollow.bind((userID)), unFollowSuccess)
  }
}

export default usersReducer;