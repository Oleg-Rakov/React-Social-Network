import React from 'react'
import Paginator from '../Common/Paginator';
import User from './User'

let Users = (props) => {

  return (
    <div>
      <Paginator onPageChange={props.onPageChange}
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage} />
      <div>
        {
          props.users.map(u => <User user={u}
            key={u.id}
            isFollowing={props.isFollowing}
            follow={props.follow}
            unFollow={props.unFollow} />)
        }
      </div>
    </div>
  )
}

export default Users;