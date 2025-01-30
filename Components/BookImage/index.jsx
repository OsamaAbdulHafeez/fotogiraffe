import Image from 'next/image'
import img from "@/public/Images/usp2.webp"
import RedButton from '@/Utils/Button'
import { RightArrow } from '@/icons'
import Link from 'next/link'
import { bookImg } from '@/Utils/base64Images'
const BookImage = () => {
  return (
    <div className='flex flex-col items-center mx-auto' id='bookImage'>
      <Link href="choose-your-photo-book" className='w-[97%] 2xl:w-full'>
        <Image
          src={"https://assets.fotogiraffe-assets.com/webapp-images/photo-books-landing-page/video-usp-2.webp"}
          
          alt='bookImg'
          width={1000}
          height={1000}
          placeholder="blur"
          blurDataURL={bookImg}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 96vw"
          className='hidden md:block object-cover w-full' />
      </Link>
      <Link href="choose-your-photo-book" className='w-[90%]'>
        <Image
          src={"https://assets.fotogiraffe-assets.com/webapp-images/photo-books-landing-page/video-usp-mobile.webp"}
          alt='bookImg'
          width={1200}
          height={1000}
          placeholder="blur"
          blurDataURL={bookImg}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          className='object-cover md:hidden w-full'/>
      </Link>
      <Link href="/choose-your-photo-book">
        <RedButton className="text-gray-200 mt-12 font-semibold text-lg w-44 text-center py-2 px-7">Get Started&nbsp;&gt;</RedButton>
      </Link>
    </div>
  )
}

export default BookImage
