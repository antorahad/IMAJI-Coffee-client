import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-slate-950 text-white">
            <div className="max-w-7xl mx-auto p-10 flex flex-col items-center justify-center gap-5">
                <h1 className="font-semibold text-4xl">Our Location</h1>
                <p className="text-sm font-light">Ji. Bangkringan No 19, RT.11/RW.2, Kota Surabaya, 60124</p>
                <p className="text-sm font-light">Customer Service +6282-2876-6862</p>
                <p className="text-sm font-light">We Are Open from Sun - Mon 10 AM - 22 PM</p>
                <div className="w-full h-[2px] bg-white"></div>
                <div className="text-baseColor flex items-center gap-3">
                    <Link>
                        <FaInstagram size={20} />
                    </Link>
                    <Link>
                        <FaFacebookF size={20} />
                    </Link>
                    <Link>
                        <FaTwitter size={20} />
                    </Link>
                    <Link>
                        <FaLinkedinIn size={20} />
                    </Link>
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-between gap-5 text-baseColor w-full">
                    <div>
                        <p className="text-sm"> &copy; 2024 IMAJI Coffee. All rights reserved</p>
                    </div>
                    <ul className="flex items-center justify-center gap-3">
                        <li>
                            <Link>
                                Terms & Conditions
                            </Link>
                        </li>
                        <li><span>|</span></li>
                        <li>
                            <Link>
                                Privacy Policy
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;