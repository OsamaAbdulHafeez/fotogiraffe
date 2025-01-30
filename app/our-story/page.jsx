import CookieBanner from '@/Components/CookieBanner'
import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import RedButton from '@/Utils/Button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const StoryPage = () => {
  return (
    <div className='bg-lightGreenBackground'>
      <Navbar />
      <div className='sm:container mx-auto xl:w-[90%] 2xl-w-full bg-white py-16 text-lightFontColor md:min-h-[calc(100vh-632px)]'>
        <div className="mx-auto py-16 md:py-20">
          <Image
            src={'https://assets.fotogiraffe-assets.com/webapp-images/our-story-page/giraffe-family-photo-album.jpg'}
            width={700}
            height={400}
            alt="giraffe"
            className="mx-auto w-[88%] md:w-[92%] h-auto"
            priority={true}
          />
        </div>
        <div className='w-[88%] md:w-[92%] mx-auto'>
          <h2 className='text-center font-extrabold text-[28px] mb-16 md:mb-28 2xl:mb-12'>Unveiling the Magic: Dive into the FotoGiraffe Wonderland of Family Photo Books!</h2>
          <h3 className='text-[20px] md:text-[22px] lg:text-[26px] font-semibold'>At FotoGiraffe, we're all about turning your special moments into family photo books that'll make your heart do a happy dance.</h3>
          <p className='pr-4 mt-16 2xl:mt-8 text-md lg:text-lg'>Our journey kicks off with Nauman (our founder) and his family, who are head over heels for those printed holiday family albums. But guess what? They felt like something was missing - the lively essence of hilarious and unforgettable family holiday videos to enjoy while flipping through the album. And just like that, the spark for FotoGiraffe ignited!</p>
          <p className='pr-4 mt-6 text-md lg:text-lg'>Nauman, a passionate software engineer from London, took it upon himself to bridge this gap. Fueled by his love for preserving memories, he set out to create a haven for photobook enthusiasts like you.</p>
          <p className='pr-4 mt-6 text-md lg:text-lg'>FotoGiraffe isn't your run-of-the-mill online photo album store - it's a celebration of life's beautiful moments wrapped up in meticulously crafted photobooks. We get it - the nostalgia of traditional printed albums plus the vibrant kick of modern multimedia experiences. We're all about that perfect blend, and it's our commitment to quality and innovation that makes us stand out.</p>
          <p className='pr-4 mt-6 text-md lg:text-lg'>From family vacays to smashing milestone celebrations, we've got the secret sauce - seamless integration of photos and videos. Every page is a mini-narrative that'll tug at your heartstrings.</p>
          <h3 className='pr-4 mt-16 2xl:mt-8 font-semibold text-[20px] md:text-[22px]'>So, welcome to FotoGiraffe - where memories aren't just cherished memories; they come to life with family photo books with videos!</h3>
          <Link href={'/choose-your-photo-book'}>
            <RedButton className='mx-auto mt-12 font-semibold text-lightSkyBlue py-3 px-8'>Get Started &gt;</RedButton>
          </Link>
        </div>
      </div>
      <CookieBanner/>
      <Footer />
    </div>
  )
}

export default StoryPage
