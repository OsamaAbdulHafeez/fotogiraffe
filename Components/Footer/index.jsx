import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  const menu = [
    {
      title: "About Us",
      link: "/our-story"
    },
    {
      title: "FAQs",
      link: "/frequently-asked-questions"
    },
    {
      title: "Refund Policy",
      link: "/refund-policy"
    },
    {
      title: "Shipping Policy",
      link: "/shipping-policy"
    },
    {
      title: "Blogs",
      link: "/blogs"
    }
  ];
  const conditions = [
    {
      title: "Terms and Conditions",
      link: "/terms-and-conditions"
    },
    {
      title: "Privacy Notice",
      link: "/privacy-notice"
    },
    {
      title: "Cookie Notice",
      link: "/cookie-policy"
    },
  ];

  return (
    <footer className=" relative bg-[#666] mt-12 flex flex-col items-center gap-y-12 pt-8 px-4 sm:px-8">
      {/* Logo and Contact */}
      <div className="flex flex-col items-center gap-5 text-center">
        <Image
          src={"https://assets.fotogiraffe-assets.com/logo/logo-new.webp"}
          width={200}
          height={200}
          alt="logo"
          priority
          sizes="(max-width: 768px) 150px, 200px"
          className="w-[200px] lg:w-[250px] xl:w-[300px]"
        />
        <div>
          <p className="text-white text-sm sm:text-base tracking-wide">
            Contact us at{" "}
            <a href="mailto:support@fotogiraffe.co.uk" className="underline">
              support@fotogiraffe.co.uk
            </a>{" "}
            if you have any questions.
          </p>
          <p className="text-white text-sm sm:text-base tracking-wide mt-4">
            Address: C/O Golder Baqa Ground Floor, 1 Baker's Row, London, United
            Kingdom, EC1R 3DB
          </p>
        </div>
      </div>

      {/* Social Media and Payments */}
      <div className="flex flex-col items-center gap-5 text-center">
        <div className="flex gap-3">
          <a href="https://www.facebook.com/fotogiraffe.photobooks" target="_blank">
            <Image
              src={"https://assets.fotogiraffe-assets.com/emails/assets/facebook.png"}
              width={50}
              height={50}
              alt="facebook"
              className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px]"
            />
          </a>
          <a href="https://www.instagram.com/fotogiraffe.photobooks/#" target="_blank">
            <Image
              src={"https://assets.fotogiraffe-assets.com/emails/assets/instagram.png"}
              width={50}
              height={50}
              alt="instagram"
              className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px]"
            />
          </a>
          <a href="https://www.pinterest.com/fotogiraffeuk/" target="_blank">
            <Image
              src={"https://assets.fotogiraffe-assets.com/emails/assets/pinterest.png"}
              width={50}
              height={50}
              alt="pinterest"
              className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px]"
            />
          </a>
        </div>
        <div className="flex flex-col items-center sm:flex-row sm:gap-3">
          <span className="text-white text-sm sm:text-base">We accept:</span>
          <div className="flex items-center gap-2 mt-2 sm:mt-0">
            <Image
              src={"https://assets.fotogiraffe-assets.com/webapp-images/checkout-page/visa.png"}
              width={40}
              height={40}
              alt="visa"
              sizes="40px"
              // className="w-auto h-auto"
              className="w-[40px] h-[40px] object-contain"
            />
            <Image
              src={"https://assets.fotogiraffe-assets.com/webapp-images/checkout-page/master-card.png"}
              width={40}
              height={40}
              alt="mastercard"
              sizes="40px"
              // className="w-auto h-auto"
              className="w-[40px] h-[40px] object-contain"
            />
            <Image
              src={"https://assets.fotogiraffe-assets.com/webapp-images/checkout-page/amex.png"}
              width={40}
              height={40}
              alt="amex"
              sizes="40px"
              // className="w-auto h-auto"
              className="w-[40px] h-[40px] object-contain"
            />
            <Image
              src={"https://assets.fotogiraffe-assets.com/webapp-images/checkout-page/jcb.png"}
              width={40}
              height={40}
              alt="jcb"
              sizes="40px"
              // className="w-auto h-auto"
              className="w-[40px] h-[40px] object-contain"
            />
            <Image
              src={"https://assets.fotogiraffe-assets.com/webapp-images/checkout-page/google-pay-logo.png"}
              width={50}
              height={50}
              alt="google-pay"
              sizes="50px"
              // className="w-auto h-auto"
              className="w-[50px] h-[50px] object-contain"
            />
          </div>
        </div>
        <Image
          src={"https://assets.fotogiraffe-assets.com/webapp-images/checkout-page/stripe.svg"}
          width={120}
          height={27}
          alt="stripe"
          className="bg-white w-[120px] h-[27px] object-contain"
        />
      </div>

      {/* Footer Links */}
      <div className="flex flex-col items-center gap-5 text-center">
        <div className="flex flex-wrap justify-center gap-6 text-white text-sm sm:text-base">
          {menu?.map((ele, index) => (
            <Link key={index} href={ele?.link} className="cursor-pointer hover:underline">
              {ele?.title}
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-3 text-white text-sm sm:text-base">
          {conditions?.map((ele, index) => (
            <Link href={ele?.link}
              key={index}
              className={`cursor-pointer`}
            >
              {ele?.title}
              &nbsp;&nbsp;&nbsp;
              {index !== conditions.length - 1 ? "/" : ""}
            </Link>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="text-white text-sm sm:text-base border-t border-gray-400 w-full text-center py-4">
        &copy; FotoGiraffe 2024, All Rights Reserved
      </div>
      <Image
        src={"https://assets.fotogiraffe-assets.com/webapp-images/footer/giraffe-footer.webp"}
        width={230}
        height={300}
        alt="giraffe"
        priority
        className="absolute bottom-0 right-4 hidden lg:block w-[230px] h-[300px] object-contain"
      />
    </footer>
  );
};

export default Footer;
