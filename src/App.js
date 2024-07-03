
import './index.css';



const RestaurantCard = ()=> {
  return(
    
    <div className='res-card'>
    <img className="res-img "alt='res-img' src='https://www.licious.in/blog/wp-content/uploads/2023/01/Shutterstock_2047827035-1024x683.jpg'/>
    <h3>Delhi Biryani Hut</h3>
    <h3>North Indian, Mughlai, Asian</h3>
    <h3>28 mins</h3>
    <h3>4.2 stars</h3>
    </div>
   
  );
}

const Body=()=>{
  return(
    <div className='body-container'>
    <div className='search'>
      Search
    </div>
    <div className='all-cards'>
    <RestaurantCard/>
    <RestaurantCard/>
    <RestaurantCard/>
    <RestaurantCard/>
    <RestaurantCard/>
    <RestaurantCard/>
    <RestaurantCard/>
    <RestaurantCard/>
    </div>
    </div>
  );
}



const Header= ()=>{
  return(
    <div className='header'>
      <img className="res-logo" alt="res-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5kw2gZga_Qo2Wh-Q0W6sWOffQmGIL6QkU4w&s"/>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}



function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
    </div>
  );
}

export default App;
