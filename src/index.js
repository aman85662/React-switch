import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './home';
import About from './about';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> }
]);

const rootElement = document.getElementById('root');

  const root = ReactDOM.createRoot(rootElement);
  root.render(
   
      <RouterProvider router={router} />
   
  );



