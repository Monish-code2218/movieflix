import React from 'react'
import "../styles/Form.css"
import SearchIcon from '@mui/icons-material/Search';


const Form = (form) => {

  return (
    <form className='form' >
          <input type="text"  value={form.value}
          onChange={(event)=> form.setSearchValue(event.target.value)}   placeholder='Search for movies...' />
          <button type="submit">
              <SearchIcon />
          </button>

    </form>
  )
}

export default Form