import React from 'react';
import Book from './Book';

const Books = ({ bookData }) => {

  return (
    <div>
      <h1 className='font-bold text-[40px] text-center mb-9'>Books</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-320 mx-auto gap-6 mb-15 md:mb-32 px-4 lg:px-0'>
        {
          bookData.map(book => <Book key={book.bookId} book={book}></Book>)
        }
      </div>
    </div>
  );
};

export default Books;