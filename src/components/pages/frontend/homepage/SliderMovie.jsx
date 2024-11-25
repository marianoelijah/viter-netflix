import { imgPath } from '@/components/helpers/functions-general'
import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SliderMovie = () => {
  const sliderRef = React.useRef();
  return (
    <>
         <section className="px-10">
      <Swiper
           modules={[ Pagination ]}
           loop={true}
           pagination={{
            clickable: true,
           }}
           className="mySwiper"
           spaceBetween={20}
           slidesPerView={6}
         >
          <SwiperSlide>
            <div className="slider-card">
              <img
                src={`${imgPath}/slider-7.jpg`}
                alt=""
                className="w-full h-[150px] object-cover"
              />
            </div>
        </SwiperSlide>
      </Swiper>

        <button
          className={`css for Prev button`}
          onClick={() => sliderRef.current?.slidePrev()}
        >
          Prev
        </button>
        <button
          className={`css for Next button`}
          onClick={() => sliderRef.current?.slideNext()}
        >
          Next
        </button>

        
      </section>
    </>
  )
}

export default SliderMovie;
