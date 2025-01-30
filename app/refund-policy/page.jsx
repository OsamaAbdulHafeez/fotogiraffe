import CookieBanner from '@/Components/CookieBanner';
import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import { refundPolicy } from '@/data/refundPolicy'

const RefundPolicyPage = () => {
  return (
    <div className="bg-lightGreenBackground">
      <Navbar />
      <div className="sm:container mx-auto lg:w-[90%] 2xl:w-[100%] bg-white pt-16">
        <div className="mt-16 pb-8 md:pb-28 md:mt-32 text-lightFontColor md:min-h-[calc(100vh-810px)]">
          <h2 className="text-center mx-6 font-extrabold text-[28px] md:mx-0">
            Refund Policy
          </h2>
          <div className="px-10 md:px-20 mt-8 md:mt-16">
            <p className="text-md lg:text-lg">Effective From: June 1, 2023</p>
            <p className="text-md lg:text-lg mt-4">
              At FotoGiraffe, we take great care and pride in ensuring that you
              receive the best quality products. If however, you are not
              satisfied with your purchase, we will offer you a full refund
              within 21 days of your order.
            </p>
            {refundPolicy?.map((ele, index) => (
              <div key={index} className="mt-4">
                <h4 className="font-semibold text-md lg:text-lg">
                  {index + 1}. {ele?.title}:
                </h4>
                <ul className="pl-10 list-disc md:pl-12">
                  {ele?.list.map((list, index) => (
                    <li className="text-md lg:text-lg mb-2" key={index}>
                      {list}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <p className="text-md lg:text-lg mt-4">
              By making a purchase with FotoGiraffe, you agree to abide by the
              terms and conditions outlined in this refund policy.
            </p>
          </div>
        </div>
      </div>
      <CookieBanner/>
      <Footer />
    </div>
  );
}

export default RefundPolicyPage
