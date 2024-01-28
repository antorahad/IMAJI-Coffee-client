import { RiArrowLeftSLine } from "react-icons/ri";
import { Link, useLoaderData } from "react-router-dom";

const UpdateItem = () => {
    const loadedMenuData = useLoaderData();
    console.log(loadedMenuData)
    const {
        name,
        category,
        price,
        quantity,
        discountRate,
        discountPrice,
        stockStatus,
        deliveryStatus,
        image,
        details,
        date
    } = loadedMenuData
    return (
        <div className="min-h-screen py-10 px-5 max-w-6xl mx-auto">
            <div className="flex flex-col gap-5">
            <Link to={'/dashboardmenu'} className="flex items-center text-baseColor text-sm font-bold">
                    <RiArrowLeftSLine />
                    <p>Manage Menu</p>
                </Link>
                <h1 className="text-4xl font-semibold">Update Menu Item</h1>
                <div className="card w-full bg-white rounded-none border">
                    <form className="card-body">
                        <div className="grid grid-cols-2 gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" defaultValue={name} className="input input-bordered rounded-none" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <input type="text" name="category" defaultValue={category} className="input input-bordered rounded-none" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" name="price" defaultValue={price} className="input input-bordered rounded-none" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Quantity</span>
                                </label>
                                <input type="text" name="quantity" defaultValue={quantity} className="input input-bordered rounded-none" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Discount Rate (%)</span>
                                </label>
                                <input type="text" name="discountRate" defaultValue={discountRate} className="input input-bordered rounded-none" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Discount Price</span>
                                </label>
                                <input type="text" name="discountPrice" defaultValue={discountPrice} className="input input-bordered rounded-none" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Stock Status</span>
                                </label>
                                <select name="stockStatus" defaultValue={stockStatus} className="select select-bordered w-full rounded-none">
                                <option value="">Status</option>
                                    <option value="Available">Available</option>
                                    <option value="Unavailable">Unavailable</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Delivery Status</span>
                                </label>
                                <select name="deliveryStatus" defaultValue={deliveryStatus} className="select select-bordered w-full rounded-none">
                                <option value="">Status</option>
                                    <option value="Available">Available</option>
                                    <option value="Unavailable">Unavailable</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image URl</span>
                                </label>
                                <input type="text" name="image" defaultValue={image} className="input input-bordered rounded-none" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input type="date" name="date" defaultValue={date} className="input input-bordered rounded-none" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Item Details</span>
                                </label>
                                <textarea name="details" defaultValue={details} className="textarea textarea-bordered rounded-none h-52" />
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn px-6 rounded-none text-sm text-white bg-baseColor hover:bg-baseColor focus:bg-baseColor border-none outline-none" value="Update Menu Item" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateItem;