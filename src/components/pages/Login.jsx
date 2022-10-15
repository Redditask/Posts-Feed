import styles from "../../styles/pages/Login.module.scss"

import React, {useContext} from 'react';
import Input from "../UI/Input";
import Button from "../UI/Button";
import {AuthContext} from "../../context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    function login(event) {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem("auth", "true");
    }

    return (
        <div>
            <h1 style={{textAlign:"center", margin:"1rem 0"}}>Страница для входа</h1>
            <form className={styles.Login} onSubmit={login}>
                <Input type="text" placeholder="Введите логин"/>
                <Input type="password" placeholder="Введите пароль"/>
                <Button text="Войти"/>
            </form>
        </div>
    );
};

export default Login;
