import { Form } from 'formik';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { MdOutlineSmartphone,MdOutlineMailOutline } from "react-icons/md";
import "./property-agent.css";

const PropertyAgent = ({ agent,tourRequest }) => {
	const { firstName, lastName, phoneNumber, email, agentImage } = agent;
   
	let img = `${process.env.REACT_APP_API_URL}/agentImg/display/${agentImage.id}`;

	return (
		<div className="main-card">
			<div className="container">
				<Card variant="top" className="agent-card">
					<div className="image-container">
						<Card.Img variant="top" src={img} />
					</div>

					<Card.Body className="card-body ">
						<div>
							<div className="name-lastName"> <span>{firstName}</span>
							<span>{lastName}</span>
                            </div>

							<div className="telephone"><MdOutlineSmartphone/>
							<a href="#">{phoneNumber}</a>
        					
							
							
							</div>
                            <div className="email"><MdOutlineMailOutline/>
							<a href="#">{email}</a>
							
							
							</div>
						</div>
					
					</Card.Body>
				</Card>
			</div>

            </div>
	);
};

export default PropertyAgent;
