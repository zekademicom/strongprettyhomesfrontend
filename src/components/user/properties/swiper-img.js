import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

import "./swiper-img.css"
import { useStore } from "../../../store";


const SwiperImg = () => {
  const { propertyId } = useParams();
  const { propertyState, userState } = useStore();
  const { properties } = propertyState;
  const [selectedProperty, setSelectedProperty] = useState();

  useEffect(() => {
    const selectedProperty = properties.filter((item) => item.id == propertyId);
    setSelectedProperty(selectedProperty[0]);
    console.log(selectedProperty);
  }, []);

  // const images=`${process.env.REACT_APP_API_URL}/files/display/${selectedProperty.image}`;;
  // console.log(images)

  if (selectedProperty)

    return (
      <>
     <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >

       
{selectedProperty.image.map((imgId, index) => {

            let temp = `${process.env.REACT_APP_API_URL}/files/display/${imgId}`;
            return <SwiperSlide key={index} >
          
              <img src={temp} />
              </SwiperSlide>
            // return <Card.Img variant="top" key={index} src={temp} />;
          })} 
       
      </Swiper>
      </>
    )
  }

export default SwiperImg