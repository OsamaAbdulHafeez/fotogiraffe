import { RightArrow } from "@/icons"
import RedButton from "@/Utils/Button"
import Link from "next/link"

const Text = () => {
  return (
    <div className="flex flex-col items-center w-[80%] md:w-[60%] mx-auto mt-24">
      <h4 className="text-lightFontColor text-md md:text-xl font-extrabold text-center">Let's make memories that pop, sizzle, and stay with you forever.<br/>
        FotoGiraffe - where your stories take center stage!</h4>
      <Link href="/choose-your-photo-book">
        <RedButton className="py-3 px-10 font-semibold mt-12 text-lightSkyBlue">Get Started&nbsp;&gt;</RedButton>
      </Link>
    </div>
  )
}

export default Text
