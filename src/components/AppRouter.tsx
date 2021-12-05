import React, { ReactElement } from 'react';  
import {Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Main from '../pages/Main';
import { privateroutes, publicroutes } from '../router';
import { initialState } from '../store/auth';

const AppRouter = () => {
    const auth = initialState;
    // return <Routes>
    // {privateroutes.map(route =>
    // <Route
    // path={route.path}
    // element={<Main />}
    // key={route.path}/>
    // )}
    // </Routes>
    return true ?
    <Routes>
        {privateroutes.map(route =>
        <Route
        path={route.path}
        element={<Main />}
        key={route.path}/>
        )}
        </Routes> 
        :
        <Routes>
        {publicroutes.map(route =>
        <Route
        path={route.path}
        element={<Login />}
        key={route.path}/>
        )}
        </Routes>
    // if (auth.isAuth) {
    //     console.log("+++")
    //     return <Routes>
    //     {privateroutes.map(route =>
    //     <Route
    //     path={route.path}
    //     element={<Main />}
    //     key={route.path}/>
    //     )}
    //     </Routes>
    // } else {
    //     return <Routes>
    //     {publicroutes.map(route =>
    //     <Route
    //     path={route.path}
    //     element={<Login />}
    //     key={route.path}/>
    //     )}
    //     </Routes>
    // }
    // console.log(auth.isAuth)
    //     return (
    //     auth.isAuth ?
    //     <Routes>
    //     {privateroutes.map(route =>
    //     <Route
    //     path={route.path}
    //     element={<Main />}
    //     key={route.path}/>
    //     )}
    //     </Routes>
    //   :
        // <Routes>
        // {publicroutes.map(route =>
        // <Route
        // path={route.path}
        // element={<Login />}
        // key={route.path}/>
        // )}
        // </Routes>
    //     )
};

export default AppRouter;