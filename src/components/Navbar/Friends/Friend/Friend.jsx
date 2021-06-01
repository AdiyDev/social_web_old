import React from 'react';
import s from "./Friend.module.css";

const Friend = (props) => {
    return (
        <li className={s.item}>
            <a href="#">
                <img src="http://www.petplan.com.au/blog/wp-content/uploads/2016/12/pet-insurance-dog-cat-8.jpg"
                     alt={`${props.name} ${props.id}`}></img>
                <p>{props.name}</p>
            </a>
        </li>
    )
}

export default Friend;