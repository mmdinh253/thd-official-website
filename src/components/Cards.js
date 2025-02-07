import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Epic destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className="cards__items">
            <CardItem 
                src='./images/tnttlogo.png'
                // text="Register Now!"
                label='Registration'
                path='https://docs.google.com/forms/d/e/1FAIpQLSdMY95gPTKSQI8lNP-FtYjSZCf26blJXZEjoYwNVsACjOeHMA/viewform?usp=header'
            />
            <CardItem 
              src='./images/promotion.jpg'
              // text='You ready to get promoted?'
              label='Promotion Requests'
              path='https://liendoaninhaxio.org/promotion-requests/'
            />
            <CardItem 
              src='./images/thdjacket.jpg'
              // text='You ready to get promoted?'
              label='THD Merch'
              path='https://liendoaninhaxio.org/promotion-requests/'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards