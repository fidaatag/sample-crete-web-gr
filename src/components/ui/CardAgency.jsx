import { Icon } from "@iconify/react/dist/iconify.js"
import { Facebook } from "lucide-react"
import { useState } from "react"

const CardAgencyGuide = ({title, bgImage, category, showCategory, desc}) => {
    console.log(title)
    console.log(bgImage)
    console.log(category)
    console.log(showCategory)
    console.log(desc)

    return (
      <div className="w-full shadow rounded-lg flex flex-col lg:flex-row">
        <div className="mx-20 lg:mx-0"></div>
        <div className="lg:flex-1 h-32 lg:h-full">
            <img src={bgImage} className="w-full h-full object-cover rounded-t-lg lg:rounded-s-lg lg:rounded-r-none" alt=""/>
        </div>
        <div className="flex-1 py-4 px-2 lg:py-10 lg:px-5 flex flex-col gap-2">
            <p className="font-semibold text-base lg:text-lg">Siolane Start Tour</p>
            <p className="font-semibold text-[10px] lg:text-base text-cyan-600">Central Creta, Alabasta Mountains, Sunset Beach</p>
            <p className="text-sm line-clamp-3 hidden lg:block">Offers guided tours with accommodations for extended stays and family-friendly packages.</p>
            <div className="mt-1 lg:mt-4">
              <button className="bg-cyan-950 rounded-md w-fit text-[9px] lg:text-sm font-semibold px-3 py-1 text-white">More Info</button>
            </div>
            
            {/* <div className="flex gap-1 lg:gap-3">
                <div className="border p-1 bg-cyan-950 rounded-lg w-fit text-sm text-white"><Icon icon="ri:facebook-fill" /></div>
                <div className="border p-1 bg-cyan-950 rounded-lg w-fit text-sm text-white"><Icon icon="ri:whatsapp-fill" /></div>
                <div className="border p-1 bg-cyan-950 rounded-lg w-fit text-sm text-white"><Icon icon="ri:instagram-fill" /></div>
                <div className="border p-1 bg-cyan-950 rounded-lg w-fit text-sm text-white"><Icon icon="ri:twitter-x-fill" /></div> 
            </div> */}
        </div>
      </div>
    )
  }
  export default CardAgencyGuide
  