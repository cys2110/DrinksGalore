 // Import the Link component from react-router-dom
import { Link } from 'react-router-dom';
import axios from 'axios'
import { BASE_URL } from '../globals';
import { useEffect, useState } from 'react';
    
const Nav = () => {

  const [drink, setDrink] = useState()

  const random = async() => {
    const response = await axios.get(`${BASE_URL}random.php`)
    const randomDrink = response.data.drinks[0].idDrink
    setDrink(randomDrink)
  }

  useEffect(() => {
    random()
  }, [])

  return (
    <nav className="navbar">        
      <div>
        {/* Links to navigate to different routes */}
        <Link to={`/drinks/${drink}`} className='nav-link' onClick={window.location.reload}>Spicy pick</Link>
        <Link to="/drinks" className="nav-link">Drinks</Link>
        <Link to="/ingredients" className="nav-link">Ingredients</Link>
      </div>
    </nav>
  )
}
    
export default Nav;