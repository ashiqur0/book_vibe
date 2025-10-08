import React from 'react';
import Banner from '../../components/Banner/Banner';
import {useLoaderData} from 'react-router'
import Books from '../Books/Books';

const Home = ({isDarkMode}) => {

    const bookData = useLoaderData();

    return (
        <div>
            <Banner isDarkMode={isDarkMode}/>
            <Books bookData={bookData}></Books>
        </div>
    );
};

export default Home;