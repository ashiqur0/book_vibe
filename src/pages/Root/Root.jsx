import React from 'react';
import Navbar from '../../components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';

const Root = () => {

    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark').matches;

    return (
        <div className={`work-sans-font ${isDarkMode? 'bg-slate-900' : 'bg-white'}`}>
            <div className=''>
                <Navbar isDarkMode={isDarkMode}></Navbar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;