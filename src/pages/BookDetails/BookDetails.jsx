import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import '../../App.css'

const BookDetails = () => {
    const { id } = useParams();
    const booksData = useLoaderData();
    const selectedBook = booksData.find(book => book.bookId === parseInt(id));
    console.log(selectedBook);
    const { image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = selectedBook;

    return (
        <div className='mt-13 mb-41 px-4'>
            <div className='flex gap-12 items-center max-w-320 mx-auto '>
                <div className='flex justify-center items-center bg-gray-200 w-1/2 rounded-2xl'>
                    <img className='h-full p-18' src={image} alt="" />
                </div>

                <div className='w-1/2'>
                    <h2 className='playfair-display-font text-[40px] font-bold mb-4'>{bookName}</h2>

                    <h3 className='text-[20px] font-medium mb-6 '>By : {author}</h3>

                    <p className='text-[20px] font-medium border-t-1 border-b-1 border-gray-400 py-4 mb-6'>{category}</p>

                    <p className='mb-6'>
                        <span className='font-bold'>Review : </span>
                        <span className='text-gray-400 text-justify'>{review}</span>
                    </p>

                    <div className='flex gap-3 items-center'>
                        <span className='font-bold'>Tag</span>
                        {
                            tags.map(tag => <div key={tag} className='bg-gray-50 rounded-3xl px-4 py-1 text-lime-500 font-medium'>
                                ${tag}
                            </div>)
                        }
                    </div>

                    <div className='flex gap-16 items-center border-t-1 border-gray-400 mt-6 pt-6 mb-8'>
                        <div className='text-gray-400'>
                            <h4>Number of Pages:</h4>
                            <h4>Publisher:</h4>
                            <h4>Year of Publishing:</h4>
                            <h4>Rating:</h4>
                        </div>
                        <div className='font-bold'>
                            <h4>{totalPages}</h4>
                            <h4>{publisher}</h4>
                            <h4>{yearOfPublishing}</h4>
                            <h4>{rating}</h4>
                        </div>
                    </div>
                    <div className='md:flex hidden gap-4 font-semibold text-white'>
                        <button className='border-1 border-gray-400 px-7 py-3 rounded-md cursor-pointer'>Read</button>
                        <button className='bg-blue-400 px-7 py-3 rounded-md cursor-pointer'>Wishlist</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BookDetails;