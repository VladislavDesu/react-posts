import React, {useContext, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "./router";
import {AuthContext} from "../context";
import Loader from "./UI/loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    if (isLoading) {
        return <Loader/>
    }

    return (
        <Routes>
            {
                isAuth
                    ? privateRoutes.map((route, index) =>
                        <Route key={index}
                               path={route.path}
                               element={route.components}
                               exact={route.exact}
                        />)
                    : publicRoutes.map((route, index) =>
                        <Route key={index}
                               path={route.path}
                               element={route.components}
                               exact={route.exact}
                        />)
            }
        </Routes>
    );
};

export default AppRouter;