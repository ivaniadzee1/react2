import React from 'react'
import './card.css'

const Card = ({color,desc,name,img}) => {

  return (
    <>
    <div className='lk'>
    <div className= {`card ${color}`}>
        <img src= {img} alt="" />
        <h1 className='sd'>{name}</h1>
        <h1 className='tx'>{desc}</h1>
        <div className="op">
            <h1 className='ln'>Learn More</h1>
        </div>
    </div>
    </div>
    </>
  )
}

export default Card
