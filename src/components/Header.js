import { LOGO_URL } from "../utils/Links"; 
import { Link } from "react-router-dom";
import  useOnlineStatus  from '../utils/useOnlineStatus';

const Header= ()=>{

  const onlineStatus = useOnlineStatus();

    return(
      <div className='flex justify-between'>
        <img src={LOGO_URL} alt="res-logo" className="res-logo"  />
        <div>
          <ul className='flex'>
            <li className='p-5 m-5'>Online Status : {onlineStatus?'🟢':'🔴'}</li>
            <li className='p-5 m-5'><Link to='/'>Home</Link></li>
            <li className='p-5 m-5'><Link to='/about'>About Us</Link></li>
            <li className='p-5 m-5'><Link to='/contact'>Contacts</Link></li>
            <li className='p-5 m-5'><Link to='/fashion'>Fashion Store</Link></li>
            <li className='p-5 m-5'>Cart</li>
          </ul>
        </div>
      </div>
    );
  }
  
  export default Header;