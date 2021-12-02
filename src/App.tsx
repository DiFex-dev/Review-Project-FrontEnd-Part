import React, { FC } from 'react';
import Navbar from './components/Navbar';
import AppRouter from './components/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: FC = () => {
    return(
        <div>
            <Navbar/>
            <AppRouter/>
        </div>
    );
};


    export default App;