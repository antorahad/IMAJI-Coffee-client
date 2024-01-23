const MenuItem = ({item}) => {
    const {title, price, delivery_status, discount} = item;
    return (
        <div className="card card-compact bg-white rounded-none shadow-sm">
            <figure><img src="https://img.freepik.com/free-photo/close-up-coffee-cup-wooden-table-steam-rising-generative-ai_188544-8921.jpg?size=626&ext=jpg&uid=R86799529&ga=GA1.1.459985010.1704129856&semt=sph" alt="Menu Image"/></figure>
            <div className="card-body">
                <h2 className="text-3xl font-semibold">{title}</h2>
                <p className="text-xs font-medium text-slate-500">{delivery_status} For Serve & Delivery</p>
                <p className="text-2xl font-semibold">${price}</p>
                <p className="text-sm font-semibold text-red-500">Get {discount}% Off in App</p>
            </div>
        </div>
    );
};

export default MenuItem;