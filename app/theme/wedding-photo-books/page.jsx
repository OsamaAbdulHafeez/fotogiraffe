import CookieBanner from "@/Components/CookieBanner"
import Filtering from "@/Components/Filtering"
import FilterType from "@/Components/FilterType"
import Footer from "@/Components/Footer"
import Navbar from "@/Components/Navbar"
import Summary from "@/Components/Summary"
import { weddingSummary } from "@/data/summary"
import RedButton from "@/Utils/Button"
import Link from "next/link"

const WeddingPhotoPage = () => {
  return (
    <div className='bg-lightGreenBackground'>
      <Navbar />
      <div className=''>
        <div className="lg:container mx-auto bg-white pt-16">
          <div className='text-lightFontColor w-[80%] md:w-[92%] mx-auto pt-8'>
            <h1 className='text-[26px] leading-[2rem] md:text-3xl lg:text-4xl font-bold xl:text-center'>Treasure Your Big Day with a Stunning Wedding Photo Book</h1>
            <p className='text-center mx-auto mt-6 lg:text-lg'>Your wedding day is one of the most memorable moments of your life, and it deserves to be preserved beautifully. With our photo books, you can turn your cherished photos into elegant keepsakes. In addition to photos, you can also add videos of your special day creating a visually stunning wedding photo book to relive your precious moments.</p>
          </div>
        </div>
        <FilterType/>
        <div className='lg:container mx-auto bg-white'>
          <Filtering />
          <Summary summary={weddingSummary} />
          <div className='mx-auto w-fit md:pt-8 pb-8'>
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

export default WeddingPhotoPage
