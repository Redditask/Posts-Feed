import styles from "../styles/Components/PostList.module.scss";

import React from 'react';

import Post from "./Post";

const PostList = ({posts, title, remove}) => {

    if(!posts.length){
        return (<h1 style={{textAlign:"center", marginTop: "3rem"}}>Посты не найдены</h1>)
    }

    return (
        <div>
            <h1 style={{textAlign:"center", margin:"3rem 0"}}>{title}</h1>
            <ul className={styles.PostList}>
                {posts.map((post, index) =>
                    <Post remove={remove} number={index+1} post={post} key={post.id}/>
                )}
            </ul>
        </div>
    );
};

export default PostList;
