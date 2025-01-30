import CookieBanner from "@/Components/CookieBanner";
import Delivery from "@/Components/Delivery";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";

export default function BooksProduct() {
    const policy = [
        "Production takes 3-4 business days and delivery takes 1-2 business days depending on the postage option.",
        "Production starts from 11PM ever day.",
        "As an example, if a photo book is bought on a Monday, the photo book will be shipped out on Friday, and will be delivered either on Saturday or Monday depending on the postage option.",
        "We are currently only shipping to the UK via Royal Mail."
    ]
    return (
      <div className="bg-lightGreenBackground ">
        <Navbar />
        <div className="sm:container mx-auto lg:w-[90%] 2xl:w-[100%] bg-white pt-16">
          <div className="mt-16 pb-28 md:mt-32 text-lightFontColor  md:min-h-[calc(100vh-810px)]">
            <h2 className="text-center font-extrabold text-[28px]">
              Shipping Policy
            </h2>
            <div className="px-4 md:px-20 mt-16">
              <p className="text-md lg:text-lg">Effective From: June 1, 2023</p>
              <ul className="list-disc pl-12 md:pl-14 mt-3 text-md lg:text-lg">
                {policy?.map((pol, index) => (
                  <li key={index} className="leading-7 mt-3">
                    {pol}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <CookieBanner/>
        <Footer />
      </div>
    );
}
