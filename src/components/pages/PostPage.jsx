import styles from "../../styles/pages/PostPage.module.scss"

import React, {useEffect, useState} from 'react';

import {useParams} from "react-router-dom";
import {useFetching} from "../../hooks/useFetching";
import PostServise from "../../API/PostServise";
import Loader from "../UI/Loader";

const PostPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [fetchPost, isLoading, error] = useFetching(async ()=>{
        const response = await PostServise.getById(params.id);
        setPost(response.data);
    })

    useEffect(()=>{
        fetchPost();
    },[])

    return (
        <div>
            <h1 style={{textAlign:"center", marginTop:"2rem"}}>Вы открыли пост с id = {params.id}</h1>
            {
                isLoading
                    ? <div style={{display:"flex", justifyContent:"center", marginTop:"20rem"}}><Loader/></div>
                    : <div className={styles.PostPage}>
                        <div style={{marginBottom:"1rem"}}> {post.id}. {post.title}</div>
                        {post.body}
                    </div>
            }
        </div>
    );
};

export default PostPage;
