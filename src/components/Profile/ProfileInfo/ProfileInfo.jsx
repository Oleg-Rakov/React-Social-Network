import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/avatar.png'

const ProfileInfo = (props) => {

  if (props.profile === null) {
    return <Preloader />
  }

  let onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }

  return (
    <div>
      <div className={s.description}>
        {!props.profile.photos.large && !props.profile.photos.small
          ? <img src={userPhoto} />
          : <img src={props.profile.photos.large} />}
        <div>
          {props.isOwner && <input onChange={onMainPhotoSelected} type='file' />}
        </div>
        <div>
          <b>Full name</b>: {props.profile.fullName}
        </div>
        <div>
          {props.profile.lookingForAJob
            ? <span>Уже работаю:)</span>
            : <span>Ищю Работу!!!!</span>}
        </div>
        {props.profile.lookingForAJob &&
          <div>
            <b>My Proffesional skills</b>: {props.profile.lookingForAJobDescription}
          </div>
        }
        <div>
          <span>{props.profile.aboutMe}</span>
        </div>
        <div>
          {/* <b>Contacts</b>:{props.profile.contacts} */}
        </div>
        <div>
          <ProfileStatusWithHooks status={props.status} updateProfileStatus={props.updateProfileStatus} />
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;