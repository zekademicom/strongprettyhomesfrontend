import React, { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "./swiper-image-property.css"
import "./property-details.css";

const SwiperImageProperty = ({images}) => {


    const [thumbsSwiper, setThumbsSwiper] = useState(null);  

  return (
    <>
          <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
     
     <SwiperSlide >
 <img src={images} />
</SwiperSlide>

   
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={2}//??????????????????imagelar nerde map
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
      
 <SwiperSlide >
 <img src={images} />
</SwiperSlide>

      
      </Swiper>
    </>
  )
}

export default SwiperImageProperty