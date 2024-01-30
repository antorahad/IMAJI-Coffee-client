import { useEffect, useState } from "react";
import HomeItemCard from "./HomeItemCard";
import { Link } from "react-router-dom";

const HomeMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/items')
            .then(res => res.json())
            .then(data => setMenu(data))
    }, [])
    return (
        <div className="max-w-7xl mx-auto px-5 py-10">
            <div className="flex items-center justify-between">
                <h1 className="text-4xl lg:text-5xl font-semibold">Find Your Favourite Menu</h1>
                <div>
                    <Link to={'/menu'}>
                        <button className="hidden lg:flex btn px-6 rounded-none text-sm text-white bg-baseColor hover:bg-baseColor focus:bg-baseColor border-none outline-none">Explore Menu</button>
                    </Link>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
                {
                    menu.slice(0, 3).map(homeItem => <HomeItemCard key={homeItem._id} homeItem={homeItem}></HomeItemCard>)
                }
            </div>
            <div className="flex items-center justify-center lg:hidden">
                <Link to={'/menu'}>
                    <button className="hidden lg:flex btn px-6 rounded-none text-sm text-white bg-baseColor hover:bg-baseColor focus:bg-baseColor border-none outline-none">Explore Menu</button>
                </Link>
            </div>
        </div>
    );
};

export default HomeMenu;