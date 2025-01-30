"use client"
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { filterTypes } from '@/data/filterType'
import { categories } from '@/data/categories';
import { ChooseFilter } from '@/redux/filterBookSlice';
const FilterType = () => {
    const dispatch = useDispatch()
    const [isSticky, setIsSticky] = useState(false);
    const stickyRef = useRef(null);


    // handle checkbox
    const handleCheckboxChange = (type, category) => {
        const newFilters = { ...filter };
        if (newFilters[type].includes(category)) {
            newFilters[type] = newFilters[type].filter(item => item !== category)
        } else {
            newFilters[type] = [...newFilters[type], category]
        }
        dispatch(ChooseFilter(newFilters))
        console.log(filter)
    };


    const filter = useSelector(state => state.filterBook.selectedFilters)

    // Filter Books
    const activeBooks = categories?.filter(book => book?.isActive);
    const filteredBooks = activeBooks.filter((book) => {
        return (
            (filter.size.length === 0 || filter.size.includes(book.size)) &&
            (filter.cover.length === 0 || filter.cover.includes(book.cover)) &&
            (filter.orientation.length === 0 || filter.orientation.includes(book.orientation))
        );
    });

    // Clear All Filter
    const handleClearAll = () => {
        dispatch(ChooseFilter({ size: [], cover: [], orientation: [] }))
    };
    useEffect(() => {
        const handleScroll = () => {
            if (stickyRef.current) {
                const stickyTop = stickyRef.current.getBoundingClientRect().top;
                setIsSticky(stickyTop <= 0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div
            ref={stickyRef}
            className={`text-lightFontColor sticky top-0 bg-white ${isSticky
                ? "w-full mx-auto border-4 border-lightFontColor bg-lightBackground z-[1000]"
                : "w-full mx-auto border-0 lg:container bg-lightBackground pt-6"
                }`}
        >
            <div className={`mx-auto ${isSticky ? 'w-full' : 'w-[90%]'}`}>
                <div className={`${isSticky && 'bg-lightBackground'} flex justify-between text-lg font-semibold p-2 md:px-4 md:py-2`}>
                    <button
                        onClick={handleClearAll}
                        className="underline text-[15px] md:text-lg"
                    >
                        Clear All
                    </button>
                    <p className="text-[15px] md:text-lg">
                        {filteredBooks?.length} Product(s)
                    </p>
                </div>
                <div className='bg-lightBackground' style={{ boxShadow: "3px 4px 8px 3px rgba(0, 0, 0, .3)" }}>
                    <div
                        className="grid grid-cols-2 min330:grid-cols-3 md:grid-cols-3 p-3 max-w-[1536px] mx-auto"
                    >
                        {filterTypes?.map((ele, index) => (
                            <div key={index} className={`w-full flex items-start flex-wrap gap-1 h-fit mb-2 md:mb-0`}>
                                <p className="text-[14px] md:text-[16px] font-semibold">
                                    {ele?.filType?.value}
                                </p>
                                <div className={`flex flex-col gap-y-1 min425:flex-wrap w-full ${index === filterTypes.length - 1 ? ' flex-row min425:flex-row' : 'flex-col min425:flex-row'
                                }`}>
                                    {ele?.category?.map((category, index) => (
                                        <div key={index} className="flex gap-x-2 items-center mr-3">
                                            <input
                                                type="checkbox"
                                                value={category?.type}
                                                checked={filter[ele?.filType?.type].includes(
                                                    category?.type
                                                )}
                                                onChange={() =>
                                                    handleCheckboxChange(
                                                        ele?.filType?.type,
                                                        category?.type
                                                    )
                                                }
                                                className="custom-checkbox"
                                            />
                                            <span className="text-xs min425:text-sm md:text-md lg:text-[16px]">
                                                {category?.value}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterType
