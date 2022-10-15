import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../../router/routes";
import Login from "../pages/Login";
import {AuthContext} from "../../context";
import Posts from "../pages/Posts";

const AppRouter = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route key={route.path} element={route.element} path={route.path} exact={route.exact}/>
                )}
                <Route element={<Posts/>} path="/*"/>
                {/*<Route element={<Error/>} path="/*"/>*/}
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route key = {route.path} element={route.element} path={route.path} exact={route.exact}/>
                )}
                <Route element={<Login/>} path="/*"/>
            </Routes>
    );
};

export default AppRouter;
