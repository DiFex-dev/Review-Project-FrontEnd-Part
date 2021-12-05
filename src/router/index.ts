import React from 'react';
import Login from '../pages/Login';
import Main from '../pages/Main';

       export interface IRoute {
           path: string;
           component: React.ComponentType;
           exact?: boolean;

       }
       
       export enum RouteNames{
           LOGIN= '/login',
           MAIN= '/main'

       }

       export const publicroutes: IRoute[] = [
           {path: RouteNames.LOGIN, exact: true, component: Login}
       ]

       export const privateroutes: IRoute[] = [
            {path: RouteNames.MAIN, exact: true, component: Main}
    ]

