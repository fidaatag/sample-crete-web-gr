import { useEffect, useState } from "react";
import HeroImages from "../../assets/HeroImg";

const Hero = () => {
  const images = [
    HeroImages.HeroLocal1,
    // HeroImages.HeroUnplash1,
    // HeroImages.HeroUnplash2,
  ];

  const [currentIndexImg, setCurrentIndexImg] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true); // Mulai fade-out
      setTimeout(() => {
        setCurrentIndexImg((prevIndex) => (prevIndex + 1) % images.length); // Ganti gambar
        setIsFading(false); // Mulai fade-in
      }, 500); // Waktu fade-out sebelum ganti gambar
    }, 3000);

    return () => clearInterval(interval); // Bersihkan interval saat komponen di-unmount
  }, [images.length]);

  return (
    <>
      {/* Hero */}
      <div className="h-[600px] w-full relative overflow-hidden ">
        <img
          src={images[currentIndexImg]}
          className={`w-full h-full object-cover transition-opacity duration-800 ${isFading ? "opacity-80" : "opacity-100"}`}
          alt="Img Hero"
        />

        <div className="absolute top-0 left-0 w-full h-full inset-0 bg-gradient-to-b from-[rgba(11,56,64,0.62)] to-[rgba(11,56,64,0.8)]"></div>

        <div className="absolute bottom-0 w-full mx-auto px-4 sm:px-8 lg:px-20 pt-32 pb-10 h-full flex flex-col justify-end">
          <div className="mt-5 max-w-3xl text-white">
            <h1 className="block font-extrabold text-2xl md:text-5xl">
            Discover Creta: <br/>
            Your Ultimate Travel Guide
            </h1>
            <p className="mt-4 text-sm lg:text-base pl-1 w-full lg:w-3/4 line-clamp-2 lg:line-clamp-none">
            Explore Creta like never before with our comprehensive guides. Whether you're seeking an unforgettable experience, a relaxing stay, or hidden gems to explore, we've got you covered. Start your journey today!
            </p>
          </div>

          <div className="border rounded-md w-fit px-5 py-3 text-white flex justify-between gap-3 mt-5 text-center">
            <div className="max-w-52">
              <p className="text-[10px] lg:text-sm font-semibold">Discover Extensive Catalogs</p>
              <p className="hidden lg:block text-[10px]">Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma</p>
            </div>
            <span className="w-[1px] h-full bg-white"></span>
            <div className="max-w-52">
              <p className="text-[10px] lg:text-sm font-semibold">Independent Travel Guides</p>
              <p className="hidden lg:block text-[10px]">Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma</p>
            </div>
            <span className="w-[1px] h-full bg-white"></span>
            <div className="max-w-52">
              <p className="text-[10px] lg:text-sm font-semibold">Join The Comunity</p>
              <p className="hidden lg:block text-[10px]">Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma</p>
            </div>
          </div>

        </div>

      </div>
    </>
  );
};

export default Hero;
