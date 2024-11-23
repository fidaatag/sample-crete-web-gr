import { useEffect, useState } from "react";


const HeroSearch = ({children}) => {
    const images = [
        "src/assets/hero-1.jpg",
        "src/assets/hero-2.jpg",
        "src/assets/hero-3.jpg",
    ];

    const [currentIndexImg, setCurrentIndexImg] = useState(0);
    const [isFading, setIsFading] = useState(false);
    const [searchValue, setSearchValue] = useState(""); // State untuk nilai input pencarian

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

    const handleSearch = () => {
        console.log("Search value:", searchValue); // Cetak nilai pencarian ke konsol
    };

    return (
        <>
            {/* Hero */}
            <div className="h-[400px] w-full relative overflow-hidden ">
                <img
                    src={images[currentIndexImg]}
                    className={`w-full h-full object-cover transition-opacity duration-800 ${isFading ? "opacity-80" : "opacity-100"}`}
                    alt="Img Hero"
                />

                <div className="absolute top-0 left-0 w-full h-full inset-0 bg-gradient-to-b from-[rgba(11,56,64,0.62)] to-[rgba(11,56,64,0.8)]"></div>

                <div className="absolute bottom-0 w-full mx-auto px-4 sm:px-8 lg:px-20 pt-32 pb-10 h-full flex flex-col justify-end gap-5">
                    <h3 className="text-base text-white font-medium">Find and Search Catalogs on Creta Here</h3>

                    <div className="flex flex-col lg:flex-row justify-between gap-4">

                        <div className="relative w-full lg:w-1/2">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input
                                type="search"
                                id="default-search"
                                className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search for..."
                                required
                                value={searchValue} // Bind state ke input
                                onChange={(e) => setSearchValue(e.target.value)} // Update state saat pengguna mengetik
                            />
                            <button
                                type="button"
                                className="text-white absolute end-2 bottom-1 bg-cyan-900 hover:bg-blue-950 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-cyan-900 dark:hover:bg-blue-950 dark:focus:ring-blue-800"
                                onClick={handleSearch} // Panggil fungsi handleSearch saat tombol diklik
                            >
                                Search
                            </button>
                        </div>

                        <div className="flex gap-5 w-full lg:w-1/3">

                        <div className="relative w-full">
                            <div className="absolute inset-y-0 end-3 flex items-center ps-3 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m7 10l5 5l5-5"></path></svg>
                            </div>
                            <input disabled type="search" id="default-search" className="block w-full p-3 pe-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Filter by" required />
                        </div>

                        <div className="relative w-full">
                            <div className="absolute inset-y-0 end-3 flex items-center ps-3 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m7 10l5 5l5-5"></path></svg>
                            </div>
                            <input disabled type="search" id="default-search" className="block w-full p-3 pe-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Location" required />
                        </div>

                        </div>

                    </div>

                </div>

            </div>

            {children(searchValue)}

        </>
    );
};

export default HeroSearch;
