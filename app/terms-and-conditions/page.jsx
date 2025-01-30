import CookieBanner from '@/Components/CookieBanner'
import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import { termAndCondition } from '@/data/termandCondition'

const TermConditionPage = () => {
  return (
    <div className='bg-lightGreenBackground'>
      <Navbar />
      <div className="sm:container mx-auto lg:w-[90%] 2xl:w-[100%] bg-white pt-16">
        <div className="mt-16 pb-8 md:pb-28 md:mt-32 text-lightFontColor 2xl:min-h-[600px]">
          <h2 className="text-center mx-6 font-extrabold text-[28px] md:mx-0">FotoGiraffe Terms and Conditions</h2>
          <div className="px-10 md:px-20 mt-8 md:mt-16">
            <p className="text-md lg:text-lg">Effective From: June 1, 2023</p>
            <p className="text-md lg:text-lg mt-4">Welcome to fotogiraffe.co.uk, a website that allows you to create and purchase personalized photo books. Please read these Terms and Conditions carefully before using our services. By accessing and using our website, you agree to be bound by these Terms and Conditions.</p>
            {termAndCondition?.map((ele, index) => (
            <div key={index}>
              <p className="text-md lg:text-lg mt-4">
                <span className='font-semibold'>{index+1}. {ele?.title} : </span>{ele?.text1}
              </p>
              <ul className='pl-4 md:pl-12 list-disc -mt-2'>
                {ele?.list?.map((list,index)=>(
                  <li key={index} className="text-md lg:text-lg mt-2">{list}</li>
                ))}
              </ul>
              <p className="text-md lg:text-lg mt-4">{ele?.text2}</p>
            </div>
          ))}
          </div>
        </div>
      </div>
      <CookieBanner/>
      <Footer />
    </div>
  )
}

export default TermConditionPage
