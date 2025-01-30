import Image from "next/image";
import hero from "@/public/Images/hero-desktop.webp";
import Link from "next/link";

const HeroImages = () => {
  return (
    <div className="relative w-full">
      <Link href="/choose-your-photo-book">
          <Image
          src={"https://assets.fotogiraffe-assets.com/webapp-images/photo-books-landing-page/banners/hero-desktop-9.webp"}
          alt="hero"
          width={1000}
          height={600}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw" // Responsive sizes
          priority // Ensures the image is loaded early
          className="object-cover w-full hidden md:block" // Maintains consistent styling
        />
        <Image
          src={"https://assets.fotogiraffe-assets.com/webapp-images/photo-books-landing-page/banners/hero-mobile-9.webp"}
          alt="hero"
          width={700} // Set the width of the original image
          height={1000} // Set the height of the original image
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw" // Responsive sizes
          priority // Ensures the image is loaded early
          className="object-cover w-full md:hidden" // Maintains consistent styling
        />
      </Link>
    </div>
  );
};

export default HeroImages;
