import React, {useContext} from 'react';
import cl from "./Navbar.module.scss";
import {Link} from "react-router-dom";
import {AuthContext} from "../../../context";

const Navbar = () => {
    const {setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem("auth");
    }

    return (
        <nav className={cl.navbar}>
            <div className={cl.container}>
                <span className={cl.link} onClick={logout}>Exit</span>
                <Link className={cl.link} to="/posts">Posts</Link>
            </div>
        </nav>
    );
};

export default Navbar;