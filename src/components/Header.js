import { LOGO_URL } from "../utils/Links";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-gradient-to-r from-green-200 to-green-400">
      <img src={LOGO_URL} alt="res-logo" className="h-40 w-28" />
      <div>
        <ul className="flex">
          <li className="p-5 m-5 shadow-sm shadow-gray-300 rounded-lg">
            Online Status : {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="font-semibold p-5 m-5 shadow-sm shadow-black rounded-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="p-5 m-5 font-semibold shadow-sm shadow-black rounded-lg">
            <Link to="about">About Us</Link>
          </li>
          <li className="p-5 m-5 font-semibold shadow-sm shadow-black rounded-lg">
            <Link to="contact">Contacts</Link>
          </li>
          <li className="p-5 m-5 font-semibold shadow-sm shadow-black rounded-lg">
            <Link to="fashion">Fashion Store</Link>
          </li>
          <li className="p-5 m-5 font-semibold shadow-sm shadow-black rounded-lg">
            <Link to="cart">Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
