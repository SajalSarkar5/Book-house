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
        element: <AddServices></AddServices>
      },
      {
        path: '/myservice',
        element: <MyService></MyService>
      },
      {
        path: '/myschedules',
        element: <MySchedules></MySchedules>
      },
      {
        path: '/mybooking',
        element: <Mybookings></Mybookings>
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
        element: <MyPadingWork></MyPadingWork>
      },
      {
        path: '/service/:id',
        loader: ({ params }) => fetch(`http://localhost:3000/singleservice/${params.id}`),
        element: <Moredetails></Moredetails>
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


