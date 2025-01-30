import React from 'react'

const Video = () => {
    return (
        <div className="mt-32 text-center text-lightFontColor w-[90%] 2xl:w-[75%] mx-auto">
            <h2 className="text-[20px] md:text-[26px] font-semibold px-6">Create with Ease, Share with Joy</h2>
            <p className="text-md px-10 md:px-0 lg:text-lg mt-8">Our user-friendly software makes it a breeze to design your custom photo book. No more struggling with complicated software - just drag, drop, and create beautiful memories in minutes! You can even choose from one of our pre-designed templates to make the process even easier.
            </p>
            <div className="mx-auto mt-6 md:mt-10">
                <video
                    width="900"
                    height="700"
                    controls
                    preload="none"
                    className="mx-auto max-w-[80vw]"
                    poster="https://assets.fotogiraffe-assets.com/webapp-images/photo-books-landing-page/video-2-thumbnail.webp"
                >
                    <source src="https://assets.fotogiraffe-assets.com/help-videos/photo-books/desktop/desktop-home-page-how-to-create-book.mp4" type="video/mp4" />
                </video>
            </div>
            <div className='mt-24'>
                <h2 className="text-[20px] md:text-[26px] font-semibold">Premium Quality at Unbeatable Prices</h2>
                <p className='text-md px-8 md:px-0 mt-8 lg:text-lg'>We believe in offering nothing but the best for your precious memories. That's why we print on premium paper at competitive prices, ensuring your photo books look stunning without breaking the bank.</p>
            </div>
            
        </div>
    )
}

export default Video
