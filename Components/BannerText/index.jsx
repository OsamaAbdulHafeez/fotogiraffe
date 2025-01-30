import React from 'react'

const BannerText = ({data}) => {
    return (
        <div className="md:mt-12 m-4 bg-lightGreenBackground shadow-custom hover:shadow-customDark transition duration-200 py-6 px-8 rounded-xl w-[95%] md:w-[92%] mx-auto text-lightFontColor">
            <h2 className='font-semibold text-2xl md:text-4xl text-center'>Where Memories Come Alive: Fotogiraffe's {data?.groupingName} Experience</h2>
            <h4 className='text-center font-bold text-xl md:text-2xl mt-6'>{data?.ctaText}</h4>
            <p className='text-center text-[16px] lg:text-lg mt-8'>Immerse yourself in the world of Video Photo Books - elevating your memories to new heights! Imagine custom photo books with a touch of video magic, as unique as you are.</p>
        </div>
    )
}

export default BannerText
