import React from 'react';
import Banner from '../../components/Banner/Banner';

const Home = ({isDarkMode}) => {
    return (
        <div>
            <Banner isDarkMode={isDarkMode}/>
        </div>
    );
};

export default Home;