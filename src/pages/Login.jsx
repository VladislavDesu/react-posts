import React, {useContext} from 'react';
import Input from "../components/UI/input/Input";
import Button from "../components/UI/button/Button";
import {AuthContext} from "../context";

const Login = () => {
    const {setIsAuth} = useContext(AuthContext);

    const login = (e) => {
        e.preventDefault();
        setIsAuth(true);
        localStorage.setItem("auth", "true")
    };

    return (
        <div className="login">
            <h1 className="title">Login Page</h1>

            <form onSubmit={login}>
                <Input type="text" placeholder="Login"/>
                <Input type="password" placeholder="Password"/>
                <Button>Login</Button>
            </form>
        </div>
    );
};

export default Login;