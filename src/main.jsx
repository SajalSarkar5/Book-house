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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>
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
    path: '/service/:id',
    loader: ({ params }) => fetch(`http://localhost:3000/singleservice/${params.id}`),
    element: <Moredetails></Moredetails>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='container mx-auto'>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>,
  </div>
)
