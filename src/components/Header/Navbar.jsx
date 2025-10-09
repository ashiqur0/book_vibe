import React, { useState } from 'react';
// import Link from './Link';
import { Link } from 'react-router'
import { Menu, X } from 'lucide-react';

// const navigationData = [
//     { "name": "Home", "path": "/", "id": 1 },
//     { "name": "Read List", "path": "/readList", "id": 2 },
//     { "name": "Wish List", "path": "/wishList", "id": 3 }
// ];

const Navbar = ({ isDarkMode }) => {

    const links = <>
        <Link to='/'>
            <li className='m-2'>Home</li>
        </Link>
        <Link to='/readList'>
            <li className='m-2'>Read List</li>
        </Link>
        <Link to='/wishList'>
            <li className='m-2'>Wish List</li>
        </Link>
    </>

    const [open, setOpen] = useState(false);
    // const links = navigationData.map(route => <Link key={route.id} route={route} />);

    return (
        <nav className={`shadow-lg ${isDarkMode ? 'shadow-slate-950' : 'shadow-slate-400'} p-4`}>
            <div className='flex justify-between items-center max-w-320 mx-auto'>
                <div className='flex gap-2'>
                    <button
                        className='md:hidden cursor-pointer'
                        onClick={() => setOpen(!open)}>
                        {open ? <X /> : <Menu />}
                    </button>

                    <ul className={`md:hidden absolute duration-1000
                    ${open ? 'top-18' : '-top-64'}
                    hover:shadow-sm ${isDarkMode ? 'shadow-white' : 'shadow-slate-400'} py-1 rounded-md`}>{links}
                    </ul>

                    <a href='/' className='cursor-pointer text-3xl font-bold'>Book Vibe</a>
                </div>

                <ul className='md:flex hidden gap-6'>
                    <Link to='/'>Home</Link>
                    <Link to='/readList'>Read List</Link>
                    <Link to='/wishList'>Wish List</Link>
                </ul>

                <div className='md:flex hidden gap-4 font-semibold text-white'>
                    <button className='bg-lime-500 px-7 py-2 rounded-md cursor-pointer'>Sign In</button>
                    <button className='bg-blue-400 px-7 py-2 rounded-md cursor-pointer'>Sign Up</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;