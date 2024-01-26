const UpdateItem = () => {
    return (
        <div className="min-h-screen py-10 px-5 max-w-6xl mx-auto">
        <div className="flex flex-col gap-5">
            <h1 className="text-4xl font-semibold">Update Menu Item</h1>
            <div className="card w-full bg-white rounded-none border">
                <form className="card-body">
                    <div className="grid grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Item Name" className="input input-bordered rounded-none" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" placeholder="Item Category" className="input input-bordered rounded-none" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" placeholder="Item Price" className="input input-bordered rounded-none" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="text" placeholder="Item Quantity" className="input input-bordered rounded-none" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Discount Status</span>
                            </label>
                            <select className="select select-bordered w-full rounded-none">
                                <option disabled selected>Status</option>
                                <option>Avaiable</option>
                                <option>Unavailable</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Discount Price</span>
                            </label>
                            <input type="text" placeholder="Discount Price" className="input input-bordered rounded-none" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Stock Status</span>
                            </label>
                            <select className="select select-bordered w-full rounded-none">
                                <option disabled selected>Status</option>
                                <option>Avaiable</option>
                                <option>Unavailable</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Delivery Status</span>
                            </label>
                            <select className="select select-bordered w-full rounded-none">
                                <option disabled selected>Status</option>
                                <option>Avaiable</option>
                                <option>Unavailable</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URl</span>
                            </label>
                            <input type="text" placeholder="Item Sample Image" className="input input-bordered rounded-none" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" placeholder="Item Sample Image" className="input input-bordered rounded-none" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Item Details</span>
                            </label>
                            <textarea placeholder="Add Prodcut Details" className="textarea textarea-bordered rounded-none h-52" />
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