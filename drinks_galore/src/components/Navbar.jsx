 // Import the Link component from react-router-dom
 import { Link } from 'react-router-dom';
    
    const Nav = () => {
      return (
        <nav className="navbar">        
          <div>
            {/* Links to navigate to different routes */}
            <Link to="/drinks" className="nav-link">Drinks</Link>
            <Link to="/ingredients" className="nav-link">Ingredients</Link>
          </div>
        </nav>
      )
    }
    
    export default Nav;