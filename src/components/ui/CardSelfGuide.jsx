import { useState } from "react"

const CardSelfGuide = ({title, bgImage, category, showCategory, desc}) => {

    return (
      <div className="w-full h-52 lg:h-96 relative shadow rounded-lg">
        <div className="mx-20"></div>
        <img src={bgImage} className="w-full h-full object-cover rounded-lg" alt="" />
        <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-[rgba(30,144,165,0.22)] bg-gradient-to-t from-[rgba(30,144,165,0.22)] to-[rgba(30,144,165,0.22)]"></div>
        
        <div className={`absolute top-0 right-0 py-4 px-4 ${showCategory ? "hidden" : "flex"}`}>
          <span className="py-1 px-2 rounded-3xl font-semibold text-xs lg:text-sm bg-cyan-200 flex items-center">{category}</span>
        </div>
        
        <div className="absolute bottom-0 w-full h-1/2 rounded-lg py-5 px-4 flex flex-col items-start justify-end bg-gradient-to-b from-[rgba(7,11,27,0)] to-cyan-950 to-[80%] text-white">
          <p className="font-semibold text-lg lg:text-2xl">{title}</p>
          <p className="line-clamp-2 text-xs lg:text-sm">{desc}</p>
        </div>
      </div>
    )
  }
  
  export default CardSelfGuide
  