import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Productpage from './pages/ProductPage'
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import OrderPage from "./pages/OrderPage"
import LoginPage from "./pages/LoginPage";
import SignUpPages from './pages/SignUpPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
 
  {
    path: "/product",
    element: <Productpage/>
  },
  {
    path: "/about",
    element: <AboutPage />
  },
  {
    path: "/contact",
    element: <ContactPage/>
  },
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "/home",
    element: <HomePage/>
  },
  {
    path:"/order",
    element: <OrderPage/>
  },
  {
    path:"/Login",
    element: <LoginPage/>
  },
  {
    path:"/SignUp",
    element: <SignUpPages/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>
);