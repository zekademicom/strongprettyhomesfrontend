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
	<div className="search-bar ">	<SearchBar /></div>
	<div >
		<Container className="property-bar md-6 ">
		<Row className="g-5">
			
		{/* <Col className="lg-3 search " >
					
					</Col> */}
			
					{properties.map((property, index) => (
						<Col key={index} className="md-4 ">
							
							<PropertyCard property={property}/>
							
						</Col>
					))}
		
			
		</Row>
		</Container>
	</div>
	</div>
	</>
	);};
  export default Properties;

// import React from "react";
// import { useEffect, useState } from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import { getSearchProperties } from "../../../api/property-service";
// import { useStore } from "../../../store";
// import PropertyCard from "../common/property-card/PropertyCard";
// import SearchBar from "../home/search/searchbar";
// import "./inside-search.css";

// const Properties = async() => {
//   const { searchState } = useStore();
//   const { initialSearchValues } = searchState;
//   const [catchValues, setCatchValues] = useState(initialSearchValues)

//   // const { propertyState } = useStore();
//   // const { properties } = propertyState;

//   console.log(initialSearchValues);

//   let resp = [];

//   resp = await getSearchProperties(initialSearchValues);
//       console.log(resp);
//       setCatchValues(resp);

//   //   let loadSearch = async () => {

//   //     try {
//   // 		console.log(await getSearchProperties(initialSearchValues));
//   //    return await getSearchProperties(initialSearchValues);
//   //     } catch (error) {
//   //       console.log(error);
//   //     }
//   //   };

//   useEffect(() => {
    
//   }, [initialSearchValues]);

//   return (
//     <>
//       <div className="property-bars g-5">
//         <div className="search-bar lg-3">
//           {" "}
//           <SearchBar />
//         </div>
//         <div className="lg-9">
//           <Container className="property-bar md-6 g-1 ">
//             <Row>
//               {catchValues.map((property, index) => (
//                 <Col key={index} className="md-4 lg-4">
//                   <PropertyCard property={property} />
//                 </Col>
//               ))}

//               {/* {properties.map((property, index) => (
// 						<Col key={index} className="md-4 lg-4">
// 						  <PropertyCard property={property} />
// 						</Col>
// 					  ))}
// 			 */}
//             </Row>
//           </Container>
//         </div>
//       </div>
//     </>
//   );

// };


