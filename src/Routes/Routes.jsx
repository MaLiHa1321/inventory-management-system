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
  ]);

  export default router;