import styles from "./styles/App.module.scss";

import {useEffect, useState} from "react";

import PostList from "./components/PostList";
import PostForm from "./components/UI/PostForm";
import PostFilter from "./components/PostFilter";
import Modal from "./components/UI/Modal";
import Button from "./components/UI/Button";
import {usePosts} from "./hooks/usePost";
import PostServise from "./API/PostServise";
import Loader from "./components/UI/Loader";
import {useFetching} from "./hooks/useFetching";

function App() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort:"", search:""});
    const [modalStatus, setModalStatus] = useState(false);

    const sortedSearchedPosts = usePosts(posts, filter.sort, filter.search);
    const [fetchPosts, isPostsLoading, error] = useFetching(async ()=>{
            const posts = await PostServise.getData();
            setPosts(posts)
    })

    useEffect(()=>{
        fetchPosts();
    },[])

    function createPost(newPost) {
        setPosts([...posts, newPost]);
        setModalStatus(false);
    }

    function removePost(post){
        setPosts(posts.filter(p => p.id !== post.id));
    }

    return (
        <div className={styles.App}>
            <Modal visible={modalStatus} setVisible={setModalStatus}>
                <PostForm create={createPost} title="Форма для создания постов"/>
            </Modal>
            <hr style={{margin:"1.5rem 5rem"}}/>
            <div style={{display:"flex", justifyContent:"space-around"}}>
                <Button text="Добавить пост" onClick={()=> setModalStatus(true)}/>
                <PostFilter filter={filter} setFilter={setFilter}/>
            </div>
            {isPostsLoading
                ? <div style={{display:"flex", justifyContent:"center", marginTop:"20rem"}}><Loader/></div>
                : <PostList remove={removePost} posts={sortedSearchedPosts} title={"Список постов:"}/>
            }
            {
                error &&
                <h1 style={{textAlign:"center", marginTop:"10rem", fontSize:"5rem"}}>Произошла ошибка!</h1>
            }
        </div>
    );
}

export default App;
