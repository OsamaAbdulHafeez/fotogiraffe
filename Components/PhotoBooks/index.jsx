'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image'
import TrustPilots from '@/Content/trustPilot';
import { reviews } from '@/data/reviewData';
import BookContent from '@/Content/bookContent';
import { booksData } from '@/data/booksData';

const PhotoBooks = ({title}) => {
    return (
        <div id='photoBook' className={`bg-lightBackground w-full mx-auto p-4 md:p-8 swiper-1`}>
            <h4 className='text-lightFontColor font-semibold text-xl lg:text-2xl text-center mt-8'>Easy to use Interface - Create a Photo Book in Minutes!</h4>
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
                {booksData.map((ele,index)=><SwiperSlide key={index}><BookContent data={ele} index={index} title1={title}/></SwiperSlide>)}
            </Swiper>
        </div>
    )
}

export default PhotoBooks
