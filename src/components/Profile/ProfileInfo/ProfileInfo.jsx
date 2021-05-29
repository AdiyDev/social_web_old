import React from 'react';
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (
        <ul className={s.profileInfoWrapper}>
            <li className={s.imageBlock}>
                <img
                    src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                    alt=""></img>
            </li>
            <li className={s.descriptionBlock}>
                <p>ava+description</p>
            </li>
        </ul>
    )
}

export default ProfileInfo;