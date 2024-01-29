import { RiArrowLeftSLine } from "react-icons/ri";
import { Link, useLoaderData } from "react-router-dom";

const HomeViewDetails = () => {
    const loadedMenuData = useLoaderData();
    console.log(loadedMenuData)
    const {
        name,
        category,
        price,
        discountRate,
        discountPrice,
        stockStatus,
        deliveryStatus,
        image,
        details
    } = loadedMenuData
    return (
        <div className="flex flex-col justify-center gap-5 max-w-7xl mx-auto py-10 px-5">
            <Link to={'/'} className="flex items-center text-baseColor text-sm font-bold">
                <RiArrowLeftSLine />
                <p>Menu</p>
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
                                discountPrice.length > 1 ?
                                    <div className="flex items-center gap-3">
                                        <p className="text-lg font-medium">Price: $ {discountPrice}</p>
                                        <del className="text-sm font-medium">$ {price}</del>
                                    </div>
                                    :
                                    <p className="text-lg font-medium">Price: $ {price}</p>
                            }
                        </div>
                        <div className="text-baseColor">
                            {
                                discountRate.length > 1 ?
                                    <div className="flex items-center gap-5">
                                        <p className="text-lg font-medium">Get discount {discountRate}% </p>
                                        
                                    </div>
                                    :
                                    <p className="hidden"></p>
                            }
                        </div>
                    </div>
                    <div className="text-sm font-semibold flex flex-col gap-5">
                        <p>Delivery Status: {deliveryStatus} for home delivery</p>
                        <p>Stock Status: {stockStatus} in stock</p>
                        <p>Description: {details}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeViewDetails;