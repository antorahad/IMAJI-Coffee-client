import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const [menuToggle, setMenuToggle] = useState(false);
    const [userToggle, setUserToggle] = useState(false);

    const handleMenuToggle = () => {
        setMenuToggle(!menuToggle);
    }
    const handleUserToggle = () => {
        setUserToggle(!userToggle);
    }
    return (
        <div className="bg-white shadow-sm">
            <div className="navbar max-w-7xl mx-auto px-5 py-7">
                <div className="navbar-start">
                    <div className="flex lg:hidden">
                        <button onClick={handleMenuToggle} className="mr-5">
                            {
                                menuToggle ?
                                    <AiOutlineClose size={30} />
                                    :
                                    <AiOutlineMenu size={30} />
                            }
                        </button>
                        <ul className={menuToggle ? "flex flex-col items-center bg-white p-5 z-10 border-b absolute shadow-sm top-24 left-0 w-full" : "hidden"}>
                            <li className="py-3"><Link to={'/'}>Home</Link></li>
                            <li className="py-3"><Link>Menu</Link></li>
                            <li className="py-3"><Link>Events</Link></li>
                            <li className="py-3"><Link>News</Link></li>
                        </ul>
                    </div>
                    <Link to={'/'}>
                        <h1 className="font-bold text-xl">IMAJI <span className="text-baseColor">Coffee.</span></h1>
                    </Link>
                </div>
                <div className="navbar-end">
                    <ul className="hidden lg:flex items-center text-lg">
                        <li className="px-3"><Link to={'/'}>Home</Link></li>
                        <li className="px-3"><Link>Menu</Link></li>
                        <li className="px-3"><Link>Events</Link></li>
                        <li className="px-3"><Link>News</Link></li>
                        {
                            user ?
                                <li className="relative px-3">
                                    {
                                        user?.photoURL ?
                                            <button className="avatar" onClick={handleUserToggle}>
                                                <div className="w-11 rounded-full">
                                                    <img src={user.photoURL} alt="User Image" />
                                                </div>
                                            </button>
                                            :
                                            <button className="avatar" onClick={handleUserToggle}>
                                                <div className="w-11 rounded-full">
                                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="User Image" />
                                                </div>
                                            </button>
                                    }

                                    <div className={userToggle ? "flex" : "hidden"}>
                                        <ul className={user ? 'flex flex-col items-center z-20 text-xs font-bold absolute right-0 bg-white border p-5 w-52' : 'hidden'}>
                                            <li className="py-3"><p>{user.email}</p></li>
                                            <li className={user?.displayName ? 'flex py-3' : 'hidden'}><p>{user.displayName}</p></li>
                                            <li className="py-3">
                                                <Link to={'/dashboard'}>Dashboard</Link>
                                            </li>
                                            <li className="py-3"><button onClick={logOut}>Sign Out</button></li>
                                        </ul>
                                    </div>
                                </li>
                                :
                                <li className="px-3">
                                    <Link to={'/signin'}>
                                        <button className="btn px-6 rounded-none text-sm text-white bg-baseColor hover:bg-baseColor focus:bg-baseColor border-none outline-none">Sign In</button>
                                    </Link>
                                </li>
                        }
                    </ul>

                    <ul className="flex lg:hidden">
                        {
                            user ?

                                <li className="relative">
                                    {
                                        user?.photoURL ?
                                            <button className="avatar" onClick={handleUserToggle}>
                                                <div className="w-11 rounded-full">
                                                    <img src={user.photoURL} alt="User Image" />
                                                </div>
                                            </button>
                                            :
                                            <button className="avatar" onClick={handleUserToggle}>
                                                <div className="w-11 rounded-full">
                                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="User Image" />
                                                </div>
                                            </button>
                                    }

                                    <div className={userToggle ? "flex" : "hidden"}>
                                        <ul className={user ? 'flex flex-col items-center z-20 text-xs font-bold absolute right-0 bg-white border p-5 w-52' : 'hidden'}>
                                            <li className="py-3"><p>{user.email}</p></li>
                                            <li className={user?.displayName ? 'flex py-3' : 'hidden'}><p>{user.displayName}</p></li>
                                            <li className="py-3">
                                                <Link to={'/dashboard'}>Dashboard</Link>
                                            </li>
                                            <li className="py-3"><button onClick={logOut}>Sign Out</button></li>
                                        </ul>
                                    </div>
                                </li>
                                :
                                <li><Link to={'/signin'}><button className="btn px-6 rounded-none text-sm text-white bg-baseColor hover:bg-baseColor focus:bg-baseColor border-none outline-none">Sign In</button></Link></li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;