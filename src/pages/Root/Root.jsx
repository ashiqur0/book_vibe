import React from 'react';
import Navbar from '../../components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';

const Root = ({isDarkMode}) => {

    return (
        <div className={`work-sans-font ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
            <Navbar isDarkMode={isDarkMode}></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;