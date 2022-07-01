import React, {useState} from 'react'
import './status-bar.css'

const StatusBar = () => {

  const [isActive, setIsActive] = useState(false);

  const handleClick = event => {
    setIsActive(current => !current);
  }
  return (

    <div className="status-bar">
        <div className={isActive ? 'active' : 'passive'} onClick={handleClick}>Rent</div>
        <div className={isActive ? 'passive' : 'active'} onClick={handleClick}>Sale</div>
      </div>
  )
}

export default StatusBar