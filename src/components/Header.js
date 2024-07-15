import { LOGO_URL } from "../utils/Links"; 
import { Link } from "react-router-dom";
import  useOnlineStatus  from '../utils/useOnlineStatus';

const Header= ()=>{

  const onlineStatus = useOnlineStatus();

    return(
      <div className='header'>
        <img src={LOGO_URL} alt="res-logo" className="res-logo"  />
        <div className='nav-items'>
          <ul>
            <li>Online Status : {onlineStatus?'🟢':'🔴'}</li>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About Us</Link></li>
            <li><Link to='/contact'>Contacts</Link></li>
            <li><Link to='/fashion'>Fashion Store</Link></li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  }

  export default Header;