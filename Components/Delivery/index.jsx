import Link from 'next/link';
import React from 'react'
import { FaShuttleVan } from "react-icons/fa";
const Delivery = () => {
    return (
        <div className='bg-lightGreenBackground flex flex-col gap-y-6 rounded-xl text-lightFontColor w-[88%] md:w-[92%] mx-auto p-6 md:p-8 md:gap-y-4'>
            <div className='flex gap-4 items-center'>
                <FaShuttleVan size={30} />
                <h3 className='text-[22px] font-semibold'>Delivery</h3>
            </div>
            <h6 className='text-[17px] md:text-[19px]'>We take time to carefully print and make your items before delivery.</h6>
            <Link href="/shipping-policy">
                <p className='text-md lg:text-lg underline'>Click for delivery information.</p>
            </Link>
        </div>
    )
}

export default Delivery
