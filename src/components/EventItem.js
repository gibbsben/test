import React from 'react';
import './EventItem.css';
import { Link } from 'react-router-dom';

function EventItem(props) {
  return (
    <>
      <li className='events__item'>
          <figure className='events__item__pic-wrap' >
          <h2> {props.text}</h2>
            <img
              className='events__item__img'
              alt='Event picture'
              src={props.src}
            /> 

          </figure> 
          <div className='events__item__info'>
            <a href={props.link}><h5 className='events__item__name'>{props.name}</h5></a>
          </div>
  
      </li>
    </>
  );
}

export default EventItem;
