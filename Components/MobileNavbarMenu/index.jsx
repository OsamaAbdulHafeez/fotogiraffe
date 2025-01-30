"use client"
import { filterTypesNavbar } from '@/data/filterType'
import RedButton from "@/Utils/Button"
import { useState } from "react";
import { RxCross2 } from "react-icons/rx"
import { GoChevronDown } from "react-icons/go";
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { ChooseFilter } from '@/redux/filterBookSlice';
const MobileNavbarMenu = ({
  setMenuOpen,
  menuOpen,
  showLogin,
  handleLogout,
}) => {
  const filter = useSelector((state) => state.filterBook.selectedFilters);
  const dispatch = useDispatch();
  const [openStates, setOpenStates] = useState(
    Array(filterTypesNavbar.length).fill(false)
  );
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleDropdown = (index) => {
    setOpenStates((prev) =>
      prev.map((state, i) => (i === index ? !state : state))
    );
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const handleCheckboxChange = (type, category) => {
    const newFilters = { ...filter };
    if (newFilters[type].includes(category)) {
      newFilters[type] = newFilters[type].filter((item) => item !== category);
    } else {
      newFilters[type] = [...newFilters[type], category];
    }
    dispatch(ChooseFilter(newFilters));
  };
  return (
    <div className="w-full opacity-100 visible bg-[#0000002d]">
      <div
        className={`flex flex-col bg-skyBlue pl-8 py-4 text-white w-[240px] z-[100] fixed top-0 ${
          menuOpen ? "-left-0" : "-left-[100%]"
        } transform transition-all duration-500 h-full overflow-auto`}
      >
        <div>
          <RxCross2
            size={20}
            className="text-white ml-auto mr-6"
            onClick={() => setMenuOpen(false)}
          />
          <div className="flex flex-col gap-y-4 pt-4">
            <Link href={"/"}>Home</Link>
            <span>
              <span>Photo Books</span>
              {filterTypesNavbar.map((ele, index) => (
                <div key={index} className="mr-4">
                  <button
                    onClick={() => toggleDropdown(index)}
                    className={`flex capitalize justify-between items-center px-3 py-1 rounded-md w-full text-left mt-2 ${
                      activeIndex === index
                        ? "border-4 border-[#abc8f4]"
                        : openStates[index]
                        ? "border-b border-white rounded-none"
                        : "border-4 border-skyBlue"
                    }`}
                  >
                    {ele?.filType?.type}
                    <GoChevronDown
                      size={25}
                      className={`text-gray-800 transform transition-transform duration-300 ${
                        openStates[index] ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openStates[index] ? "max-h-[500px]" : "max-h-0"
                    }`}
                  >
                    <div className="mt-2 ml-4 flex flex-col gap-y-3">
                      {ele?.category?.map((category, index) => (
                        <Link
                          href={"/choose-your-photo-book"}
                          key={index}
                          onClick={() =>
                            handleCheckboxChange(
                              ele?.filType?.type,
                              category?.type
                            )
                          }
                          className="mr-3"
                        >
                          <span className="ml-3 text-white cursor-pointer transition duration-300 hover:text-lightFontColor">
                            {category?.value}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </span>
            {showLogin ? (
              <Link
                href="#"
                onClick={handleLogout}
              >
                Logout
              </Link>
            ) : (
              <Link
                href="https://fotogiraffe.co.uk/login"
              >
                Login
              </Link>
            )}
            <Link href={"/frequently-asked-questions"}>FAQs</Link>
          </div>
          <Link href={"/"} className="">
            <RedButton className="py-2 px-6 text-white mt-8">
              Get Started
            </RedButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbarMenu
