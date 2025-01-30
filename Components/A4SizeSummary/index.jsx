import RedButton from "@/Utils/Button"
import Link from "next/link"

const A4SizeSummary = () => {
    const arr = [
        "Tailor your A4 photo book to reflect your style. Choose layouts, covers, and add personalized touches like captions, quotes, and video. We keep it simple. No headaches, just good times.",
        "We go beyond mere photo books; we transform your moments into everlasting stories. FotoGiraffe specializes in crafting bespoke A4 Photo Books, adding a dash of video wizardry to your memories.",
        "Your stories are ready to burst to life! Why settle for regular photo books when you can have a blockbuster experience?",
        "Why settle for regular photo books when you can have a blockbuster experience?",
        "Order Your Video Photo Book Today!"
    ]
    return (
        <div className="text-lightFontColor w-[85%] md:w-[95%] mx-auto pt-8 pb-10">
            <div className="mx-auto">
                <h1 className="font-extrabold text-[28px] text-center">Where Memories Come Alive: FotoGiraffe's A4 Photo Book Experience</h1>
                <p className="text-md mt-8 lg:text-lg sm:mt-16 2xl:mt-6">Welcome to FotoGiraffe - home of the coolest A4 photo books, turning your memories into pure magic!</p>
                <p className="text-md mt-6 lg:text-lg">Immerse yourself in the world of Video Photo Books - elevating your memories to new heights! Imagine custom A4 photo books with a touch of video magic, as unique as you are.</p>
            </div>
            <div className="mt-12 sm:mt-28 2xl:mt-16">
                <h2 className="font-bold text-[22px] lg:text-[26px]">Order Your A4 Photo Book today with Videos!</h2>
                <Link href="#photo-book-category-tiles"><RedButton className="mx-auto font-semibold mt-12 md:mt-20 py-3 px-10 text-lightSkyBlue">Get Started &gt;</RedButton></Link>
            </div>
            <div className="mt-12 sm:mt-20 2xl:mt-8">
                <h2 className="text-[22px] font-bold">Videos from QR codes: Memories come alive!</h2>
                <p className="text-md mt-8 pr-4 sm:mt-16 2xl:mt-8 lg:text-lg">Watch your memories come alive. Our A4 Photo Books seamlessly blend high-quality photos with captivating video snippets for an immersive journey. Scan with your phone, and voila! Relive that special moment.</p>
            </div>
            <div className="mt-8 sm:mt-16 2xl:mt-8">
                <h2 className="text-[22px] font-bold">Effortlessly create A4 photo books!</h2>
                <div className="mt-8 sm:mt-16 2xl:mt-8 pr-4">
                    {arr.map((item, index) => (
                        <p key={index} className="text-md lg:text-lg mb-4">{item}</p>
                    ))}
                </div>
            </div>
            <div className="mt-10 sm:mt-20 2xl:mt-12">
                <h2 className="text-[22px] lg:text-[26px] font-bold">A4 Photo Books</h2>
                <p className="text-md mt-10 lg:text-lg sm:mt-16 pr-4">Don't wait! Transform your memories into cinematic masterpieces. Dive in and let the storytelling magic unfold."</p>
            </div>
        </div>
    )
}

export default A4SizeSummary
