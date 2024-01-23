import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";

const HomeMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => setMenu(data))
    }, [])
    return (
        <div className="max-w-7xl mx-auto px-5 py-10">
            <div className="flex items-center justify-evenly">
                <h1 className="text-4xl lg:text-5xl font-semibold">Find Your Favourite Menu</h1>
                <div>
                    <button className="hidden lg:flex btn px-6 rounded-none text-sm text-white bg-baseColor hover:bg-baseColor focus:bg-baseColor border-none outline-none">Explore Menu</button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
                {
                    menu.slice(0, 3).map(item => <MenuItem key={item.id} item={item}></MenuItem>)
                }
            </div>
            <div className="flex items-center justify-center lg:hidden">
                <button className="btn px-6 rounded-none text-sm text-white bg-baseColor hover:bg-baseColor focus:bg-baseColor border-none outline-none">Explore Menu</button>
            </div>
        </div>
    );
};

export default HomeMenu;