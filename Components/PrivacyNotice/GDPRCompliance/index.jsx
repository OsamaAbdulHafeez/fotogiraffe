import { GDPRCompliance } from '@/data/GDPRCompliance'
import Link from 'next/link'
import React from 'react'

const GDPR = () => {
    return (
        <div className="mt-4">
            <h2 className='text-gray-800 font-extrabold text-[16px]  md:text-[18px] underline'>GDPR compliance notice for residents of United Kingdom, EEA and Switzerland</h2>
            <ul className='list-disc pl-6 md:pl-8 mt-3'>
                {GDPRCompliance?.map((ele, index) => (
                    <li key={index} className='text-md lg:text-lg mb-3'><span className="font-bold">{ele?.title} - </span>{ele?.text} <a href="mailto:support@fotogiraffe.co.uk" className='font-semibold'>{ele?.link1}</a>
                        <ul className='list-disc pl-10 md:pl-12'>
                            {ele?.list?.map((ele2,index)=>(
                                <li key={index} className='text-md lg:text-lg mb-3'><span className="font-bold">{ele2?.listTitle && `${ele2?.listTitle} - `}</span>{ele2?.listText}</li>
                            ))}
                        </ul>
                        <p className='text-md lg:text-lg'>{ele?.text2} <a href="mailto:support@fotogiraffe.co.uk" className='font-semibold'>{ele?.link2}</a></p>
                        <p className='text-md lg:text-lg mt-4'>{ele?.text3}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default GDPR
