import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import AppRouter from './components/AppRouter';
import Layout from './components/Layout';
import './i18next';


ReactDOM.render(
  <Suspense fallback={(<div>Loading ~~~</div>)} >
    <BrowserRouter>
    <Layout>
    <AppRouter />
    </Layout>
    </BrowserRouter>
    </Suspense>,
  document.getElementById('root')
);
