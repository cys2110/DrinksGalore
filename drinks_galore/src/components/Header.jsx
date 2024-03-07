import Nav from './Navbar'
import SearchBar from './Searchbar'
const Header = () => {
    return (
        <div className='FullNav'> 
            <h1> Drinks Galore </h1>
            <Nav/> 
            <SearchBar />
            
            
        </div>
    )
}
export default Header
