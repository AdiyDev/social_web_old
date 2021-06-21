import React from 'react';
import s from "./ProfileInfo.module.css";
import Preloader from './../../Preloader/Preloader';

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
        <img src={props.profile.photos.large} alt="" />
        <p>ava+description</p>
      </li>
    </ul>
  )
}

export default ProfileInfo;