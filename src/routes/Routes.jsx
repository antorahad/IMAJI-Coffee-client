import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home"
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import AddItem from "../pages/AddItem";
import UpdateItem from "../pages/UpdateItem";
import Error from "../error/Error";
import Dashboard from "../pages/Dashboard";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <Error/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/signin',
                element: <Signin/>
            },
            {
                path: '/signup',
                element: <Signup/>
            },
            {
                path: '/addform',
                element: <AddItem/>
            },
            {
                path: '/updateform',
                element: <UpdateItem/>
            },
            {
                path: '/dashboard',
                element: <Dashboard/>
            }
        ]
    },
]);

export default router
