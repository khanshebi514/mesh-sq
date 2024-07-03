'use client'
import cursolImg_1 from '@/images/image-pa.webp';
import cursolImg_2 from '@/images/image-meds.webp';
import cursolImg_3 from '@/images/image-card.webp';
import SingleServiceCard from '../single-Service-card';
import { ourWork } from '@/data/webData';
import Image from 'next/image';
import { Swiper, SwiperSlide,  } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function CursolComponent() {

  return (   
    <Swiper
    spaceBetween={50}
    slidesPerView={3}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    breakpoints={{
      '@0.00': {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      '@0.75': {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      '@1.00': {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      '@1.50': {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    }}
  >
    <SwiperSlide><SingleServiceCard image={cursolImg_1} item={ourWork[0]}  width={300}/></SwiperSlide>
    <SwiperSlide><SingleServiceCard image={cursolImg_2} item={ourWork[1]} width={300}/></SwiperSlide>
    <SwiperSlide><SingleServiceCard image={cursolImg_3} item={ourWork[2]} width={300}/></SwiperSlide>
    
  </Swiper>
  )
}
