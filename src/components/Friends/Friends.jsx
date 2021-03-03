import React from 'react';
import s from './Friends.module.css';

const FriendsItem = (props) => {
  return (
    <div className={s.friendsItem}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5YhPdRaVXy2aXGObGO_WdSNLzyalEpPnhrg&usqp=CAU' />
      <p>{props.name}</p>
    </div>
  );
}

const Friends = (props) => {
  let state = props.store.getState();
  let friendsElement = state.friendsPage.friendsName.map(f => <FriendsItem name={f.name} />)

  return (
    <div className={s.friends}>
      <div className={s.friendsTitle}>Friends</div>
      <div className={s.friendsItems}>
        {friendsElement}
      </div>
    </div>
  );
}

export default Friends;