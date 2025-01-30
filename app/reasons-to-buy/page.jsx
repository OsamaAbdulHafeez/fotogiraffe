import BooksWithVideos from "@/Components/BooksWithVideos"
import CookieBanner from "@/Components/CookieBanner"
import Footer from "@/Components/Footer"
import HeroImages from "@/Components/HeroImage"
import Navbar from "@/Components/Navbar"
import PhotoBooks from "@/Components/PhotoBooks"
import ReasonBuy from "@/Components/ReasonBuy"
import Video from "@/Components/Video"

const ReasonBuyPage = () => {
    return (
        <div className='bg-lightGreenBackground'>
            <Navbar />
            <div className='sm:container mx-auto bg-white pt-16'>
                <HeroImages />
                <ReasonBuy />
                <div className="mt-16 w-full md:w-[95%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] mx-auto">
                    <PhotoBooks width="100%" />
                </div>
                <Video />
                <div className="px-8 md:px-0 text-center">
                    <BooksWithVideos title="Premium Quality at Affordable Prices!" tabs={["", "Hard Cover", "Soft Cover"]} />
                </div>
            </div>
            <CookieBanner/>
            <Footer />
        </div>
    )
}

export default ReasonBuyPage
