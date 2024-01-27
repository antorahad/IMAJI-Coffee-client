import { Link } from "react-router-dom";
import { FaCirclePlus } from "react-icons/fa6";
import { useEffect, useState } from "react";
import DashItemCard from "./DashItemCard";

const DashboardItem = () => {
    const [manageItem, setManageItem] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/items')
        .then(res => res.json())
        .then(data => setManageItem(data))
    }, [])
    return (
        <div className="py-10">
            <div className="flex items-center gap-7">
                <h1 className="text-2xl font-medium">Manage Menu</h1>
                <Link to={'/addform'} className="flex items-center gap-1">
                    <FaCirclePlus size={25}/>
                    <p className="text-2xl font-medium">
                        Add Item
                    </p>
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                {
                    manageItem.map(dashItem => <DashItemCard key={dashItem._id} dashItem={dashItem}></DashItemCard>)
                }
            </div>
        </div>
    );
};

export default DashboardItem;