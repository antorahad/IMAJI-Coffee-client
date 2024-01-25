import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home"
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import AddItem from "../pages/AddItem";
import UpdateItem from "../pages/UpdateItem";
import Error from "../error/Error";
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
            }
        ]
    },
]);

export default router
