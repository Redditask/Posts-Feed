import React, {useContext} from 'react';
import styles from "../../styles/UI/Navbar.module.scss";
import {Link} from "react-router-dom";
import {AuthContext} from "../../context";
import Button from "./Button";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    function logout(event){
        event.preventDefault();
        setIsAuth(false);
        localStorage.removeItem("auth");
    }

    return (
        <nav className={styles.Navbar}>
                <Link className={styles.Navbar__link} to="/posts">Посты</Link>
                <Link className={styles.Navbar__link} to="/about">О сайте</Link>
                <Button onClick={logout} text="Выйти"/></nav>
    );
};

export default Navbar;
