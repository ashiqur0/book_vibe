import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';

const navigationData = [
    { "name": "Home", "path": "/", "id": 1 },
    { "name": "Listed Books", "path": "/about", "id": 2 },
    { "name": "Pages to Read", "path": "/services", "id": 3 }
];

const Navbar = ({isDarkMode}) => {

    const [open, setOpen] = useState(false);
    const links = navigationData.map(route => <Link key={route.id} route={route} />);

    return (
        <nav className='flex justify-between items-center mt-4'>
            <div className='flex gap-2'>
                <button
                    className='md:hidden cursor-pointer'
                    onClick={() => setOpen(!open)}>
                    {open ? <X /> : <Menu />}
                </button>

                <ul className={`md:hidden absolute duration-1000
                    ${open ? 'top-18' : '-top-64'}
                    hover:shadow-sm ${isDarkMode? 'shadow-white' : 'shadow-slate-400'} py-1 rounded-md`}>{links}
                </ul>

                <a href='/' className='cursor-pointer'>Book Vibe</a>
            </div>

            <ul className='md:flex hidden'>{links}</ul>

            <div className='flex gap-4 font-semibold text-white'>
                <button className='bg-lime-500 px-7 py-2 rounded-md cursor-pointer'>Sign In</button>
                <button className='bg-blue-400 px-7 py-2 rounded-md cursor-pointer'>Sign Up</button>
            </div>
        </nav>
    );
};

export default Navbar;