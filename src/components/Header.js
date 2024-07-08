import { LOGO_URL } from "./Links";

const Header= ()=>{
    return(
      <div className='header'>
        <img src={LOGO_URL} alt="res-logo" className="res-logo"  />
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