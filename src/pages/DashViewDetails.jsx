import { useLoaderData } from "react-router-dom";

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
        <div className="max-w-7xl mx-auto">
            <img src={image} alt="Item Image" />
            <p>{name}</p>
            <p>{price}</p>
            <p>{quantity}</p>
            <p>{deliveryStatus}</p>
            <p>{date}</p>
            <p>{details}</p>
            <p>{discountPrice}</p>
            <p>{discountRate}</p>
            <p>{stockStatus}</p>
            <p>{category}</p>
        </div>
    );
};

export default DashViewDetails;