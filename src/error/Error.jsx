import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Error404 from  "../assets/404.gif";

const Error = () => {
    return (
        <div>
            <Navbar/>
            <div className="min-h-screen flex items-center justify-center px-5">
                <img src={Error404} alt="Error Image" />
            </div>
            <Footer/>
        </div>
    );
};

export default Error;