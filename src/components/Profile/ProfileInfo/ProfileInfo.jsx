import React from 'react';
import s from "./ProfileInfo.module.css";
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <ul className={s.profileInfoWrapper}>
      <li className={s.imageBlock}>
        <img
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          alt=""></img>
      </li>
      <li className={s.descriptionBlock}>
        <img src={props.profile.photos.large
          ? props.profile.photos.large
          : 'https://imgix.ranker.com/user_node_img/50082/1001628557/original/someone-worse-off-than-they-are-photo-u2?auto=format&q=60&fit=crop&fm=pjpg&w=375'} alt="" />


        <ProfileStatus status={props.status} updateStatus={props.updateStatus} />

        <li><p>{props.profile.aboutMe}</p></li>
        <li><p>{props.profile.fullName}</p></li>
      </li>
      <li>
        {/* in contacts много элементов */}
        <p>{props.profile.contacts.github}</p>
        <p>
          В поисках ли я работы?
          {!props.profile.lookingForAJob ? " не ищу" : ' работаю за еду'}</p>
        <p>
          <span>Рабочие скиллы </span>
          {props.profile.lookingForAJobDescription}
        </p>
        <p>Тут моя маленькая аватарка</p>
        <p>
          <img src={props.profile.photos.small} className={s.minPhoto} alt="" />
        </p>
      </li>
    </ul>
  )
}

export default ProfileInfo;