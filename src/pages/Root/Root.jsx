import React from 'react';
import Navbar from '../../components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';

const Root = () => {

    const isDarkMode = window.matchMedia('(prefers-scheme-color: dark').matches;

    return (
        <div className='work-sans-font max-w-320 mx-auto px-5'>
            <Navbar isDarkMode={isDarkMode}></Navbar>
            {/* <Outlet></Outlet>
            <Footer></Footer> */}
        </div>
    );
};

export default Root;