import CookieBanner from '@/Components/CookieBanner'
import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import CollectInformation from '@/Components/PrivacyNotice/CollectInformation'
import ContentModeration from '@/Components/PrivacyNotice/ContentModeration'
import PrivacyCookie from '@/Components/PrivacyNotice/Cookie'
import GDPR from '@/Components/PrivacyNotice/GDPRCompliance'
import SecureInformation from '@/Components/PrivacyNotice/SecureInformation'
import SharingData from '@/Components/PrivacyNotice/SharingData'
import ThirdParty from '@/Components/PrivacyNotice/ThirdParty'
import { privacyNotice1 } from '@/data/privacynotice'

const PrivacyNoticePage = () => {
  return (
    <div className='bg-lightGreenBackground'>
      <Navbar />
      <div className="sm:container mx-auto lg:w-[90%] 2xl:w-[100%] bg-white pt-16">
        <div className="mt-16 pb-8 md:pb-28 md:mt-32 text-lightFontColor md:min-h-[calc(100vh-810px)]">
          <h2 className="text-center mx-6 font-extrabold text-[28px] md:mx-0">FotoGiraffe Privacy Notice</h2>
          <div className="px-10 md:px-20 mt-8 md:mt-16">
            <p className="text-md lg:text-lg">Effective From: June 1, 2023</p>
            <p className="text-md lg:text-lg mt-4">FotoGiraffe is a company registered in England and Wales (registration number 13856093) under the name MIR RETAIL AND CONSULTING LIMITED. Our registered address is C/O Golder Baqa Ground Floor, 1 Baker's Row, London, United Kingdom, EC1R 3DB</p>
            <p className="text-md lg:text-lg mt-4">We are registered as a data controller with the Information Commissioner's Office under registration number <b>ZB648569.</b></p>
            <h6 className='mt-4 font-extrabold text-gray-800 underline text-[16px]  md:text-[18px]'>
              FotoGiraffe allows customers to create personalised items from their photos and videos. This means that the site deals with your personal data and is committed to ensuring the safety and privacy of your data. This Privacy Notice explains how FotoGiraffe ("we", "us", or "our") collects, store and use personal data about you when you visit the Site, buy Products from us or otherwise provide your personal data to us in accordance with GDPR rules. You should read this document in its entirety. By creating an account and using our website to create your personalised products, you acknowledge that you have read and that you agree with this notice.
            </h6>
            {/* personal data */}
            <div className='mt-3'>
              <h2 className='text-gray-800 font-extrabold text-[16px]  md:text-[18px] underline'>{privacyNotice1?.question}</h2>
              <ul className='pl-8 md:pl-10 mt-4'>
                {privacyNotice1?.list?.map((list, index) => (
                  <li key={index} className="list-disc text-md mb-2 lg:text-lg">
                    <span className="font-bold">{list.title}-</span> {list.text}
                  </li>
                ))}
              </ul>
            </div>
            <ThirdParty/>
            <ContentModeration/>
            <SharingData/>
            <CollectInformation/>
            <SecureInformation/>
            <GDPR/>
            <PrivacyCookie/>  
          </div>
        </div>
      </div>
      <CookieBanner/>
      <Footer />
    </div>
  )
}

export default PrivacyNoticePage
