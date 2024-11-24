import React from 'react'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
function Error() {
  return (
    <div className='error'>
        <ErrorOutlineIcon/>
        <h1>No results found</h1>
        <p>Sorry, we couldn't find any results</p>
    </div>
  )
}

export default Error