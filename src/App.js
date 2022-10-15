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
import {getPagesCount} from "./components/utlils/pages";
import {usePagination} from "./hooks/usePagination";
import PageNavigation from "./components/UI/PageNavigation";

function App() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort:"", search:""});
    const [modalStatus, setModalStatus] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    let pagesArray = usePagination(totalPages);

    const sortedSearchedPosts = usePosts(posts, filter.sort, filter.search);
    const [fetchPosts, isPostsLoading, error] = useFetching(async ()=>{
            const response = await PostServise.getData(limit,page);
            setPosts(response.data);
            const totalCount = response.headers["x-total-count"];
            setTotalPages(getPagesCount(totalCount,limit));
    })

    useEffect(()=>{
        fetchPosts();
    },[page])

    function createPost(newPost) {
        setPosts([...posts, newPost]);
        setModalStatus(false);
    }

    function removePost(post){
        setPosts(posts.filter(p => p.id !== post.id));
    }

    function changePage (page) {
        setPage(page);
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
                <h1 style={{textAlign:"center", marginTop:"10rem", fontSize:"5rem"}}>Произошла ошибка {error}!</h1>
            }
            <PageNavigation pagesArray={pagesArray} currentPage={page} changePage={changePage}/>
        </div>
    );
}

export default App;
