import { RiArrowLeftSLine } from "react-icons/ri";
import { Link, useLoaderData } from "react-router-dom";


const DashViewDetails = () => {
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
        <div className="flex flex-col justify-center gap-5 max-w-7xl mx-auto py-10 px-5">
            <Link to={'/dashboardmenu'} className="flex items-center text-baseColor text-sm font-bold">
                <RiArrowLeftSLine />
                <p>Manage Menu</p>
            </Link>
            <div className="flex flex-col lg:flex-row items-start justify-between gap-5">
                <div className="w-full lg:w-1/2">
                    <div className="w-full lg:w-[500px] h-[500px]">
                        <img src={image} alt="Item Image" className="w-full h-full" />
                    </div>
                </div>
                <div className="flex flex-col gap-5 w-full lg:w-1/2">
                    <p className="text-5xl font-semibold">{name}</p>
                    <div>
                        <p className="text-xl font-medium">Category: {category}</p>
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
                        <div className="text-red-500">
                            {
                                discountRate.length > 0 ?
                                    <div className="flex items-center gap-5">
                                        <p className="text-lg font-medium">Get discount {discountRate}% </p>
                                        
                                    </div>
                                    :
                                    <p className="hidden"></p>
                            }
                        </div>
                    </div>
                    <div className="text-sm font-semibold flex flex-col gap-5">
                    <div>
                            {
                                deliveryStatus === "Available" ?
                                <p>Delivery: Available Home delivery</p>
                                :
                                <p>Delivery: Only at Shop</p>
                            }
                        </div>
                        <div>
                        {
                                stockStatus === "Available" ?
                                <p>Stock: In stock</p>
                                :
                                <p>Stock: Out of stock</p>
                            }
                        </div>
                        <p>Import Date: {date}</p>
                        <p>Total Quantity: {quantity}</p>
                        <p>Description: {details}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashViewDetails;