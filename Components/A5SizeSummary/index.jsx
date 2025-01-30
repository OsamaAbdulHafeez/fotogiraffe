import RedButton from "@/Utils/Button"
import Link from "next/link"

const A5SizeSummary = () => {
    const arr = [
        "Personalize your A5 photo book to match your style. Select from various layouts and cover options, and add personalized touches like captions, quotes, and video. We keep it simple. No hassles, just good times.",
        "We go beyond ordinary photo books; we transform your precious moments into enduring stories. At FotoGiraffe, we excel in crafting unique A5 Photo Books, infusing a touch of video wizardry into your memories.",
        "Your stories are ready to burst into life!",
        "Why settle for regular photo books when you can have a blockbuster experience?"
    ]
    return (
        <div className="text-lightFontColor w-[75%] md:w-[90%] mx-auto pb-10">
            <div className="w-[97%] mx-auto">
                <h1 className="font-extrabold text-[28px] text-center">Where Memories Come Alive: FotoGiraffe's A5 Photo Book Experience</h1>
                <p className="text-md mt-8 lg:text-lg sm:mt-16 2xl:mt-6">Welcome to FotoGiraffe - the trendiest spot for A5 photo books, where we transform your memories into pure magic!</p>
                <p className="text-md mt-6 lg:text-lg">Immerse yourself in the realm of Video Photo Books - an elevation of your memories! Envision A5 photo books, custom-made with a dash of video magic, ensuring they are as unique as you are.</p>
            </div>
            <div className="mt-12 sm:mt-28 2xl:mt-16">
                <h2 className="font-bold text-[22px] sm:text-[26px]">Order Your A5 Photo Book today with Videos!</h2>
                <Link href="#photo-book-category-tiles"><RedButton className="mx-auto font-semibold mt-12 md:mt-20 py-3 px-10 text-lightSkyBlue">Get Started &gt;</RedButton></Link>
            </div>
            <div className="mt-12 sm:mt-20 2xl:mt-8">
                <h2 className="font-bold text-[22px]">Videos from QR codes: Memories come alive!</h2>
                <p className="text-md mt-8 pr-4 sm:mt-16 2xl:mt-8 lg:text-lg">Watch your memories unfold in motion. Our Video Photo Books flawlessly merge high-quality photos with captivating video snippets, delivering an immersive experience. Simply scan with your phone, and voila! Relive that special moment.</p>
            </div>
            <div className="mt-8 sm:mt-16 2xl:mt-8">
                <h2 className="text-[22px] font-bold">Effortlessly create A5 photo books!</h2>
                <div className="mt-8 sm:mt-16 2xl:mt-8 pr-4">
                    {arr.map((item, index) => (
                        <p key={index} className="text-md lg:text-lg mb-4">{item}</p>
                    ))}
                </div>
            </div>
            <div className="mt-10 sm:mt-20 2xl:mt-12">
                <h2 className="text-[22px] sm:text-[26px] font-bold">A5 Photo Books</h2>
                <p className="text-md mt-10 lg:text-lg sm:mt-16 pr-4">What are you waiting for? Let's transform those memories into cinematic masterpieces. Click on a tile below and let the storytelling magic unfold!!</p>
            </div>
        </div>
    )
}

export default A5SizeSummary
