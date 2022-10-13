import styles from "./styles/App.module.scss";

import {useMemo, useState} from "react";

import PostList from "./components/PostList";
import PostForm from "./components/UI/PostForm";
import PostFilter from "./components/PostFilter";
import Modal from "./components/UI/Modal";
import Button from "./components/UI/Button";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "JavaScript", content:"Язык программирования"},
        {id: 2, title: "aa", content:"aa "},
        {id: 3, title: "cc", content:"bb"},
        {id: 4, title: "bb", content:"cc"}
    ]);
    const [filter, setFilter] = useState({sort:"", search:""});
    const [modalStatus, setModalStatus] = useState(false);

    const sortedPosts = useMemo(()=>{
        if(filter.sort) return [...posts].sort((a,b)=> a[filter.sort].localeCompare(b[filter.sort]));

        return posts;
    }, [filter.sort, posts])

    const sortedSearchedPosts = useMemo(()=>{
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.search.toLowerCase()));
    }, [filter.search, sortedPosts])

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
            <PostList remove={removePost} posts={sortedSearchedPosts} title={"Список постов:"}/>
        </div>
    );
}

export default App;
