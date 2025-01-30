'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image'
import TrustPilots from '@/Content/trustPilot';
import { reviews } from '@/data/reviewData';
const TrustPilot = () => {
    return (
        <div className='mt-20 bg-skyBlue w-[90%] md:w-[97%] 2xl:w-full mx-auto p-4 swiper-3'>
            <Swiper
                slidesPerView={'auto'}
                centeredSlides={true}
                spaceBetween={30}
                speed={1000}
                pagination={{
                    clickable: true,
                    bulletActiveClass: 'custom-bullet-active'
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {reviews.map((ele,index)=><SwiperSlide key={index}><TrustPilots data={ele}/></SwiperSlide>)}
            </Swiper>
            <span className='text-white font-extrabold lg:text-lg text-center block mt-4'>Your memories are safe with us and your privacy is always respected. Our <a className='underline' href="/privacy-notice" target='_blank'>privacy notice.</a></span>
        </div>
    )
}

export default TrustPilot
