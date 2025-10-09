import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredBook } from '../../utility/addToDb';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Book from '../Books/Book';

const ReadList = () => {
    const bookData = useLoaderData();

    const [readList, setReadList] = useState([]);
    useEffect(() => {
        const storedBook = getStoredBook();
        const storedBookData = storedBook.map(id => parseInt(id));
        const myReadList = bookData.filter(book => storedBookData.includes(book.bookId));
        setReadList(myReadList);
    }, []);

    const [sort, setSort] = useState('');
    const handleSort = (type) => {
        setSort(type);

        if (type === 'pages') {
            const sortedByPages = [...readList].sort((a, b) => a.totalPages - b.totalPages);
            setReadList(sortedByPages);
        } else if (type === 'ratings') {
            const sortedByRatings = [...readList].sort((a, b) => a.rating - b.rating);
            setReadList(sortedByRatings);
        }
    }

    return (
        <div className={`max-w-320 mx-auto px-4 md:px-0`}>

            <Tabs>
                <TabList>
                    <Tab>Book I Read</Tab>
                    <Tab>My Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-3xl font-semibold my-5'>
                        {
                            readList.length >= 2 ? `I read ${readList.length} Books` : `I read ${readList.length} Book`
                        }
                    </h2>

                    <div className='flex justify-center mb-8'>
                        <details className="dropdown">
                            <summary className="btn m-1 w-60 bg-lime-500 text-xl p-0">Sort by :
                                {sort ? sort === 'pages'? ' Pages':' Rating' : ''}
                            </summary>
                            <ul className="menu dropdown-content rounded-box z-1 shadow-sm p-1 bg-slate-900">
                                <li className='bg-lime-400 pl-8 w-60 rounded-sm'><a onClick={() => handleSort('pages')}>Pages</a></li>
                                <li className='mt-1 bg-lime-400 pl-8 w-60 rounded-sm'><a onClick={() => handleSort('ratings')}>Rating</a></li>
                            </ul>
                        </details>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-320 mx-auto gap-6 mb-15 md:mb-32'>
                        {
                            readList.map(book => <Book key={book.bookId} book={book}></Book>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>My Wish List</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;