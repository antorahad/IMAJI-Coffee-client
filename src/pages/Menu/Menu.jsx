import { useLoaderData } from "react-router-dom";
import HomeItemCard from "../Home/HomeItemCard";

const Menu = () => {
    const loadedMenuItem = useLoaderData();
    return (
        <div className="max-w-7xl mx-auto min-h-screen px-5 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    loadedMenuItem.map(homeItem => <HomeItemCard key={homeItem._id} homeItem={homeItem}></HomeItemCard>)
                }
            </div>
        </div>
    );
};

export default Menu;