import { CDN_URL } from "../utils/Links"; 



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
            className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-200 transition-all"
        >
            <img
                className="w-[250px] h-[150px] rounded-lg"
                src={CDN_URL + cloudinaryImageId}
                alt="FOOD"
            />

            <h2 className="font-bold py-4 text-lg">{name}</h2>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    );
};

export default RestaurantCard;

export const promotedTag= (RestaurantCard)=>{
    return (props)=>{
      return(
      <div>
        <label className=" absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
      )
  
    }
  };