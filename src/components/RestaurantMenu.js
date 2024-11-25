import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState([]);

    const {resId} = useParams()

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId +"&catalog_qa=undefined&submitAction=ENTER")
        const json = await data.json();
        setResInfo(json.data);
    };

    // Extract restaurant details
    const { name, cuisines, costForTwoMessage, avgRatingString } = resInfo?.cards?.[2]?.card?.card?.info || {};

    // Extract all menu items from all categories
    const categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
    console.log(categories)
    let allItems = [];

    categories.forEach(category => {
        const itemCards = category?.card?.card?.itemCards || [];
        allItems = allItems.concat(itemCards);
    });

    if (!resInfo || resInfo.length === 0) {
        return <div>Loading...</div>;
    }
    return (
        <div className='menu'>
            <h1>{name} - {avgRatingString} stars</h1>
            <p>{cuisines?.join(', ')} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {allItems.map((item, index) => (
                    <li key={index}>
                        <span>{item.card.info.name}</span>
                        <span className="price">₹{item.card.info.price / 100}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
    
};

export default RestaurantMenu;
