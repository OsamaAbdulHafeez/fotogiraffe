import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ data }) => {
  return (
    <Link
      href={`blog-post/${data?.URLs}`}
      className="shadow-blogShadow rounded-lg mb-12 flex flex-col justify-between items-center text-center"
    >
      <div className="w-full">
        <Image
          src={
            "https://assets.fotogiraffe-assets.com/webapp-images/photo-books-landing-page/banners/hero-desktop-2.webp"
          }
          width={1000}
          height={300}
          alt="blogs"
          className="rounded-t-lg"
        />
      </div>
      <div className="text-[22px] font-semibold leading-[1.8rem] px-3 my-6">
        <span>{data?.headline?.text1}</span>
        <span>{data?.headline?.text2}</span>
      </div>
      <p className="text-md lg:text-[19.1px] mt-5 mb-3 px-3">
        {data?.blogsDescription}....
      </p>
    </Link>
  );
};

export default BlogCard;
