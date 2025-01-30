import React from 'react'

const SignupBenefits = () => {
    const benefits = [
        "Discount on your first order when you sign up.",
        "Our members have access to exclusive offers and discounts.",
        "Photo books with vidoes. Upload your videos and add them to your photo book!",
        "Super simple and easy to use photo book creator.",
        "Competitive pricing without compromising on quality. Our customer service is here to help you with any questions."
    ]
  return (
    <div className='text-lightFontColor'>
        <h3 className='text-center text-[26px] font-semibold mt-4'>Why Sign Up?</h3>
        <div className='bg-white w-[95%] mx-auto mt-12 shadow-custom hover:shadow-customDark transition duration-200'>
            <ul className='list-disc px-6 pt-6 py-3'>
                {benefits.map((benefits,index)=>(
                    <li key={index} className='mb-3 text-lg'>{benefits}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default SignupBenefits
