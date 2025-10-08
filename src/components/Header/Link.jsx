import React from 'react';

const Link = ({route}) => {
    return (
        <li className='lg:mr-10 hover:border-1 border-gray-400 px-4 md:p-2 rounded-sm'>
           <a href={route.path}>{route.name}</a> 
        </li>
    );
};

export default Link;