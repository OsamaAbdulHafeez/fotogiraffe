import BannerText from "@/Components/BannerText";
import BooksOffer from "@/Components/BooksOffer";
import BooksWithVideos from "@/Components/BooksWithVideos";
import CookieBanner from "@/Components/CookieBanner";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { sizeBasedCategoryGroupings } from "@/data/sizebasedCategory";

export default async function BookCategory({ params }) {
    const { slug } = await params;
    const findSize = sizeBasedCategoryGroupings.find(size => size.sizes === slug)
  return (
    <div className="bg-lightGreenBackground">
      <Navbar />
      <div className="sm:container mx-auto bg-white pt-16 md:min-h-[calc(100vh-810px)]">
        <BannerText data={findSize}/>
        <BooksOffer data={findSize}/>
        <BooksWithVideos title="Photo Books with Vidoes!" tabs={["Books with Videos!","Hard Cover","Soft Cover"]}/>
      </div>
      <CookieBanner/>
      <Footer/>
    </div>
  );
}
