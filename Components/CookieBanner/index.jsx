"use client"
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

const CookieBanner = () => {
    const [isCookieAccepted, setIsCookieAccepted] = useState(true);

    useEffect(() => {
        // Check localStorage for the cookie acceptance
        const accepted = localStorage.getItem('fotogiraffe-accepted-cookie-policy');
        setIsCookieAccepted(accepted === 'yes');
    }, []);

    const handleAccept = () => {
        localStorage.setItem('fotogiraffe-accepted-cookie-policy', 'yes');
        setIsCookieAccepted(true);
    };

    // Only render the banner if the cookie policy is not accepted
    if (isCookieAccepted) return null;

    return (
        <div className='fixed bottom-0 w-full bg-lightGreenBackground opacity-90 z-[2000] flex flex-col gap-1 p-2 text-lightFontColor' style={{ boxShadow: '0 0 10px rgba(0, 0, 0, .2)' }}>
            <h3 className='text-md lg:text-lg leading-5'>FotoGiraffe uses cookies and other tracking technologies to improve your user experience. By using the website, you consent to the usage of cookies.</h3>
            <div className='flex items-center gap-6'>
                <button
                    onClick={handleAccept}
                    className='bg-[#728e91] opacity-100 py-[2px] px-4 text-white border-0 rounded-[10px]   text-md lg:text-lg'>
                    I Agree
                </button>
                <Link className='underline text-md lg:text-lg' href={'/cookie-policy'}>Cookie Policy</Link>
            </div>
        </div>
    );
};

export default CookieBanner;
