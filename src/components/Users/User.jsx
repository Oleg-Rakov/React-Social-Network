import React from 'react'
import styles from './Users.module.css'
import userPhoto from './../../assets/avatar.png'
import { NavLink } from 'react-router-dom';


let User = ({ user, isFollowing, follow, unFollow }) => {

  return (

    <div key={user.id}>
      <span>
        <div>
          <NavLink to={'/profile/' + user.id}>
            <img src={user.photos.small !== null ? user.photos.small : userPhoto} className={styles.userPhoto} />
          </NavLink>

        </div>
        <div>
          {user.followed
            ? <button disabled={isFollowing.some(id => id === user.id)} onClick={() => {
              unFollow(user.id)
            }}>Unfollow</button>
            : <button disabled={isFollowing.some(id => id === user.id)} onClick={() => {
              follow(user.id)
            }}>follow</button>
          }
        </div>
      </span>
      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>{"user.location.country"}</div>
          <div>{"user.location.city"}</div>
        </span>
      </span>
    </div>)
}

export default User;