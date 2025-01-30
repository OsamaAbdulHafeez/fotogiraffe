import { Star } from '@/icons'
import Image from 'next/image'

const TrustPilots = ({ data, index }) => {
  return (
    <div key={index} className='min-h-[450px] md:min-h-[500px] text-white'>
      <div className='flex items-start justify-between md:mb-3'>
        <div className='flex'><Star /><Star /><Star /><Star /><Star />
        </div>
        <Image
          src={'https://assets.fotogiraffe-assets.com/logo/trustpilot.svg'}
          width={150}
          height={150}
          alt='star'
          className='md:mt-0 w-32'
        />
      </div>
      <h5 className='text-[22px] font-semibold mt-3'>{data.reviewHeading}</h5>
      {data.reviewText.map((text, index) => (
        <p key={index} className='lg:text-lg mt-2'>{text}</p>
      ))}
      <div className='mt-3'>
        <span className='font-semibold lg:text-lg'>{data.reviewerName}</span>
        <h6 className='font-semibold lg:text-lg'>{data.reviewDate}</h6>
      </div>
    </div>
  )
}

export default TrustPilots
