import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoutes";
import CreateShop from "../Pages/CreateShop/CreateShop";
import Dashboard from "../Layout/Dashboard";
import UserHome from "../Dashboard/UserHome/UserHome";
import AddProduct from "../Dashboard/AddProduct/AddProduct";
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage></ErrorPage>,
      element: <MainLayout></MainLayout>,
   
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'register',
            element: <Register></Register>
        },
        {
            path: 'createShop',
            element: <PrivateRoute>
                <CreateShop></CreateShop>
            </PrivateRoute>
        }
      ]
    },
    {
       path: 'dashboard',
       element: <Dashboard></Dashboard>,
       children: 
       [
        {
          path: 'userHome',
          element: <UserHome></UserHome>
        },
        {
          path: 'addProduct',
          element: <AddProduct></AddProduct>
        }
       ]
    }
  ]);

  export default router;