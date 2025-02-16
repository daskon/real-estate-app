import React from 'react'
import "./card.scss"
import { Link } from 'react-router-dom'

const Card = ({item}) => {
  return (
    <div className='cardContainer'>
      <Link to={`/${item.id}`} className='imgContainer'>
        <img src={item.img} alt="" />
      </Link>
      <div className="textContainer">
        <h4 className='title'>
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h4>
        <p className="address">
          <img src="/pin.png" alt="location pin" />
          <span>{item.address}</span>
        </p>
        <p className="price">LKR {item.price}</p>
        <div className="bottom">
          <div className="icons">
            <div className="icon">
              <img src="/save.png" alt="save listing" />
            </div>
            <div className="icon">
              <img src="/chat.png" alt="save listing" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card