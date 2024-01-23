import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Layout = () => {
    return (
        <div className="font-google text-slate-950 bg-white">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;