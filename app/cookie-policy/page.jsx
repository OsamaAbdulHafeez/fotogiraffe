import CookieBanner from '@/Components/CookieBanner'
import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import { cookie } from '@/data/cookies'
import Link from 'next/link'
import React from 'react'

const CookiePolicyPage = () => {
  return (
    <div className='bg-lightGreenBackground'>
      <Navbar />
      <div className="sm:container mx-auto lg:w-[90%] 2xl:w-[100%] bg-white pt-16">
        <div className="mt-16 pb-8 md:pb-28 md:mt-32 text-lightFontColor md:min-h-[calc(100vh-810px)]">
          <h2 className="text-center mx-6 font-extrabold text-[28px] md:mx-0">FotoGiraffe Cookie Notice</h2>
          <div className="px-10 md:px-20 mt-8 md:mt-16">
            <p className="text-md lg:text-lg">Effective From: June 1, 2023</p>
            <p className="text-md lg:text-lg mt-4">FotoGiraffe uses cookies to enhance your experience and provide you with personalized content. By using this site, you agree to the use of cookies as described in this Cookie Notice.</p>
            {cookie.map((ele, index) => (
              <div key={index} className=''>
                <h2 className='mt-4 text-gray-800 font-extrabold text-md md:text-lg underline'>{ele?.question}</h2>
                <p className='text-md lg:text-lg mt-4'>{ele?.answer?.ans1}
                  <a href="mailto:support@fotogiraffe.co.uk" className='font-semibold'>&nbsp;&nbsp;{ele?.answer?.link}</a>
                </p>
                <p className={`text-md lg:text-lg ${ele?.answer?.ans2 ? "mt-4" : "mt-0"}`}>{ele?.answer?.ans2}</p>
                <ul className='pl-10 md:pl-14 flex flex-col gap-[10px]'>
                  {ele?.answer?.list?.map((list, index) => (
                    <li key={index} className='list-disc text-md lg:text-lg'>{list}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CookieBanner/>
      <Footer />
    </div>
  )
}

export default CookiePolicyPage
