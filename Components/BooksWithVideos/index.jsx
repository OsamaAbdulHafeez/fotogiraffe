"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import { photocoverData } from '@/data/photocoverData'
const BooksWithVideos = ({ title, tabs, cover, covers }) => {
    const [activeTab, setActiveTab] = useState(tabs[0] ? tabs[0] : tabs[1])
    const activeData = photocoverData?.find((data) => data?.covers === activeTab)
    return (
        <div className='text-lightFontColor pt-10 py-20 md:py-20 w-[92%] mx-auto'>
            <h2 className='text-center text-[20px] md:text-[26px] font-semibold'>{title}</h2>
            <div className="w-[95%] mx-auto">
                <div className="border-b border-gray-300 flex flex-wrap mt-8 relative">
                    {tabs?.map((tab, index) => (
                        <button key={index}
                            onClick={() => setActiveTab(tab)}
                            className={`${tab ? `py-1 px-4 rounded-tl-md rounded-tr-md text-md lg:text-lg text-gray-900 ${activeTab === tab
                                ? "border border-gray-300 bg-[#f3f8fb] z-10 border-b-0 -mb-[1px]"
                                : "bg-transparent hover:text-blue-700 hover:border-gray-300 hover:border"}`:""}`}>
                            {tab}
                        </button>
                    ))}
                </div>


                {activeData && (
                    <div className="md:w-[95%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                        <div>
                            <Image src={activeData.image} width={450} height={450} className='w-full' alt='image' />
                        </div>
                        <div className="flex flex-col justify-center items-center gap-3 text-lightFontColor pl:3 lg:pl-6 pr-3">
                            <ul className="list-disc flex flex-col gap-3 pl-4">
                                {activeData.features.map((feature, index) => (
                                    <li key={index} className="text-md lg:text-lg" style={{ lineHeight: '2' }}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default BooksWithVideos
