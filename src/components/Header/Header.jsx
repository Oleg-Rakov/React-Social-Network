import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnepq4mpKnUTr_FcH3jHg30IqSgYogEmm-TA&usqp=CAU" />
      <div className={s.login}>
        {props.isAuth
          ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
          : <NavLink to='/login'>Login</NavLink>}
      </div>

    </header>
  );
}

export default Header;