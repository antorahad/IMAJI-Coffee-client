import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home"
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import AddItem from "../pages/AddItem";
import UpdateItem from "../pages/UpdateItem";
import Error from "../error/Error";
import DashboardMenu from "../pages/DashboardMenu";
import DashViewDetails from "../pages/DashViewDetails";
import HomeViewDetails from "../pages/HomeViewDetails";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <Error/>,
        children: [
            // Website Home
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/viewhomedetails/:id',
                element: <HomeViewDetails/>,
                loader: ({params}) => fetch(`http://localhost:4000/items/${params.id}`)
            },
            // Authentication 
            {
                path: '/signin',
                element: <Signin/>
            },
            {
                path: '/signup',
                element: <Signup/>
            },
            // Admin Menu Item
            {
                path: '/dashboardmenu',
                element: <DashboardMenu/>
            },
            {
                path: '/viewdetails/:id',
                element: <DashViewDetails/>,
                loader: ({params}) => fetch(`http://localhost:4000/items/${params.id}`)
            },
            {
                path: '/addform',
                element: <AddItem/>
            },
            {
                path: '/updateform/:id',
                element: <UpdateItem/>,
                loader: ({params}) => fetch(`http://localhost:4000/items/${params.id}`)
            }
        ]
    },
]);

export default router
