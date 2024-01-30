import { Link } from "react-router-dom";

const DashItemCard = ({ dashItem, handleDelete }) => {
    const { _id, name, image, deliveryStatus, price, discountRate, discountPrice } = dashItem
    return (
        <div className="card card-compact bg-white rounded-none shadow-sm">
            <figure><img src={image} alt="Menu Image" className="h-[280px] w-full" /></figure>
            <div className="card-body">
                <Link to={`/viewdetails/${_id}`}>
                    <h2 className="text-2xl font-semibold">{name}</h2>
                </Link>
                <div className="text-xs font-medium text-slate-500">
                    {
                        deliveryStatus === "Available" ?
                            <p>Available Home delivery</p>
                            :
                            <p>Only at Shop</p>
                    }
                </div>
                <div className="flex items-center gap-5">
                    <div>
                        {
                            discountPrice.length > 0 ?
                                <div className="flex items-center gap-3">
                                    <p className="text-lg font-medium">Price: $ {discountPrice}</p>
                                    <del className="text-sm font-medium text-red-500">$ {price}</del>
                                </div>
                                :
                                <p className="text-lg font-medium">Price: $ {price}</p>
                        }
                    </div>
                </div>
                <div className="text-sm font-semibold text-red-500">
                    {
                        discountRate.length > 0 ?
                            <p>Get discount {discountRate}% </p>
                            :
                            <p className="hidden"></p>
                    }
                </div>
                <div className="card-actions justify-start">
                    <Link to={`/updateform/${_id}`}>
                        <button className="btn btn-warning rounded-none btn-sm font-semibold text-sm text-white">Update</button>
                    </Link>
                    <button onClick={() => handleDelete(_id)} className="btn btn-error rounded-none btn-sm font-semibold text-sm text-white">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default DashItemCard;