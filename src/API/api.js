import React from 'react';
import * as axios from 'axios';

let instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "API-KEY": "a5de26e5-da64-4c0b-9f21-c84f7ac6a50b"
  }
})


export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data
      })
  },
  getUsersProfile(userID) {
    return instance.get(`profile/${userID}`)
      .then(response => {
        return response.data
      })
  },
  follow(id) {
    return instance.post(`follow/${id}`, {})
      .then(response => {
        return response.data
      })
  },
  unFollow(id) {
    return instance.delete(`follow/${id}`)
      .then(response => {
        return response.data
      })
  },
  // Создать const AuthAPI
  getAuthUserData() {
    return instance.get(`auth/me`)
      .then(response => {
        return response.data
      })
  }
}

export const profileAPI = {
  getProfileStatus(userID) {
    return instance.get(`profile/status/${userID}`)
  },
  updateProfileStatus(status) {
    return instance.put(`profile/status`, { status: status })
  },
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append('image', photoFile);

    return instance.put(`profile/photo`, formData)
  }
}

export const authAPI = {
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, { email, password, rememberMe })
  },
  logout() {
    return instance.delete(`auth/login`)
  }
}

