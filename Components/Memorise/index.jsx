import Image from "next/image";
import videoIcon from "@/public/Images/video-icon.png";
import laptopIcon from "@/public/Images/laptop-icon.png";
import paperIcon from "@/public/Images/paper-icon.png";
import Link from "next/link";

const Memorise = () => {
  const arr = [
    {
      section:"videos",
      img: videoIcon,
      text: "Our photo books also have videos!",
      id:"bookImage"
    },
    {
      section:"software",
      img: laptopIcon,
      text: "Our software is super simple to use!",
      id:"photoBook"
    },
    {
      section:"range",
      img: paperIcon,
      text: "Range of options and sizes to choose from..",
      id:'customBook'
    },
  ];

  return (
    <div className="my-8 md:my-12 flex flex-col justify-center items-center px-4 sm:px-6">
      {/* Feature Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-16 w-[85%] md:w-[90%] lg:w-[80%] 2xl:w-[60%] mx-auto">
        {arr.map((obj, index) => (
          <Link href={`#${obj.id}`}
            key={index}
            className={`flex flex-col items-center gap-3 bg-lightGreenBackground shadow-custom hover:shadow-customDark transition duration-200 py-3 sm:py-5 md:py-6 px-2 md:px-6 rounded-xl w-full ${
              index > 1 ? "hidden lg:flex" : ""
            }`}
          >
            <Image
              src={obj.img}
              width={100}
              height={100}
              className="h-10 w-10 sm:h-16 sm:w-16 lg:w-20 lg:h-16"
              alt="icons"
              sizes="(max-width: 768px) 100px, (max-width: 1200px) 120px, 150px"
              loading="lazy"
            />
            <span className="text-center text-sm sm:text-[16px] 2xl:text-xl text-lightFontColor">{obj.text}</span>
          </Link>
        ))}
      </div>

      {/* Title and Description */}
      <div className="mt-6 md:mt-16 text-lightFontColor text-center">
        <h3 className="text-[25px] sm:text-3xl lg:text-4xl font-bold w-full px-1 mx-auto">
          Where Memories Come Alive:<br/> FotoGiraffe's Video Photo Books
        </h3>
        <span className="block text-[20px] sm:text-xl lg:text-[22px] font-semibold mt-4">
          Creating amazing photo books with videos for as little as £17.99!
        </span>
      </div>

      {/* Paragraph */}
      <p className="w-full mt-8 mx-auto text-lightFontColor text-base lg:text-lg text-center md:p-[50px]">
        FotoGiraffe's photo books are a unique way to bring your memories to
        life. Simply select your favourite videos alongside your photos during
        the creation process, and watch as your memories come to life on the
        pages of your photo book.
      </p>
    </div>
  );
};

export default Memorise;
