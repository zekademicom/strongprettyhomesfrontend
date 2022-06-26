import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useStore } from '../../../store';
import PropertyCard from '../common/property-card/PropertyCard';
import SearchBar from '../home/search/searchbar';
import './inside-search.css';

const Properties = () => {
	const { propertyState } = useStore();
	const { properties } = propertyState;

	return (
		<>
			<div className="property-bars g-5">
				<div className="search-bar lg-3">	<SearchBar /></div>
				<div className="lg-9">
					<Container className="property-bar md-6 g-1 ">
						<Row >

							{properties.map((property, index) => (
								<Col key={index} className="md-4 lg-4">
									<PropertyCard property={property} />
								</Col >
							))}
						</Row>
					</Container>
					
				</div>
			</div>
		</>
	);
};

export default Properties;
