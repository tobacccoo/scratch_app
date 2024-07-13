import { CDN_URL } from './Links';

const RestaurantCard = (props) => {
    const { resData } = props;

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla,
    } = resData?.info;

    return (
        <div
            className="res-card"
            style={{
                backgroundColor: '#f0f0f0',
            }}
        >
            <img
                className="res-logo"
                src={CDN_URL + cloudinaryImageId}
                alt="FOOD"
            />

            <h2>{name}</h2>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    );
};

export default RestaurantCard;
