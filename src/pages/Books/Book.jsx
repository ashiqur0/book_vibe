import React from 'react';
import '../../App.css'
import { Star } from 'lucide-react';
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { Link } from 'react-router';

const Book = ({ book }) => {

    const { bookId, image, tags, bookName, author, category, rating } = book;

    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className='border-1 border-gray-400 p-6 rounded-xl w-full '>
                <div className='bg-gray-200 flex justify-center items-center py-8 rounded-xl'>
                    <img className='h-41' src={image} alt="" />
                </div>

                <div className='flex gap-3'>
                    {
                        tags.map(tag => <div key={tag} className='bg-gray-50 rounded-3xl px-4 py-1 text-lime-500 font-medium mt-6'>
                            ${tag}
                        </div>)
                    }
                </div>

                <h2 className='playfair-display-font text-3xl font-bold mt-6'>{bookName}</h2>

                <h3 className='font-medium text-gray-400 mt-4'>By: {author}</h3>

                <div className='mt-10 flex justify-between items-center'>
                    <p>{category}</p>
                    <div className='flex gap-2 items-center'>
                        <p>{rating}</p>
                        {/* <Star/> */}
                        <FaRegStarHalfStroke />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;