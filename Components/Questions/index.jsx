"use client";
import { question } from "@/data/questions";
import { DownArrow } from "@/icons";
import React, { useState } from "react";

const Questions = ({ className }) => {
  const [activeIndex1, setActiveIndex1] = useState(null);
  const [activeIndex2, setActiveIndex2] = useState(null);

  const toggleAnswer1 = (index) => {
    setActiveIndex1(activeIndex1 === index ? null : index);
    setActiveIndex2(null);
  };
  const toggleAnswer2 = (index) => {
    setActiveIndex2(activeIndex2 === index ? null : index);
    setActiveIndex1(null);
  };
  return (
    <div
      className={`flex flex-col w-[85%] mx-auto mt-16 lg:mt-24 ${className}`}
    >
      <h3 className="text-lightFontColor text-center text-xl md:text-2xl font-semibold mb-8">
        Got Questions?
      </h3>
      <div className="grid grid-cols-1 2xl:grid-cols-2 gap-x-16">
        <div>
          {question?.column1?.map((item, index) => (
            <div
              key={index}
              className={`border ${index == 0 ? "rounded-t-lg" : ""} 
              ${
                index === question.column1.length - 1
                  ? "md:rounded-b-lg overflow-hidden"
                  : ""
              }
              border-gray-300`}
            >
              <div
                className={`px-4 text-[18px] py-2 cursor-pointer font-semibold text-lightFontColor flex justify-between items-center xl:text-lg 2xl:text-xl 2xl:py-3 ${
                  index == 0 ? "rounded-t-lg" : ""
                } ${
                  activeIndex1 === index
                    ? "border-4 border-blue-200 box-border"
                    : "border-4 border-white"
                }`}
                onClick={() => toggleAnswer1(index)}
              >
                {item.question}
                <div
                  className={`transform transition-transform duration-500 ${
                    activeIndex1 === index ? "rotate-180" : ""
                  }`}
                >
                  <DownArrow />
                </div>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeIndex1 === index ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <div
                  className="p-4 border-t text-gray-900 text-md md:text-[19px]"
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                />
              </div>
            </div>
          ))}
        </div>
        <div>
          {question?.column2?.map((item, index) => (
            <div
              key={index}
              className={`border ${
                index == 0 ? "md:rounded-t-lg overflow-hidden" : ""
              } 
              ${
                index === question.column2.length - 1
                  ? "rounded-b-lg overflow-hidden"
                  : ""
              }
              border-gray-300`}
            >
              <div
                className={`px-4 text-md py-2 cursor-pointer font-semibold text-lightFontColor flex justify-between items-center xl:text-lg 2xl:text-xl 2xl:py-3 ${
                  activeIndex2 === index
                    ? "border-4 border-blue-200 box-border"
                    : "border-4 border-white"
                }`}
                onClick={() => toggleAnswer2(index)}
              >
                {item.question}
                <div
                  className={`transform transition-transform duration-500 ${
                    activeIndex2 === index ? "rotate-180" : ""
                  }`}
                >
                  <DownArrow />
                </div>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeIndex2 === index ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <div className="p-4 border-t text-gray-900 text-md md:text-lg">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questions;
