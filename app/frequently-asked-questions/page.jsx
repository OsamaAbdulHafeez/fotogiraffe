import CookieBanner from '@/Components/CookieBanner'
import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import Questions from '@/Components/Questions'
import React from 'react'

const FrequentlyQuestionPage = () => {
    return (
        <div className='bg-lightGreenBackground'>
            <Navbar/>
            <div className='sm:container mx-auto lg:w-[60%] 2xl:w-[90%] bg-white py-16 md:min-h-[calc(100vh-632px)]'>
                <Questions width="60%" className="pb-20"/>
            </div>
            <CookieBanner/>
            <Footer/>
        </div>
    )
}

export default FrequentlyQuestionPage
