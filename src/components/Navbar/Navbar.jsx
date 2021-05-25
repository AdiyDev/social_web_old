import React from 'react';
import s from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.ul}>
                <li className={s.item}>
                    <a href="/profile">Profile</a>
                </li>
                <li>
                    <a className={`${s.item} ${s.active}`} href="/dialogs">Messages</a>
                </li>
                <li>
                    <a href="/news">News</a>
                </li>
                <li>
                    <a href="/music">Music</a>
                </li>
                <li>
                    <a href="settings">Settings</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;