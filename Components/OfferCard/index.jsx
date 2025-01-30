import Image from 'next/image'
import React from 'react'

const OfferCard = ({ data, unique,br }) => {
  return (
    <div key={unique} className='w-full flex flex-col justify-between border border-darkGreenbackground shadow-custom transition-shadow hover:shadow-customDark rounded-xl my-5'>
      <div className='w-full'>
        <Image
          src={data?.imageURLs[0]}
          width={200}
          height={250}
          alt='image'
          className="w-full rounded-t-lg object-cover"
          priority
        />
      </div>
      <div className={`text-center text-lightFontColor mt-2 sm:my-2 md:min-h-[180px] md:h-auto flex flex-col justify-between`}>
        <h3 className='text-[20px] md:text-[22px] font-bold'>{data?.title}</h3>
        <p className='text-md lg:text-lg mt-4 md:mt-6 px-3 md:px-4'>{data?.description}</p>
        <h5 className='py-1 px-1 sm:py-0 bg-lightBackground sm:bg-transparent text-[20px] md:text-[22px] mt-4 md:px-0 font-semibold'>Starting from <del>£{data?.retailPrice}</del>{br && <br/>}<span className='text-textBlue'>&nbsp;£{data?.discountedRetailPrice}</span></h5>
      </div>
      <div className='bg-lightGreenBackground text-lightFontColor text-center py-1 md:py-5 rounded-b-xl'>
        <h3 className='font-extrabold text-[20px] md:text-[22px]'>Offer ends soon!</h3>
      </div>
    </div>
  ) 
}

export default OfferCard
