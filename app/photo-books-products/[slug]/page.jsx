import BookDetails from "@/Components/BookDetails";
import BooksWithVideos from "@/Components/BooksWithVideos";
import CookieBanner from "@/Components/CookieBanner";
import Delivery from "@/Components/Delivery";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Suggestion from "@/Components/Suggestion";
import RedButton from "@/Utils/Button";
import { categories } from "@/data/categories";
import Link from "next/link";

export default async function BooksProduct({ params }) {
  const { slug } = await params;
  const findBook = categories.find((book) => book.slug === slug);
  return (
    <div className="bg-lightGreenBackground">
      <Link href={'https://fotogiraffe.co.uk/photo-book-creator'} className="z-50 bg-[#f3f8fb] fixed bottom-3 right-5 ml-auto p-3 flex justify-center items-center shadow-custom">
        <RedButton className="py-5 px-14 text-lg font-semibold text-lightSkyBlue rounded-xl">Get Started...</RedButton>
      </Link>
      <Navbar />
      <div className="sm:container mx-auto lg:w-[97%] 2xl:w-[90%] bg-white pt-16">
        <BookDetails data={findBook} />
        <BooksWithVideos
          title="Premium Quality at Affordable Prices!"
          tabs={[
            "Books with Videos!",
            findBook?.cover === "Hard"
              ? "Hard Cover"
              : findBook?.cover === "Soft"
                ? "Soft Cover"
                : "",
          ]}
        />
        <Delivery />
        <Suggestion/>
      </div>
      <CookieBanner/>
      <Footer />
    </div>
  );
}
