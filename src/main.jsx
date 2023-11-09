import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import ErrorPage from './Pages/ErrorPage';
import Service from './Pages/Service';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AuthProvider from './providers/AuthProvider';
import MyService from './Pages/MyService';
import AddServices from './Pages/AddServices';
import MySchedules from './Pages/MySchedules';
import Moredetails from './Pages/Moredetails';
import Mybookings from './Pages/Mybookings';
import Root from './Layout/Root'
import MyPadingWork from './Pages/MyPadingWork';
import PrivateRoute from './Pages/PrivateRoute';

import('preline');

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/service',
        element: <Service></Service>
      },
      {
        path: '/addservices',
        element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
      },
      {
        path: '/myservice',
        element: <PrivateRoute><MyService></MyService></PrivateRoute>
      },
      {
        path: '/myschedules',
        element: <PrivateRoute><MySchedules></MySchedules></PrivateRoute>
      },
      {
        path: '/mybooking',
        element: <PrivateRoute><Mybookings></Mybookings></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/mypaindingwork',
        element: <PrivateRoute><MyPadingWork></MyPadingWork></PrivateRoute>
      },
      {
        path: '/service/:id',
        loader: ({ params }) => fetch(`https://backend-nine-umber.vercel.app/singleservice/${params.id}`),
        element: <PrivateRoute><Moredetails></Moredetails></PrivateRoute>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div >
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>,
  </div>
)


