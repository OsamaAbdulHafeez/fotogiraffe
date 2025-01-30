import Link from 'next/link';
import React from 'react'
import OfferCard from '../OfferCard';
import { categories } from '@/data/categories';

const Suggestion = () => {
    const isActiveBooks = categories?.filter((book) => book.isActive)
    const randomNumber = isActiveBooks && Math.floor(Math.random() * (isActiveBooks.length - 1));
    return (
      <div className="mt-16 pb-20 w-[90%] mx-auto">
        <h2 className="text-lightFontColor text-2xl md:text-3xl lg:text-4xl font-bold">
          You may also like...
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2  sm:gap-x-10">
          {isActiveBooks
            ?.slice(randomNumber, randomNumber + 2)
            ?.map((ele, index) => (
              <Link href={`/photo-books-products/${ele.slug}`} key={index}>
                <OfferCard key={index} data={ele} br={false}/>
              </Link>
            ))}
        </div>
      </div>
    );
}

export default Suggestion
