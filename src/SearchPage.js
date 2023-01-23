import { Button } from '@mui/material'
import React from 'react'
import './SearchPage.css'
import SearchResult from './SearchResult'

function SearchPage() {
  return (
    <div className='searchPage'>
     <div className='searchPage__info'>
        <p>62 stays . 21 October to 30 October . 2 guests</p>
        <h1>Stays nearby</h1>
        <Button
        variant='outlined'>Type of Place</Button>
        <Button
        variant='outlined'>Price</Button>
        <Button
        variant='outlined'>Rooms and beds</Button>
        <Button
        variant='outlined'>More filters</Button>
     </div>
     <SearchResult
     img="https://a0.muscache.com/im/pictures/1ee516be-cfea-4041-80a5-b7aaf6e31177.jpg?im_w=960"
     location="

     Udawalawa, Sabaragamuwa Province, Sri Lanka"
     title="The Countryside Udawalawe"
     description=" place is close to family-friendly activities, restaurants and dining, and great views. "
     star={4.73}
     price="₹3,000/night"
     total="₹15,000 total"
     />
     <SearchResult
     img="https://a0.muscache.com/im/pictures/32023ca5-6e32-4286-ab9e-2c6908867f9c.jpg?im_w=720"
     location="Le Teil, Auvergne-Rhône-Alpes, France"
     title="Le Grand Nid - chambre en paradis naturel"
     description=" place is close to family-friendly activities, restaurants and dining, and great views. "
     star={4.23}
     price="₹2,000/night"
     total="₹10,000 total"
     />
      <SearchResult
     img="https://a0.muscache.com/im/pictures/981afb1a-07d1-42c8-9c65-1ca842f6de6a.jpg?im_w=720"
     location="Penha de França, Goa, India"
     title="Luxury pool view Apartment in North Goa"
     description=" place is close to family-friendly activities, restaurants and dining, and great views. "
     star={4.91}
     price="₹2,500/night"
     total="₹12,500 total"
     />
      <SearchResult
     img="https://a0.muscache.com/im/pictures/91933ee4-79ed-4aa8-a5f3-3bbeb9f1c6b6.jpg?im_w=720"
     location="Dubai, UAE, United Arab Emirates"
     title="Caesars Palace Bluewaters Dubai "
     description=" place is close to family-friendly activities, restaurants and dining, and great views. "
     star={4.95}
     price="₹15,000/night"
     total="₹75,000 total"
     />
      <SearchResult
     img="https://a0.muscache.com/im/pictures/monet/Luxury-30369730/original/e6e2c581-8faf-4b59-a081-47dfc5b38d0a?im_w=720"
     location="Antigua, Saint Mary, Antigua & Barbuda"
     title="Ocean Azul"
     description=" place is close to family-friendly activities, restaurants and dining, and great views. "
     star={3.73}
     price="₹20,000/night"
     total="₹1,00,000 total"
     />
      <SearchResult
     img="https://a0.muscache.com/im/pictures/miso/Hosting-562027644343219546/original/fc3f7765-8601-41f9-b2ff-55aebab3f4e1.jpeg?im_w=720"
     location="

     Udawalawa, Sabaragamuwa Province, Sri Lanka"
     title="The Countryside Udawalawe"
     description=" place is close to family-friendly activities, restaurants and dining, and great views. "
     star={4.73}
     price="₹3000/night"
     total="₹15000 total"
     />
     
    </div>
  )
}

export default SearchPage