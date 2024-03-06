// Import the Link component from react-router-dom
import { Link } from "react-router-dom";
import "../App.css";

const Nav = () => {
  return (
    <nav className="navbar">
      <div>
        {/* Links to navigate to different routes */}
        <Link to="/" className="nav-link">
          Drinks Galore
        </Link>
        <Link to="/drinks" className="nav-link">
          Drinks
        </Link>
        <Link to="/ingredients" className="nav-link">
          Ingredients
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
