import { LOGO_URL } from "./CDNlinks";

const Header= ()=>{
    return(
      <div className='header'>
        <img className="res-logo" alt="res-logo" src={LOGO_URL}/>
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

  export default Header;