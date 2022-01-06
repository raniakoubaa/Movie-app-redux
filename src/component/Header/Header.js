import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <ul  className='Header'>
            <Link to="/" ><li>Home</li></Link>
                <Link to="/add" ><li>ADD</li></Link>
                <Link to="/serie"> <li>SERIES</li></Link>
            </ul>
        </div>
    )
}

export default Header
