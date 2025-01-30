import A5SizeSummary from "@/Components/A5SizeSummary"
import CookieBanner from "@/Components/CookieBanner"
import Footer from "@/Components/Footer"
import Navbar from "@/Components/Navbar"
import OfferCard from "@/Components/OfferCard"
import { categories } from "@/data/categories"
import Image from "next/image"

const A5PhotoBookPage = () => {
    return (
        <div className='bg-lightGreenBackground'>
            <Navbar />
            <div className='sm:container mx-auto md:w-[90%] bg-white py-16'>
                <div className="mx-auto py-4 2xl:pb-2">
                    <Image
                        src={'https://assets.fotogiraffe-assets.com/webapp-images/our-story-page/giraffe-family-photo-album.jpg'}
                        width={1000}
                        height={500}
                        alt="giraffe"
                        className="mx-auto w-[90%] md:w-[95%] h-auto p-8"
                        priority
                    />
                </div>
                <A5SizeSummary/>
                <div id="photo-book-category-tiles" className="w-[92%] mx-auto px-8 sm:px-0 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-x-12">
                    {categories.filter((ele)=>(ele.size === "A5")).map((ele,index)=>(
                        <OfferCard data={ele} key={index}/>
                    ))}
                </div>
            </div>
            <CookieBanner/>
            <Footer />
        </div>
    )
}

export default A5PhotoBookPage
