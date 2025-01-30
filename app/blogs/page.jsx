import BlogCard from '@/Components/BlogCard'
import CookieBanner from '@/Components/CookieBanner'
import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import { blogs } from '@/data/blogs'
import Link from 'next/link'
import React from 'react'

const BlogPage = () => {
  return (
    <div className='bg-lightGreenBackground'>
      <Navbar />
      <div className='container lg:w-[90%] mx-auto bg-white pt-16 text-lightFontColor'>
        <div className='w-[95%] mx-auto md:min-h-[calc(100vh-700px)]'>
          <h1 className='text-[28px] font-extrabold text-center mt-12 mb-16 md:mt-20 md:mb-28 min1400:mt-12 min1400:mb-8'>Unleash Your Creativity: Crafting Interactive Photo Books with Video</h1>
          <div className='px-8 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-x-10'>
            {blogs?.map((ele,index)=>(
              <BlogCard data={ele} key={index}/>
            ))}
          </div>
        </div>
      </div>
      <CookieBanner/>
      <Footer />
    </div>
  )
}

export default BlogPage
