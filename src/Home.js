import React from 'react'
import './Home.css'
import Banner from './Banner'
import Card from './Card'
//ES7 snippets to do 'rfce
function Home() {
  return (
    <div className='home'>
      
       <Banner />
       <div className='home__section'>
        <Card 
              src="https://a0.muscache.com/im/pictures/d3b2b902-6143-46e1-90fc-f6eee6f66e42.jpg?im_w=720"
              title="Cottages"
              description="Get lost in the wilderness"
              />
        <Card 
              src="https://a0.muscache.com/im/pictures/ff8035de-1053-44fd-ad94-4b529120c4e4.jpg?im_w=720"
              title="Unique Stays"
              description="Spaces that are more than just a place to sleep"
        />
        <Card 
              src="https://a0.muscache.com/im/pictures/fb5e5bf9-8478-4824-81e7-b267d396a793.jpg?im_w=720"  
              title="Entire Homes"
              description="Comfortable private places,with rooms for friends or family"    
        />
        </div>
        <div className='home__section'>
        <Card 
             src="https://a0.muscache.com/im/pictures/11cbaae1-d823-4cb5-be9e-a8e1246c74c9.jpg?im_w=720"  
             title="3 Bedroom flat in Bournemouth "
             description="Superhost with a stunning view of the beachside in Sunny Bournemouth" 
             price="₹12,039/night"         
        />
        <Card 
             src="https://a0.muscache.com/im/pictures/miso/Hosting-737348054173229819/original/bc2d9cf9-3f01-4943-a716-9d6943fb90d2.jpeg?im_w=720"  
             title="Hotel room in London "
             description="Mondrian London Shoreditch offers accommodation in London, 500 m from Hoxton Square" 
             price="₹1,53,768/night"         
        />
        <Card 
             src="https://a0.muscache.com/im/pictures/miso/Hosting-736724208189865821/original/7e9c6167-4404-4525-9629-1ed568f5d91a.jpeg?im_w=720"  
             title="The Chelsea Harbour Hotel & Spa "
             description="The Chelsea Harbour Hotel offers free WiFi and stunning Thames views." 
             price="₹74,554/night"         
        />
        </div>

    </div>
  )
}

export default Home