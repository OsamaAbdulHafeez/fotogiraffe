import CookieBanner from "@/Components/CookieBanner";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { blogs } from "@/data/blogs";
import RedButton from "@/Utils/Button";
import Image from "next/image";
import Link from "next/link";

const BlogPostPage = async({ params }) => {
  const { slug } = await params;
  const findBlog = blogs.find((blog) => blog.URLs === slug);
  function createMarkup(content) {
    return { __html: content };
  }
  return (
    <div className="bg-lightGreenBackground">
      <Navbar />
      <div className="container lg:w-[90%] mx-auto bg-white pt-16 md:min-h-[calc(100vh-635px)] text-lightFontColor">
        <div className="w-full relative hidden md:block">
          <Image
            src={
              "https://assets.fotogiraffe-assets.com/webapp-images/photo-books-landing-page/banners/hero-desktop-2.webp"
            }
            width={1000}
            height={300}
            alt="blogs"
            className="w-full"
            priority
          />
          <h3 className="absolute top-1/2 right-1/3 transition -translate-y-1/2 translate-x-1/2 z-20 md:text-3xl lg:text-4xl text-lightSkyBlue font-semibold w-[60%] text-center">
            {findBlog?.headline?.text1}
          </h3>
        </div>
        <div className="relative w-full min-h-[450px] overflow-hidden md:hidden bg-[url('https://assets.fotogiraffe-assets.com/webapp-images/photo-books-landing-page/banners/hero-mobile-2.webp')] bg-cover bg-center">
          <h3 className="absolute bottom-[10%] z-20 text-2xl text-lightSkyBlue font-semibold text-center">
            {findBlog?.headline?.text1}
          </h3>
        </div>
        {findBlog?.content && (
          <div dangerouslySetInnerHTML={createMarkup(findBlog?.content)} />
        )}
        <div className="flex flex-col gap-24 items-center justify-center pt-16 md:pt-24 pb-12">
          <Link href={"/"}>
            <RedButton className="py-3 px-3 font-semibold text-lightSkyBlue rounded-xl">
              Video Photo Books
            </RedButton>
          </Link>
          <Link href={"/choose-your-photo-book"}>
            <RedButton className="py-3 px-3 font-semibold text-lightSkyBlue rounded-xl">
              Create Photo Books
            </RedButton>
          </Link>
        </div>
      </div>
      <CookieBanner />
      <Footer />
    </div>
  );
};

export default BlogPostPage;
