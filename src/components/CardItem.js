import React from 'react'
import { Link } from 'react-router-dom'

function CardItem(props) {
  return (
    <div>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
            <figure className='cards__item__pic-wrap' data-category={props.label}>
                <img 
                  src={props.src} 
                  className='cards__item__img' 
                  alt={props.alt || 'Card image'}  // Add alt prop here
                />
            </figure>
            <div className='cards__item__info'>
                <h5 className='cards__item__text'>{props.text}</h5>
            </div>
        </Link>
      </li>
    </div>
  )
}

export default CardItem