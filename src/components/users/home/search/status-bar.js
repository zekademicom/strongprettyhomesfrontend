import React from 'react'
import { Container } from 'react-bootstrap'
import './status-bar.css'

const StatusBar = () => {

  let status = "";
  const active = () => {
    if(status === "active"){
     status = ""
    }else{
     status = "active"
    }
  }
  return (
    <div className="search-bar">
        <div className={status} onClick={() => active}>Rent</div>
        <div className="active">Sale</div>
      </div>
  )
}

export default StatusBar