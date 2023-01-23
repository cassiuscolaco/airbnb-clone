import React, { useState } from 'react'
import Search from './Search';

import './Banner.css'
import { Button } from "@mui/material"
import {useNavigate} from 'react-router-dom'

function Banner() {
    const navigate = useNavigate();
    const [showSearch , setShowSearch]=useState(false);

  return (
    <div className='banner'>
        <div className='banner__search'>
            {showSearch && <Search />}
            <Button onClick={() => setShowSearch(!showSearch)}
             className='banner__searchButton'
             variant='outlined' >{showSearch ? "Hide" : "Pick your Dates🗓️"}</Button>
        </div>
        <div className='banner___info'>
            <h1>Go out and stretch your imagination</h1>
            <h5>
                Plan a different kind of getaway to uncover the hidden gems near you.
            </h5>
            <Button onClick={()=> navigate('/search')} 
            variant='out'>Explore Nearby</Button>
        </div>
    </div>
  )
}

export default Banner