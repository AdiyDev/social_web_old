import React from 'react';
import s from "./Post.module.css";

const Post = (props) => {
    return (
        <li className={s.item}>
            <img
                src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201907/imgonline-com-ua-FrameBlurred-_14.jpeg?m6aZMJ2FuRNdIJhw9MbIpcGgJvY3yzW6&size=770:433"
                alt=""></img>
            {props.message}
            <span>like</span>{props.likeCount}
        </li>
    )
}

export default Post;