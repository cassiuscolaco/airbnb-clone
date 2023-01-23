import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {Avatar} from '@mui/material'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
        <Link to ='/'>
        <img
           className='header___icon'
           src='https://1000logos.net/wp-content/uploads/2017/08/Airbnb-Logo-768x279.png'
           alt='airbnb logo'
           />
           </Link>

           <div className='header___center'>
               <input type="text" />
               <SearchIcon />
           </div>

           <div className='header___right'>
            <p>Become a host</p>
            <LanguageIcon/>
            <ExpandMoreIcon />
            <Avatar />

           </div>
    </div>
  )
}

export default Header