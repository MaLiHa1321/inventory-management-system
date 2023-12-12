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
import Payment from "../Dashboard/Payment/Payment";
import Paymethod from "../Dashboard/Paymethod/Paymethod";
import SalesSummary from "../Dashboard/SalesSummary/SalesSummary";
import AdminHome from "../Dashboard/AdminHome/AdminHome";
import ConatctViaEmail from "../Pages/Home/Contact/ConatctViaEmail";
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
        },
        {
            path: 'contactEmail',
            element: <ConatctViaEmail></ConatctViaEmail>
        }
      ]
    },
    {
       path: 'dashboard',
       element: <PrivateRoute>

         <Dashboard></Dashboard>
       </PrivateRoute>,
       children: 
       [
        {
          path: 'userHome',
          element: <PrivateRoute>

            <UserHome></UserHome>
          </PrivateRoute>
        },
        {
          path: 'addProductbtn',
          element: <PrivateRoute>

            <AddProductbtn></AddProductbtn>
          </PrivateRoute>
        },
        {
          path: 'addProduct',
          element: <PrivateRoute>

            <AddProduct></AddProduct>
          </PrivateRoute>
        },
        {
          path: 'allProducts',
          element: <PrivateRoute>

            <ProductDetails></ProductDetails>
          </PrivateRoute>
        },
        {
          path: 'salesCollection',
          element:  <PrivateRoute>

            <SalesCollection></SalesCollection>
          </PrivateRoute>
        },
        {
          path: 'addToCart',
          element: <PrivateRoute>

            <AddToCart></AddToCart>
          </PrivateRoute>
        },
        {
          path: 'payment',
          element: <PrivateRoute>

            <Payment></Payment>
          </PrivateRoute>
        },
        {
          path: 'SalesSummary',
          element: <PrivateRoute>

            <SalesSummary></SalesSummary>
          </PrivateRoute>
        },
        {
          path: 'updateProduct/:id',
          element: <UpdateProduct></UpdateProduct>,
          loader: ({params}) => fetch(`https://inventory-server-rho.vercel.app/product/${params.id}`)
        },
        {
          path: 'paymethod/:id',
          element: <Paymethod></Paymethod>,
          loader: ({params}) => fetch(`https://inventory-server-rho.vercel.app/premium/${params.id}`)
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
          path: 'allProduct',
          element: <AdminRoute>

            <AdminAllProduct></AdminAllProduct>
          </AdminRoute>
        },
        {
          path: 'adminHome',
          element: <AdminRoute>

            <AdminHome></AdminHome>
          </AdminRoute>
        },
       ]
    }
  ]);

  export default router;