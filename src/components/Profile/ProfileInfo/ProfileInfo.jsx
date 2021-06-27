import React from 'react';
import s from "./ProfileInfo.module.css";
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import userPhotoEmpty from '../../../assets/images/userPhotoEmpty.jpg'

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  if (!profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  }


  return (
    <ul className={s.profileInfoWrapper}>
      <li className={s.imageBlock}>
        <img
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          alt="Шапка профиля"></img>
      </li>
      <li className={s.descriptionBlock}>
        <img src={profile.photos.large || userPhotoEmpty} alt="" />
        {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />

        <li><p>{profile.aboutMe}</p></li>
        <li><p>{profile.fullName}</p></li>
      </li>
      <li>
        {/* in contacts много элементов */}
        <p>{profile.contacts.github}</p>
        <p>
          В поисках ли я работы?
          {!profile.lookingForAJob ? " не ищу" : ' работаю за еду'}</p>
        <p>
          <span>Рабочие скиллы </span>
          {profile.lookingForAJobDescription}
        </p>
        <p>Тут моя маленькая аватарка</p>
        <p>
          <img src={profile.photos.small} className={s.minPhoto} alt="" />
        </p>
      </li>
    </ul>
  )
}

export default ProfileInfo;