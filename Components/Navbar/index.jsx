"use client";
import RedButton from "@/Utils/Button";
import DropdownMenu from "@/Utils/Navbar/DropdownMenu";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { IoMdArrowDropdown } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";
import MobileNavbarMenu from "../MobileNavbarMenu";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  const menu = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "Photo Books",
      link: "",
    },
    {
      text: "FAQs",
      link: "/frequently-asked-questions",
    },
  ];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    // Function to check if a specific cookie exists
    const checkCookie = (cookieName) => {
      return document.cookie
        .split("; ")
        .find((row) => row.startsWith(cookieName));
    };

    // Example: Check if the 'auth_token' cookie exists
    const cookieExists = checkCookie("auth_token");

    setShowLogin(!!cookieExists); // Set true if the cookie exists
  }, []);

  // Function to remove the auth_token cookie
  const handleLogout = () => {
    document.cookie = "auth_token=; Max-Age=0; path=/;"; // Removing the cookie
    setShowLogin(false); // Update the state
  };

  return (
    <>
      <div className="bg-skyBlue w-full shadow-navBar px-0 sm:px-8 lg:px-16 fixed top-0 z-50 h-16">
        <div className="sm:container flex justify-between items-center mx-auto">
          {/* Logo */}
          <Link href={"/"} className="h-16 flex items-center justify-center">
            <Image
              src={"https://assets.fotogiraffe-assets.com/logo/logo-new.webp"}
              width={2000}
              height={2000}
              alt="logo"
              priority
              sizes="(max-width: 768px) 150px, 200px"
              className="w-[200px] xl:w-[300px] md:h-auto object-contain"
            />
          </Link>

          {/* Menu */}
          <div className="hidden md:flex items-center gap-x-6 text-white font-medium text-sm sm:text-base lg:text-lg cursor-pointer">
            {menu.splice(0, 2)?.map((ele, index) => (
              <Link
                href={ele.link}
                key={index}
                className="transition duration-300 hover:scale-105 flex items-center gap-1"
                onClick={
                  ele.text === "Photo Books"
                    ? () => setIsDropdownOpen(!isDropdownOpen)
                    : undefined
                }
              >
                {ele.text}
                {ele.text === "Photo Books" && <IoMdArrowDropdown size={20} />}
              </Link>
            ))}
            {/* Conditionally render the Login or Logout link */}
            {showLogin ? (
              <Link
                href="#"
                onClick={handleLogout}
                className="transition duration-300 hover:scale-105 flex items-center gap-1"
              >
                Logout
              </Link>
            ) : (
              <Link
                href="https://fotogiraffe.co.uk/login"
                className="transition duration-300 hover:scale-105 flex items-center gap-1"
              >
                Login
              </Link>
            )}

            {menu.splice(0, 1)?.map((ele, index) => (
              <Link
                href={ele.link}
                key={index}
                className="transition duration-300 hover:scale-105 flex items-center gap-1"
                onClick={
                  ele.text === "Photo Books"
                    ? () => setIsDropdownOpen(!isDropdownOpen)
                    : undefined
                }
              >
                {ele.text}
                {ele.text === "Photo Books" && <IoMdArrowDropdown size={20} />}
              </Link>
            ))}
          </div>

          {/* Button */}
          <div className="flex items-center gap-6">
            <Link href={"/"} className="hidden md:block">
              <RedButton className="px-5 py-2 text-white">
                Get Started
              </RedButton>
            </Link>
            {showLogin && (
              <Link
                href={"https://fotogiraffe.co.uk/shopping-cart"}
                className="hidden md:block"
              >
                <FaCartShopping className="text-gray-500" size={24} />
              </Link>
            )}
          </div>
          {/* HamBurger */}
          <div className="md:hidden flex items-center justify-between min330:gap-3 min375:gap-5 min425:gap-8 min375:mr-4">
            <Link href={"/"} className="">
              <RedButton className="px-2 py-1 text-white text-sm rounded-xl">
                Get Started
              </RedButton>
            </Link>
            <CiMenuBurger
              size={28}
              className="h-6 text-white"
              onClick={() => setMenuOpen(true)}
            />
          </div>
          {isDropdownOpen && <DropdownMenu />}
        </div>
      </div>
      <MobileNavbarMenu
        setMenuOpen={setMenuOpen}
        menuOpen={menuOpen}
        showLogin={showLogin}
        handleLogout={handleLogout}
      />
    </>
  );
};

export default Navbar;
