import React from 'react'

const Testimonal = ({image, name, title, message}) => {
    const imageSrc = require(`../../../../assets/img/${image}`)
  return (
    <div className='testimonal'>
        <img className='img-fluid' src={imageSrc}/>
        <h4>{name}</h4>
        <h5>{title}</h5>
        <p>{message}</p>
    </div>
  )
}

export default Testimonal