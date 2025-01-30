import CookieBanner from "@/Components/CookieBanner"
import Filtering from "@/Components/Filtering"
import FilterType from "@/Components/FilterType"
import Footer from "@/Components/Footer"
import Navbar from "@/Components/Navbar"
import Summary from "@/Components/Summary"
import { memorySummary } from "@/data/summary"
import RedButton from "@/Utils/Button"
import Link from "next/link"

const MemoryPhotoPage = () => {
  return (
    <div className='bg-lightGreenBackground'>
      <Navbar />
      <div className=''>
        <div className="lg:container mx-auto bg-white pt-16">
          <div className='text-lightFontColor pt-8 w-[80%] md:w-[92%] mx-auto'>
            <h1 className='text-[26px] leading-[2rem] md:text-3xl lg:text-4xl font-bold'>Relive Your Most Precious Moments With FotoGiraffe's Memory Photo Books</h1>
            <p className='text-center mx-auto mt-6 lg:text-lg'>Your memories deserve more than digital storage. Create a timeless memory photo book that celebrates your life's cherished moments — from birthdays to weddings, holidays, and everyday joys.</p>
          </div>
        </div>
        <FilterType />
        <div className='lg:container mx-auto bg-white'>
          <Filtering />
          <Summary summary={memorySummary} />
          <div className='mx-auto w-fit pt-6 pb-8'>
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

export default MemoryPhotoPage
