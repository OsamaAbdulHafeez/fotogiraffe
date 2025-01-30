import CookieBanner from '@/Components/CookieBanner'
import Filtering from '@/Components/Filtering'
import FilterType from '@/Components/FilterType'
import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import Summary from '@/Components/Summary'
import { summary2 } from '@/data/summary'
import RedButton from '@/Utils/Button'
import Link from 'next/link'
import React from 'react'
const page = () => {
    return (
        <div className="bg-lightGreenBackground">
            <Navbar />
            <div className="md:min-h-[calc(100vh-810px)]">
                <div className='lg:container mx-auto bg-white pt-16'>
                    <div className='text-lightFontColor w-[80%] md:w-[95%] mx-auto mt-8'>
                        <h1 className='md:text-center text-[26px] leading-[2rem] md:text-[35px] font-bold'>Create Photo Books Online in Minutes</h1>
                        <p className='text-center mx-auto mt-6 lg:text-lg'>Capture your favourite moments in a beautifully crafted custom photo book with your photos and videos. Choose from a range of options, and unleash your creativity with easy to use online editor. Customise layouts, write messages and add backgrounds and emojis.</p>
                    </div>
                </div>
                <FilterType />
                <div className='lg:container mx-auto bg-white'>
                    <Filtering />
                    <Summary summary={summary2} />
                    <div className='mx-auto w-fit pt-8 pb-8'>
                        <Link href="/">
                            <RedButton className='font-semibold py-3 px-8 text-lightGreenBackground rounded-xl'>Photo Books Home Page</RedButton>
                        </Link>
                    </div>
                </div>
            </div>
            <CookieBanner/>
            <Footer />
        </div>
    )
}

export default page
