
import './Search-box.styles.css'; 


const SearchBox = ({ onChange, placeholder, className }) => (
	<input
		onChange={onChange}
		type='search'
		placeholder= {placeholder}
		className= {className}
	/>
)
	
export default SearchBox; 