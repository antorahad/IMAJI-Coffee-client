import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home"
import Signin from "../pages/Authentication/Signin";
import Signup from "../pages/Authentication/Signup";
import AddItem from "../pages/AdminMenu/AddItem";
import UpdateItem from "../pages/AdminMenu/UpdateItem";
import Error from "../error/Error";
import DashboardMenu from "../pages/AdminMenu/DashboardMenu";
import DashViewDetails from "../pages/AdminMenu/DashViewDetails";
import HomeViewDetails from "../pages/Home/HomeViewDetails";
import Menu from "../pages/Menu/Menu";
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
            // Website Menu
            {
                path: '/menu',
                element: <Menu/>,
                loader: () => fetch('http://localhost:4000/items')
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
