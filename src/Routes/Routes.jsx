import React from 'react';

import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';

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
      }
    ]
  },
]);