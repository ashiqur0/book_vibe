import React from 'react';
import bookImage from '../../assets/The_Dating_Playbook_for-Men.png'

const Banner = ({isDarkMode}) => {
    return (
        <div className={`flex justify-around ${isDarkMode? 'bg-slate-800': 'bg-slate-200'} py-20 px-30 max-w-320 mx-auto rounded-2xl mt-12 mb-25`}>
            <div>
                <h1 className='text-[3.5rem] font-bold'>Books to freshen up your bookshelf</h1>
                <button className='bg-lime-500 px-7 py-3 rounded-md cursor-pointer text-xl font-bold mt-12'>View The List</button>
            </div>
            <div>
                <img src={bookImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;