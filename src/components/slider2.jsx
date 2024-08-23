import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// images 
import img1 from './../media/11.jpeg'
import img2 from './../media/12.jpeg'
import img3 from './../media/13.gif'
import img4 from './../media/14.gif'
import img5 from './../media/15.gif'
import img6 from './../media/16.gif'

export default function slider2() {
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img className='h-[500px] w-full hidden md:flex justify-center items-center' src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[500px] w-full hidden md:flex justify-center items-center' src={img2} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[500px] w-full hidden md:flex justify-center items-center' src={img3} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[500px] w-full hidden md:flex justify-center items-center' src={img4} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[500px] w-full hidden md:flex justify-center items-center' src={img5} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[500px] w-full hidden md:flex justify-center items-center' src={img6} alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
    }