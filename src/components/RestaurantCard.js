import { CDN_URL } from "./CDNlinks";

const RestaurantCard = ({resData })=> {
    return(
      
      <div className='res-card'>
      <img className="res-img "alt='res-img'
      src={CDN_URL+ resData.info.cloudinaryImageId}/>
      <h3>{resData.info.name}</h3>
      <h3>{resData.info.cuisines.join(", ")}</h3>
  
      <h3>{resData.info.avgRating}stars</h3>
      <h3>{resData.info.sla.deliveryTime}mins</h3>
      </div>
     
    );
  }

  export default RestaurantCard;