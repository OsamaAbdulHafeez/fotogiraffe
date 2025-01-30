"use client";
import { filterTypesNavbar } from "@/data/filterType";
import { ChooseFilter } from "@/redux/filterBookSlice";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const DropdownMenu = () => {
  const filter = useSelector((state) => state.filterBook.selectedFilters);
  const dispatch = useDispatch();
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
    <div className="hidden md:flex bg-lightSkyBlue gap-8 md:w-[60%] lg:w-[50%] p-5 rounded-xl border border-lightFontColor z-20 absolute top-[52px] right-20">
      {filterTypesNavbar?.map((ele, index) => (
        <div
          key={index}
          className="flex flex-col gap-1 mb-2 md:mb-0 text-lightFontColor"
        >
          <h6 className="mb-2 font-extrabold text-lightFontColor text-lg leading-6">
            {ele?.filType?.value}
          </h6>
          <div className="flex flex-col">
            {ele?.category?.map((category, index) => (
              <Link
                href={"/choose-your-photo-book"}
                key={index}
                onClick={() =>
                  handleCheckboxChange(ele?.filType?.type, category?.type)
                }
                className="flex gap-x-2 items-center mr-3"
              >
                <input
                  type="checkbox"
                  value={category?.type}
                  className="custom-checkbox hidden"
                />
                <span className="w-full py-1 font-bold text-lightFontColor text-lg cursor-pointer  duration-300 hover:text-black px-3 hover:bg-[#f0f0f0] transition-colors">
                  {category?.value}
                </span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DropdownMenu;
