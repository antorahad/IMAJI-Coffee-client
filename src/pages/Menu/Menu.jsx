import { useLoaderData } from "react-router-dom";
import HomeItemCard from "../Home/HomeItemCard";
import { useEffect, useState } from "react";
import Error404 from "../../assets/404.gif";

const Menu = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    useEffect(() => {
        fetch('http://localhost:4000/category')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedCategory]);

    const loadedMenuItem = useLoaderData();

    const handleSearch = e => {
        setSearch(e.target.value);
        setCurrentPage(1);
    }

    const handleFilter = e => {
        setSort(e.target.value);
        setCurrentPage(1);
    }

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const currentItems = loadedMenuItem
        .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
        .filter((item) => {
            const [min, max] = sort.split('-').map(Number);

            if (min && max) {
                return item.price >= min && item.price <= max;
            } else if (min) {
                return item.price >= min;
            } else if (max) {
                return item.price <= max;
            }

            return true;
        })
        .filter((item) => {
            if (selectedCategory && selectedCategory !== 'All') {
                return item.category === selectedCategory;
            }

            return true;
        })
        .slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(
        loadedMenuItem
            .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
            .filter((item) => {
                const [min, max] = sort.split('-').map(Number);

                if (min && max) {
                    return item.price >= min && item.price <= max;
                } else if (min) {
                    return item.price >= min;
                } else if (max) {
                    return item.price <= max;
                }

                return true;
            })
            .filter((item) => {
                if (selectedCategory && selectedCategory !== 'All') {
                    return item.category === selectedCategory;
                }

                return true;
            })
            .length / itemsPerPage
    );

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="flex flex-col gap-5 max-w-7xl mx-auto min-h-screen px-5 py-10">
            <h1 className="text-5xl font-bold">Our Menu</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <input onChange={handleSearch} type="text" placeholder="Search Menu" className="input input-bordered w-full rounded-none md:col-span-2 col-span-1" />
                <select onChange={handleFilter} className="select select-bordered w-full rounded-none">
                    <option value="">Filter by price</option>
                    <option value="10-50">From $10 to $50</option>
                    <option value="50-100">From $50 to $100</option>
                    <option value="100-150">From $100 to $150</option>
                    <option value="150-200">From $150 to $200</option>
                    <option value="200-300">From $200 to $300</option>
                </select>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-5 mt-10 mb-5">
                <button
                    onClick={() => handleCategoryClick('All')}
                    className={`btn ${selectedCategory === 'All' ? "active bg-baseColor hover:bg-baseColor focus:bg-baseColor border-none outline-none btn mx-2 px-5 text-white rounded-none" : "btn mx-2 px-5 rounded-none"}`}
                >
                    All
                </button>
                {categories.map((category) => (
                    <button
                        key={category._id}
                        onClick={() => handleCategoryClick(category.category)}
                        className={`btn ${selectedCategory === category.category ? "active bg-baseColor hover:bg-baseColor focus:bg-baseColor border-none outline-none btn mx-2 px-5 text-white rounded-none" : "btn mx-2 px-5 rounded-none"}`}
                    >
                        {category.category}
                    </button>
                ))}
            </div>
            <div>
                {currentItems.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {currentItems.map(homeItem => <HomeItemCard key={homeItem._id} homeItem={homeItem}></HomeItemCard>)}
                    </div>
                ) : (
                    <div className="flex items-center justify-center">
                        <img src={Error404} alt="Error Image" />
                    </div>
                )}
            </div>
            <div className="flex justify-center mt-5">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button key={index} onClick={() => handlePageChange(index + 1)} className={currentPage === index + 1 ? "active bg-baseColor hover:bg-baseColor focus:bg-baseColor border-none outline-none btn mx-2 px-5 text-white rounded-none" : "btn mx-2 px-5 rounded-none"}>
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Menu;
