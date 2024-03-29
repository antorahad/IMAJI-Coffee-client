import { RiArrowLeftSLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddItem = () => {
    const handleAddItem = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const category = form.category.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const discountRate = form.discountRate.value;
        const discountPrice = form.discountPrice.value;
        const stockStatus = form.stockStatus.value;
        const deliveryStatus = form.deliveryStatus.value;
        const image = form.image.value;
        const date = form.date.value;
        const details = form.details.value;

        const newItem = {
            name,
            category,
            price,
            quantity,
            discountRate,
            discountPrice,
            stockStatus,
            deliveryStatus,
            image,
            date,
            details
        }

        console.log(newItem);

        fetch('http://localhost:4000/items', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: "Success",
                        text: "Item Added Successfully",
                        icon: "success"
                    });

                    form.reset()
                }
            })
    }
    return (
        <div className="min-h-screen py-10 px-5 max-w-6xl mx-auto">
            <div className="flex flex-col gap-5">
                <Link to={'/dashboardmenu'} className="flex items-center text-baseColor text-sm font-bold">
                    <RiArrowLeftSLine />
                    <p>Manage Menu</p>
                </Link>
                <h1 className="text-4xl font-semibold">Add Item To Menu</h1>
                <div className="card w-full bg-white rounded-none border">
                    <form onSubmit={handleAddItem} className="card-body">
                        <div className="grid grid-cols-2 gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Item Name" className="input input-bordered rounded-none" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <input type="text" name="category" placeholder="Item Category" className="input input-bordered rounded-none" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" name="price" placeholder="Item Price" className="input input-bordered rounded-none" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Quantity</span>
                                </label>
                                <input type="text" name="quantity" placeholder="Item Quantity" className="input input-bordered rounded-none" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Discount Rate (%)</span>
                                </label>
                                <input type="text" name="discountRate" placeholder="Discount Rate" className="input input-bordered rounded-none" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Discount Price</span>
                                </label>
                                <input type="text" name="discountPrice" placeholder="Discount Price" className="input input-bordered rounded-none" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Stock Status</span>
                                </label>
                                <select name="stockStatus" className="select select-bordered w-full rounded-none">
                                    <option value="">Status</option>
                                    <option value="Available">Available</option>
                                    <option value="Unavailable">Unavailable</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Delivery Status</span>
                                </label>
                                <select name="deliveryStatus" className="select select-bordered w-full rounded-none">
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
                                <input type="text" name="image" placeholder="Item Sample Image" className="input input-bordered rounded-none" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input type="date" name="date" className="input input-bordered rounded-none" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Item Details</span>
                                </label>
                                <textarea name="details" placeholder="Add Prodcut Details" className="textarea textarea-bordered rounded-none h-52" />
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn px-6 rounded-none text-sm text-white bg-baseColor hover:bg-baseColor focus:bg-baseColor border-none outline-none" value="Add To Menu" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddItem;