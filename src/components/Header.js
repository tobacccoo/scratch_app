import { LOGO_URL } from "./Links";
import { Link } from "react-router-dom";

const Header= ()=>{
    return(
      <div className='header'>
        <img src={LOGO_URL} alt="res-logo" className="res-logo"  />
        <div className='nav-items'>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About Us</Link></li>
            <li><Link to='/contact'>Contacts</Link></li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  }

  export default Header;