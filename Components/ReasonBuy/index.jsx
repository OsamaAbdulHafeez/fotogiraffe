import Image from 'next/image'
import React from 'react'

const ReasonBuy = () => {
    return (
        <div className='text-lightFontColor'>
            <div className='text-center mt-16 w-[75%] md:w-[90%] 2xl:w-[75%] mx-auto'>
                <h2 className='text-[20px] md:text-[26px] font-semibold'>Discover the captivating world of Video Photo Books with FotoGiraffe</h2>
                <h2 className='font-extrabold mt-2 text-[20px] md:text-[22px] leading-7'>FotoGiraffe's Video Photo Books allow you to add Videos to your Photo Books. Experience your Memories come Alive!</h2>
            </div>
            <div className='mt-24 text-center w-[70%] md:w-[90%] 2xl:w-[75%] mx-auto'>
                <h2 className='text-[22px] md:text-[26px] font-bold'>Scan, Watch, Smile!</h2>
                <p className='mt-6 text-md lg:text-lg'>Drag and drop videos on the pages of your photo book in our easy to use online editor that appear as QR codes. Once you recieve your book, simply scan QR codes and watch your memories come to life. Create a truly immersive experience that captures the essence of every moment.</p>
            </div>
            <div className='mt-12'>
                <Image
                    src={"https://assets.fotogiraffe-assets.com/product-catalog-images/gb/photo-books/product-information/open-book-tile.webp"}
                    width={720}
                    height={600}
                    alt='image'
                    className='mx-auto'
                />
            </div>
        </div>
    )
}

export default ReasonBuy
