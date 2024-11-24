import React from 'react'
import { Link } from 'react-router-dom'

import "../styles/Navbar.css"



const Navbar = (Navbar) => {

    return (
        <div className='Navbar'>
            <div className='container'>
            
                <h1>{Navbar.heading}</h1>
                
            </div>

        </div>
    )
}

export default Navbar


