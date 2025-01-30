import OfferCard from '../OfferCard'
import Link from 'next/link'
import { categories } from '@/data/categories'
const BooksOffer = ({data}) => {
  const filterBooks = categories.filter((book,index) => book.size === data?.groupingValues[0])
  return (
    <div className='mt-8 w-[92%] mx-auto grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-x-10'>
      {filterBooks?.map((ele, index) => <Link
        href={`/photo-books-products/${ele.slug}`}
        key={index}
      >
        <OfferCard key={index} data={ele} />
      </Link>)}
    </div>
  )
}

export default BooksOffer
