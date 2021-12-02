import React from 'react';
import {Route, Routes, } from 'react-router-dom';
import Login from '../pages/Login';
import Main from '../pages/Main';
import { privateroutes, publicroutes } from '../router';

const AppRouter = () =>{
        const auth = true;
        return(
        auth ?
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
        );
        };

export default AppRouter;