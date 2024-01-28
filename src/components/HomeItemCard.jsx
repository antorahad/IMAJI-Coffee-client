const HomeItemCard = ({homeItem}) => {
    const { name, image, deliveryStatus, price, discountRate } = homeItem
    return (
        <div className="card card-compact bg-white rounded-none shadow-sm">
            <figure><img src={image} alt="Menu Image" className="h-[280px] w-full"/></figure>
            <div className="card-body">
                <h2 className="text-3xl font-semibold">{name}</h2>
                <p className="text-xs font-medium text-slate-500">{deliveryStatus} For Serve & Delivery</p>
                <p className="text-2xl font-semibold">${price}</p>
                <p className="text-sm font-semibold text-red-500">Get {discountRate}% Off in App</p>
            </div>
        </div>
    );
};

export default HomeItemCard;