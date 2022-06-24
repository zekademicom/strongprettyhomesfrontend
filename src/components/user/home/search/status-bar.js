import React, {useState} from 'react'
import { Container } from 'react-bootstrap'
import './status-bar.css'

const StatusBar = () => {

  const [isActive, setIsActive] = useState(false);

  const handleClick = event => {
    setIsActive(true);
  }
  return (
    <div className="search-bar">
        <div  className={isActive ? 'active' : ''} onClick={handleClick}>Rent</div>
        <div  className={isActive ? '' : 'active'} onClick={handleClick}>Sale</div>
      </div>
  )
}

export default StatusBar