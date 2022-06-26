import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { RiGroupFill, RiHome4Line, RiHandCoinLine } from "react-icons/ri";
import SectionHeader from '../../home/section-header/section-header';
import "./mission.css"

const Mission = () => {
  return (
    <>
    <SectionHeader title="Our Mission Is To FindHouse" desc="Wide Renge Of Properties"/>
    <br/>
    <Container className='mission'>
        <Row> 
            <Col lg={8}>
                <div>
                <b>Mauris ac consectetur ante, dapibus gravida tellus. Nullam aliquet eleifend dapibus. Cras sagittis, ex euismod lacinia tempor.</b>
                <br/><br/><br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis ligula eu lectus vulputate porttitor sed feugiat nunc. Mauris ac consectetur ante, dapibus gravida tellus. Nullam aliquet eleifend dapibus. Cras sagittis, ex euismod lacinia tempor, lectus orci elementum augue, eget auctor metus ante sit amet velit.
                </p>
                <br/>
                <p>Maecenas quis viverra metus, et efficitur ligula. Nam congue augue et ex congue, sed luctus lectus congue. Integer convallis condimentum sem. Duis elementum tortor eget condimentum tempor. Praesent sollicitudin lectus ut pharetra pulvinar. Donec et libero ligula. Vivamus semper at orci at placerat.Placeat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod libero amet, laborum qui nulla quae alias tempora.</p>
                </div>
                <ul>
                    <li>
                    <RiGroupFill/>
                    <div>
                        <h4>80,123</h4>
                        <p>Customers to date</p>
                    </div>
                    </li>
                    <li>
                    <RiHome4Line/>
                    <div>
                        <h4>$74 Billion</h4>
                        <p>In home sales</p>
                    </div>
                    </li>
                    <li>
                    <RiHandCoinLine/>
                    <div>
                        <h4>$468 Million</h4>
                        <p>In Savings</p>
                    </div>
                    </li>
                </ul>
            </Col>
            <Col lg={4}>
            <img className='img-fluid' src={require(`../../../../assets/img/missinon/mission.jpg`)}/>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Mission