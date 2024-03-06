
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  
  const handleSearch = () => {
    
    console.log('Searching for:', searchTerm);
    
  };

  
  const handleKeydown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeydown} 
      />
      
    </div>
  );
};

export default SearchBar;
