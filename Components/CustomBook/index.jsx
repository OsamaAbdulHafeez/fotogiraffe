"use client"
import { useState } from "react";
import RedButton from "@/Utils/Button";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { RightArrow } from "@/icons";
import { sizesData } from "@/data/sizesData";
import Link from "next/link";
import { sizeBasedCategoryGroupings } from "@/data/sizebasedCategory";
import { sizeOptions } from "@/data/sizesOption";
const CustomBook = () => {
    const [activeTab, setActiveTab] = useState("A4");
    const activeData = sizeBasedCategoryGroupings.find((data) => data.groupingValues[0] === activeTab);
    return (
        <div id="customBook" className="bg-[#f3f8fb] w-[90%] md:w-[97%] 2xl:w-full mx-auto pt-4 md:pt-8 pb-12 mt-16">
            <h2 className="w-[90%] mx-auto md:w-full text-[20px] px-6 sm:px-0 leading-7 md:text-[24px] xl:text-[26px] text-lightFontColor text-center font-semibold">
                Custom Photo Books in 3 Sizes that are as Unique as You!
            </h2>
            <div className="w-[90%] mx-auto">
                <div className=" flex justify-center items-center mt-6 md:mt-12">
                    {sizeOptions?.sort((a, b) => a.headline.localeCompare(b.headline))?.map((tab, index) => (
                        tab.isActive && (
                            <button key={index}
                                onClick={() => setActiveTab(tab?.product)}
                                className={`px-4 py-1 border-b-4  rounded-tl-md rounded-tr-md text-[16px] font-semibold text-lightFontColor transition transform-all duration-200 xl:text-lg ${activeTab === tab?.product ? "border-gray-300  border-b-4 z-10 " : "border-[#f3f8fb]"}`}>
                                {tab?.headline}
                            </button>
                        )
                    ))}
                </div>


                {activeData && (
                    <div className="lg:px-5 grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4 swiper-2">
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
                            {activeData?.tileImageURLs?.map((image, index) => <SwiperSlide key={index}>
                                <Link href={`/photo-book-category-grouping/${activeData.sizes}`} className="w-full ">
                                    <Image
                                        src={image}
                                        alt={"image"}
                                        width={800}
                                        height={800}
                                        priority
                                        className="object-cover w-full xl:h-[400px]"
                                    />
                                </Link>
                            </SwiperSlide>)}
                        </Swiper>
                        <div className="flex flex-col justify-start gap-3 text-lightFontColor md:pl-6">
                            <h1 className="font-semibold text-xl xl:text-[22px]">{activeData.groupingName}</h1>
                            <h2 className="font-extrabold text-md xl:text-lg underline">{activeData.ctaText}</h2>
                            <ul className="list-disc flex flex-col gap-4 pl-4 my-2 md:my-3">
                                {activeData?.bulletPoints?.map((feature, index) => (
                                    <li key={index} className="text-md xl:text-lg">{feature}</li>
                                ))}
                            </ul>
                            <Link href={`/photo-book-category-grouping/${activeData.sizes}`}>
                                <RedButton className="text-gray-200 mx-auto px-6 py-2 w-[170px] h-[45px] font-semibold flex justify-center items-center mt-8 md:mt-0">Get Started&nbsp;&gt;</RedButton>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CustomBook;
