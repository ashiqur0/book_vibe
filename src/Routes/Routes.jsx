import React from 'react';

import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import BookDetails from '../pages/BookDetails/BookDetails';
import ReadList from '../pages/ReadList/ReadList';
import WishList from '../pages/WishList/WishList';

const isDarkMode = window.matchMedia('(prefers-color-scheme: dark').matches;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root isDarkMode={isDarkMode}></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => fetch('booksData.json'),
        path: '/',
        element: <Home isDarkMode={isDarkMode}></Home>
      },
      {
        path: '/readList',
        loader: () => fetch('booksData.json'),
        Component: ReadList
      },
      {
        path: '/wishList',
        Component: WishList
      },
      {
        path: '/bookDetails/:id',
        loader: () => fetch('booksData.json'),
        element: <BookDetails isDarkMode={isDarkMode}></BookDetails>
      }
    ]
  },
]);