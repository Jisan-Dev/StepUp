import { FiHeart } from "react-icons/fi";
import "./Navigation.css";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

const Navigation = ({ handleInputChange, query }) => {
  return (
    <>
      <nav>
        <div className="nav-container">
          <input className="search-input" type="text" value={query} onChange={handleInputChange} placeholder="Enter your search shoes." />
        </div>
        <div className="profile-container">
          <a href="#">
            <FiHeart className="nav-icons" />
          </a>
          <a href="">
            <AiOutlineShoppingCart className="nav-icons" />
          </a>
          <a href="">
            <AiOutlineUserAdd className="nav-icons" />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
