"use client"
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import OfferCard from '../OfferCard'
import { categories } from '@/data/categories'
import { useSelector } from 'react-redux'

const Filtering = () => {

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

  return (
    <div className="pt-6 text-lightFontColor">
      {/* Offer Cards */}
      <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-x-10">
        {filteredBooks
          ?.sort((a, b) => a.orientation.localeCompare(b.orientation))
          ?.map(
            (ele, index) =>
              ele?.isActive && (
                <Link
                  href={`/photo-books-products/${ele.slug}`}
                  key={index}
                >
                  <OfferCard key={index} data={ele} br={false} />
                </Link>
              )
          )}
      </div>
    </div>
  );
}

export default Filtering
