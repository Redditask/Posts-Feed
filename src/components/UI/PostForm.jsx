import styles from "../../styles/UI/PostForm.module.scss";

import Input from "./Input";
import Button from "./Button";

import React, {useState} from 'react';

const PostForm = ({title, create}) => {
    const [post, setPost] = useState({title:"", body:""});

    function addNewPost(event){
        event.preventDefault();
        const newPost = {
            ...post, id:Date.now()
        }
        create(newPost);
        setPost({title: "", body: ""})
    }

    return (
        <form className={styles.PostForm}>
            <h3>{title}</h3>
            <div>
                <Input
                    value={post.title}
                    type="text"
                    placeholder="Заголовок поста"
                    onChange={event => setPost({...post, title: event.target.value})}
                />
                <Input
                    value = {post.content}
                    type="text"
                    placeholder="Содержание поста"
                    onChange={event=> setPost({...post, body: event.target.value})}
                />
            </div>
            <Button onClick={addNewPost} text="Добавить пост"/>
        </form>
    );
};

export default PostForm;
