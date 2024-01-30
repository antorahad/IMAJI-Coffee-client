import { Link } from "react-router-dom";
import { FaCirclePlus } from "react-icons/fa6";
import { useEffect, useState } from "react";
import DashItemCard from "../components/DashItemCard";
import Error404 from  "../assets/404.gif";
import Swal from "sweetalert2";

const DashboardMenu = () => {
    const [manageItem, setManageItem] = useState([]);
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const handleMenuSearch = e => {
        setSearch(e.target.value);
        setCurrentPage(1);
    }

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:4000/items/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = manageItem.filter( item => item._id !== _id)
                            setManageItem(remaining);
                        }
                    })
            }
        });
    }

    const filteredItems = manageItem.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
    }

    useEffect(() => {
        fetch('http://localhost:4000/items')
            .then(res => res.json())
            .then(data => setManageItem(data))
    }, []);

    return (
        <div className="min-h-screen flex flex-col gap-7 py-10 px-5 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row lg:items-center justify-between gap-5">
                <h1 className="font-semibold text-5xl">Manage Menu</h1>
                <input onChange={handleMenuSearch} type="text" placeholder="Search Menu Item" className="input input-bordered w-full max-w-xs rounded-none" />
            </div>
            <div>
                <Link to={'/addform'}>
                    <button className="btn btn-info text-white rounded-none border-none outline-none btn-sm text-sm font-semibold">
                        <FaCirclePlus size={15} /> Add Item
                    </button>
                </Link>
            </div>
            <div>
                {
                    currentItems.length > 0 ?
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {
                                currentItems.map(dashItem => <DashItemCard key={dashItem._id} dashItem={dashItem} handleDelete={handleDelete}></DashItemCard>)
                            }
                        </div>
                        :
                        <div className="flex items-center justify-center">
                            <img src={Error404} alt="Error Image" />
                        </div>
                }
            </div>

            <div className="pagination flex items-center justify-center">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button key={index} onClick={() => paginate(index + 1)} className={currentPage === index + 1 ? "active bg-baseColor hover:bg-baseColor focus:bg-baseColor border-none outline-none btn mx-2 px-5 text-white rounded-none" : "btn mx-2 px-5 rounded-none"}>
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default DashboardMenu;
