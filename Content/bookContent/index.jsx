import Image from "next/image";
import React from "react";

const BookContent = ({ data, index, title1 }) => {
  return (
    <div
      className={`flex flex-col items-center mx-auto lg:w-[70%] text-lightFontColor mt-12 mb-4 2xl:pb-14 text-center ${
        title1 == "Home" ? "lg:w-[70%]" : "lg:w-full"
      }`}
    >
      <h3 className="text-[20px] md:text-2xl font-semibold">
        {index + 1}.{data.heading}
      </h3>
      <p className="mt-4 text-md lg:text-lg">{data.text}</p>
      <div className={`w-full max-h-[480px] min-h-[300px] mt-2 md:mt-8`}>
        <Image
          src={data.img}
          width={500}
          height={500}
          alt="book"
          className="object-contain w-full max-h-[480px]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
      </div>
    </div>
  );
};

export default BookContent;
