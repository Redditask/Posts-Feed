import styles from "./styles/App.module.scss";

import {useState} from "react";

import PostList from "./components/PostList";
import PostForm from "./components/UI/PostForm";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "JavaScript", content:"Язык программирования"},
        {id: 2, title: "JavaScript 2", content:"Язык программирования"},
        {id: 3, title: "JavaScript 3", content:"Язык программирования"},
        {id: 4, title: "JavaScript 4", content:"Язык программирования"}
    ]);

    function createPost(newPost) {
        setPosts([...posts, newPost])
    }

    function removePost(post){
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className={styles.App}>
            <PostForm create={createPost} title="Форма для создания постов"/>
            {posts.length
                ? <PostList remove={removePost} posts={posts} title={"Список постов:"}/>
                : <h1 style={{textAlign:"center", marginTop: "3rem"}}>Посты не найдены</h1>
            }
        </div>
    );
}

export default App;
