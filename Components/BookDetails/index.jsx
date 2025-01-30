"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Pagination, Autoplay, FreeMode } from 'swiper/modules';

const BookDetails = ({ data }) => {
    return (
        <div className="mx-auto w-[95%] 2xl:w-full lg:pt-4">
            <div className="w-[90%] 2xl:w-[85%] mx-auto">
                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 items-start swiper-3">
                    <Swiper
                        slidesPerView={'auto'}
                        centeredSlides={true}
                        spaceBetween={30}
                        speed={1000}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                            bulletActiveClass: 'custom-bullet-active'
                        }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper 2xl:min-h-[350px]"
                    >
                        {data?.imageURLs?.map((img, index) => (
                            <SwiperSlide key={index}>
                                <div className="w-full h-full">
                                    <Image
                                        src={img}
                                        alt={"image"}
                                        width={600}
                                        height={600}
                                        priority
                                        className="object-cover min-w-full"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="flex flex-col justify-start gap-3 text-lightFontColor mt-4 lg:mt-0 lg:pl-6  2xl:pl-0 ">
                        <h2 className="font-semibold text-2xl md:text-3xl xl:text-4xl text-center">{data?.title}</h2>
                        <h3 className="font-bold text-center text-[20px] md:text-[22px] xl:text-[26px] mt-2 xl:mt-3 md:leading-10">{data?.description}</h3>
                        <ul className="list-disc flex flex-col gap-4 my-5 pl-2 2xl:pl-6 md:gap-2">
                            <li className="font-medium text-md md:text-lg">
                                Photo book with videos!
                            </li>
                            <li className="font-medium text-md xl:text-lg" style={{ lineHeight: "2" }}>
                                Starting from&nbsp;
                                <del className="font-semibold">£{data?.retailPrice}</del>&nbsp;
                                <span className="text-textBlue font-semibold">£{data?.discountedRetailPrice}</span>
                            </li>
                            <li className="font-medium text-md xl:text-lg" style={{ lineHeight: '2' }}>
                                {data?.additionalInfo?.pages}
                            </li>
                            <li className="font-medium text-md xl:text-lg">
                                {data?.additionalInfo?.size}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
