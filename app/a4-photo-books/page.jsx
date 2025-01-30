import A4SizeSummary from "@/Components/A4SizeSummary"
import CookieBanner from "@/Components/CookieBanner"
import Footer from "@/Components/Footer"
import Navbar from "@/Components/Navbar"
import OfferCard from "@/Components/OfferCard"
import { categories } from "@/data/categories"
import Image from "next/image"

const A4PhotoBookPage = () => {
    return (
        <div className='bg-lightGreenBackground'>
            <Navbar />
            <div className='sm:container mx-auto md:w-[90%] bg-white py-16'>
                <div className="mx-auto py-10 2xl:pb-2">
                    <Image
                        src={'https://assets.fotogiraffe-assets.com/webapp-images/our-story-page/giraffe-family-photo-album.jpg'}
                        width={1100}
                        height={500}
                        alt="giraffe"
                        priority
                        className="mx-auto w-[90%] md:w-[95%] h-auto"
                    />
                </div>
                <A4SizeSummary />
                <div id="photo-book-category-tiles" className="w-[97%] md:w-[95%] px-2 sm:px-0 mx-auto grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-x-10">
                    {categories.filter((ele) => (ele.size === "A4")).map((ele, index) => (
                        <OfferCard data={ele} key={index} />
                    ))}
                </div>
            </div>
            <CookieBanner/>
            <Footer />
        </div>
    )
}

export default A4PhotoBookPage
