import HeroImages from "@/Components/HeroImage";
import Memorise from "@/Components/Memorise";
import BookImage from "@/Components/BookImage";
import TrustPilot from "@/Components/TrustPilot";
import PhotoBooks from "@/Components/PhotoBooks";
import Text from "@/Components/Text";
import Questions from "@/Components/Questions";
import Summary from "@/Components/Summary";
import Footer from "@/Components/Footer";
import CustomBook from "@/Components/CustomBook";
import Navbar from "@/Components/Navbar";
import { summary } from "@/data/summary";
import { categories } from '@/data/categories';
import CookieBanner from "@/Components/CookieBanner";
export default function Home() {
    return (
        <div className="bg-lightGreenBackground">
            <Navbar />
            <div className="xl:container mx-auto bg-white mt-16">
                <HeroImages />
                <Memorise />
                <BookImage />
                <CustomBook />
                <TrustPilot />
                <div className="w-[90%] md:w-[97%] 2xl:w-full mx-auto">
                    <PhotoBooks title="Home" />
                </div>
                <Text />
                <Questions />
                <div className="2xl:w-full">
                    <Summary summary={summary} />
                </div>
            </div>
            <CookieBanner/>
            <Footer />
        </div>
    );
}
