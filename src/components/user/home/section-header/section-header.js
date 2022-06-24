import React from 'react'
import "./section-header.css";

const SectionHeader = ({title, desc}) => {
  return (
    <div className='section-header' >
        <h2>{title}</h2>
        <p>{desc}</p>
    </div>
  )
}

export default SectionHeader