import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import AuthProvider from './Provider/AuthProvider.jsx';
import Login from './Auth/Login.jsx';
import Auth from './Layouts/Auth.jsx';
import Register from './Auth/Register.jsx';
import AllFoods from './Layouts/AllFoods.jsx';
import AddFood from './Layouts/AddFood.jsx';
import MyFoods from './Layouts/MyFoods.jsx';
import MyRequests from './Layouts/MyRequests.jsx';
import Home from './Layouts/Home.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './Private/PrivateRoute.jsx';
import Details from './Layouts/Details.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/auth',
        element: <Auth />,
        children: [
          {
            path: "/auth",
            element: <Login />,
          },
          {
            path: "/auth/register",
            element: <Register />,
          },
        ]
      },
      {
        path: '/foods',
        element: <AllFoods/>
      },
      {
        path: '/food/:id',
        element: <Details/>
      },
      {
        path: '/addfood',
        element: <PrivateRoute><AddFood/></PrivateRoute> 
      },
      {
        path: '/myfoods',
        element: <PrivateRoute><MyFoods/></PrivateRoute>
      },
      {
        path: '/myrequests',
        element: <PrivateRoute><MyRequests/></PrivateRoute>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  </StrictMode>,
)
