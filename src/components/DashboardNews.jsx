import { Link } from "react-router-dom";
import { FaCirclePlus } from "react-icons/fa6";
const DashboardNews = () => {
    return (
        <div className="py-10">
            <div className="flex items-center gap-7">
                <h1 className="text-2xl font-medium">Manage News</h1>
                <Link to={'/addform'} className="flex items-center gap-1">
                    <FaCirclePlus size={25}/>
                    <p className="text-2xl font-medium">
                        Add News
                    </p>
                </Link>
            </div>
        </div>
    );
};

export default DashboardNews;