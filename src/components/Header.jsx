import React from 'react';
import s from "./Header.module.css";

const Header = () => {
    return <header className={s.header}>
        {/*className={`${s.item} ${s.active}`}*/}
        <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt=""></img>
    </header>
}

export default Header;