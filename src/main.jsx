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
    path: '/myservice',
    element: <MyService></MyService>
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/register',
    element: <Register></Register>
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
