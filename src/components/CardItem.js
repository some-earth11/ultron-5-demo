import React from 'react'
import { Link } from 'react-router-dom'
import './Cards.css';

function CardItem(props){
    return (
      //  <>
      //      <li className= "cards__item">
      //      <Link className="cards_item_link" to={props.path}>
      //      <figure className="cards_items_pic-wrap" data-category={props.label}>
      //        <img src={props.src} alt="Travel Image" className="cards_item_img"/>
      //      </figure>
      //      <div className="cards_item_info">
      //      <h5 className="cards_item_text">{props.text}</h5>

      //      </div>

      //      </Link>

      //      </li>
      //  </> 
      <div className="card text-center">
      <div className="overflow">
      <img src=
      {props.imgsrc} alt='Image 1'  className='card-img-top' />

      </div>
      <div className='card-body text-dark'>
        <h4 className='card-title'>{props.title}</h4>
        <p className='card-text text-secondary'>
          {props.content}
        </p>
      </div>
    </div>
    )
}
export default CardItem