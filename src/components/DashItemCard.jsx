const DashItemCard = ({ dashItem }) => {
    const { name, image, deliveryStatus, price, discountRate } = dashItem
    return (
        <div className="card card-compact bg-white rounded-none shadow-sm">
            <figure><img src={image} alt="Menu Image" className="h-[250px] w-full object-cover"/></figure>
            <div className="card-body">
                <h2 className="text-3xl font-semibold">{name}</h2>
                <p className="text-xs font-medium text-slate-500">{deliveryStatus} For Serve & Delivery</p>
                <p className="text-2xl font-semibold">${price}</p>
                <p className="text-sm font-semibold text-red-500">Get {discountRate}% Off in App</p>
                <div className="card-actions justify-start">
                    <button className="btn btn-success rounded-none btn-sm font-semibold text-sm text-white">View</button>
                    <button className="btn btn-warning rounded-none btn-sm font-semibold text-sm text-white">Update</button>
                    <button className="btn btn-error rounded-none btn-sm font-semibold text-sm text-white">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default DashItemCard;