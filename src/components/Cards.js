import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className="cards__items">
            <CardItem 
                src={process.env.PUBLIC_URL + '/images/tnttregistration.jpg'}
                // text="Register Now!"
                label='Registration'
                path='https://docs.google.com/document/d/1_89t-vaMumojb2-v7dqDzVP64F5C67oC/edit?fbclid=IwZXh0bgNhZW0CMTEAAR09YpHuqSmiXr8HDqK0VrG9My54Idis7ik_kzygMduaw-ChtKhWU5C9dbY_aem_BqBWhUoSJ-L4dlDxMWPGgw'
            />
            <CardItem 
              src={process.env.PUBLIC_URL + '/images/promotion.jpg'}
              // text='You ready to get promoted?'
              label='Promotion Requests'
              path='https://liendoaninhaxio.org/promotion-requests/'
            />
            <CardItem 
              src={process.env.PUBLIC_URL + '/images/thdjacket.jpg'}
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