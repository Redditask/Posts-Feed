import About from "../components/pages/About";
import Posts from "../components/pages/Posts";
import PostPage from "../components/pages/PostPage";
import Login from "../components/pages/Login";

export const privateRoutes = [
    {path: "/posts", element: <Posts/>, exact: true},
    {path: "/posts/:id", element: <PostPage/>, exact: true},
    {path: "/about", element: <About/>, exact: true},
]

export const publicRoutes = [
    {path: "/login", element: <Login/>, exact: true},
]
