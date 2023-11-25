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
import AddProductbtn from "../Dashboard/AddProduct/AddProductbtn";
import ProductDetails from "../Dashboard/ProductDetalis/ProductDetails";
import UpdateProduct from "../Dashboard/UpdateProduct/UpdateProduct";
import AllUser from "../Dashboard/AllUser/AllUser";
import AdminRoute from "../PrivateRoute/AdminRoute";
import SalesCollection from "../Dashboard/SalesCollection/SalesCollection";
import AllShop from "../Dashboard/AllShop/AllShop";
import AdminAllProduct from "../Dashboard/AdminAllProduct/AdminAllProduct";
import AddToCart from "../Dashboard/AddToCart/AddToCart";
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
          path: 'addProductbtn',
          element: <AddProductbtn></AddProductbtn>
        },
        {
          path: 'addProduct',
          element: <AddProduct></AddProduct>
        },
        {
          path: 'allProducts',
          element: <ProductDetails></ProductDetails>
        },
        {
          path: 'salesCollection',
          element: <SalesCollection></SalesCollection>
        },
        {
          path: 'addToCart',
          element: <AddToCart></AddToCart>
        },
        {
          path: 'updateProduct/:id',
          element: <UpdateProduct></UpdateProduct>,
          loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
        },

        // admin Routes
        {
          path: 'allUser',
          element: <AdminRoute>

            <AllUser></AllUser>
          </AdminRoute>
        },
        {
          path: 'allShop',
          element: <AdminRoute>

            <AllShop></AllShop>
          </AdminRoute>
        },
        {
          path: 'AdminAllProduct',
          element: <AdminRoute>

            <AdminAllProduct></AdminAllProduct>
          </AdminRoute>
        },
       ]
    }
  ]);

  export default router;