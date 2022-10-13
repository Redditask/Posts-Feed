import styles from "../styles/Components/PostList.module.scss";
import "../styles/TransitionStyles.scss";

import React from 'react';
import Post from "./Post";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts, title, remove}) => {

    if(!posts.length){
        return (<h1 style={{textAlign:"center", marginTop: "3rem"}}>Посты не найдены</h1>)
    }

    return (
        <div>
            <h1 style={{textAlign:"center", margin:"3rem 0"}}>{title}</h1>
            <ul className={styles.PostList}>
                <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <Post remove={remove} number={index+1} post={post}/>
                    </CSSTransition>
                )}
                    </TransitionGroup>
            </ul>
        </div>
    );
};

export default PostList;
