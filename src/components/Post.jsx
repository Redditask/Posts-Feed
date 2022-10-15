import styles from "../styles/Components/Post.module.scss";

import React from 'react';
import Button from "./UI/Button";

const Post = ({post, number, remove}) => {

    return (
        <li className={styles.Post}>
            <div>
                <div className={styles.Post__title}>{post.id}. {post.title}</div>
                <hr/>
                <div className={styles.Post__content}>{post.body}</div>
            </div>
            <Button onClick={()=>remove(post)} text="Удалить"/>
        </li>
    );
};

export default Post;
