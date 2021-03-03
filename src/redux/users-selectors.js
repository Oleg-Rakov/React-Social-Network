import { createSelector } from "reselect"

export let getStateUsersSelector = (state) => {
    return state.usersPage.users
}

export let getStateUsers = createSelector(getStateUsersSelector, (users) => {
    return users.filter(u => true)
})

export let getPageSize = (state) => {
    return state.usersPage.pageSize
}

export let getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}

export let getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export let getFetching = (state) => {
    return state.usersPage.isFetching
}

export let getFollowing = (state) => {
    return state.usersPage.isFollowing
}