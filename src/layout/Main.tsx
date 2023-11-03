import React from 'react';
import Header from '../shared/header/Header';
import { Outlet } from 'react-router-dom'
import Footer from '../shared/footer/Footer';

const Main: React.FC = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;