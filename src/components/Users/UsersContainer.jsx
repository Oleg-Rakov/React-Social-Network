import React from 'react'
import { connect } from 'react-redux';
import { follow, unFollow, getUsers, onPageChangedUsers } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';
import { compose } from 'redux';
import { getCurrentPage, getFetching, getFollowing, getPageSize, getStateUsers, getTotalUsersCount } from '../../redux/users-selectors';
import withAuthRedirect from '../../hoc/withAuthRedirect';


class UsersContainer extends React.Component {
  componentDidMount() {
    const { currentPage, pageSize } = this.props;
    this.props.getUsers(currentPage, pageSize);
  }

  onPageChange = (numberPage) => {
    const { pageSize } = this.props;
    this.props.onPageChangedUsers(numberPage, pageSize);
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader /> : null}
      <Users totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        users={this.props.users}
        currentPage={this.props.currentPage}
        onPageChange={this.onPageChange}
        follow={this.props.follow}
        unFollow={this.props.unFollow}
        isFollowing={this.props.isFollowing}
        toggleFollowingProgress={this.props.toggleFollowingProgress}
      />
    </>
  }
}

let mapStateToProps = (state) => {
  return {
    users: getStateUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getFetching(state),
    isFollowing: getFollowing(state),
  }
}


export default compose(withAuthRedirect,connect(mapStateToProps,
  {
    follow, unFollow, getUsers, onPageChangedUsers
  }))(UsersContainer)