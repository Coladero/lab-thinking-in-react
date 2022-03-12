import {useState} from 'react'
import TextField from '@mui/material/TextField';

function SearchBar(props) {
    
    const [search, setSearch] = useState("")

    const handleChange = (event) =>{
        // console.log(event.target.value)
        setSearch(event.target.value)
        props.searchProducts(event.target.value)
    }
  return (
    <div>
    <div >
    {/* <label htmlFor="search">Search</label> */}
    <TextField id="filled-basic" label="Search" variant="filled"  type="text" name="search"  value={search} onChange={handleChange}></TextField>
    </div>
    
    
    </div>
  )
}

export default SearchBar