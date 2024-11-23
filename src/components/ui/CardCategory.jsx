import { Link } from "react-router-dom"

export const CardCategory = ({title, bgImage}) => {
  return (
    
    <div className="w-full h-20 lg:h-40 relative">
      <Link to={`catalog-${title}`}>
      <div className="mx-20"></div>
      <img src={bgImage} className="w-full h-full object-cover rounded-lg" alt="" />
      <div className="absolute top-0 left-0 w-full h-full rounded-lg inset-0 bg-gradient-to-b from-[rgba(11,56,64,0.62)] to-[rgba(11,56,64,0.8)]"></div>
      <div className="absolute bottom-0 w-full h-full flex items-center justify-center text-center">
        <p className="font-semibold text-white text-lg lg:text-xl">{title}</p>
      </div>
      </Link>
    </div>
    
  )
}

export const CardCategoryBullet = ({title, bgImage}) => {
  return (
   
    <div>
      <Link to={`catalog-${title}`}>
      <div className="w-12 h-12 rounded-full relative">
        {/* <div className="mx-20"></div> */}
        <img src={bgImage} className="w-full h-full object-cover rounded-full" alt="" />
        <div className="absolute top-0 left-0 w-full h-full rounded-full inset-0 bg-gradient-to-b from-[rgba(11,56,64,0.62)] to-[rgba(11,56,64,0.8)]"></div>
        
      </div>
      <div className="w-full mt-2 max-h-10 flex items-center justify-center text-center">
        <p className="font-normal text-cyan-950 text-[10px]">{title}</p>
      </div>
      </Link>
    </div>
    
  )
}
