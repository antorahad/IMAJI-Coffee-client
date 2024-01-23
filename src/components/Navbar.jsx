import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-white">
            <div className="navbar max-w-7xl mx-auto px-5 py-7">
                <div className="navbar-start">
                    <Link to={'/'}>
                        <h1 className="font-bold text-2xl">IMAJI <span className="text-baseColor">Coffee.</span></h1>
                    </Link>
                </div>
                <div className="navbar-end">
                    <ul className="hidden lg:flex items-center text-lg">
                        <li className="px-3"><Link to={'/'}>Home</Link></li>
                        <li className="px-3"><Link>Menu</Link></li>
                        <li className="px-3"><Link>Events</Link></li>
                        <li className="px-3"><Link>News</Link></li>
                        <li className="px-3"><Link><button className="btn px-6 rounded-none text-sm text-white bg-baseColor hover:bg-baseColor focus:bg-baseColor border-none outline-none">Sign In</button></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;