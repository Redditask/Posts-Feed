import styles from "../styles/Components/Post.module.scss";

import React from 'react';
import Button from "./UI/Button";
import {useNavigate} from "react-router-dom";

const Post = ({post, number, remove}) => {
    const navigate = useNavigate();

    return (
        <li className={styles.Post}>
            <div>
                <div className={styles.Post__title}>{post.id}. {post.title}</div>
                <hr/>
                <div className={styles.Post__content}>{post.body}</div>
            </div>
            <div className={styles.Post__buttons}>
                <Button onClick={()=>remove(post)} text="Удалить"/>
                <Button onClick={()=>navigate(`/posts/${post.id}`)} text="Открыть"/>
            </div>
        </li>
    );
};

export default Post;
