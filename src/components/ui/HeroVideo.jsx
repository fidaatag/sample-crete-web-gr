const HeroVideo = () => {
    return (
        <div className="h-[500px] w-full relative overflow-hidden ">
            <div className="">
                <iframe
                    width="1920"
                    height="1080"
                    // src="https://www.youtube.com/embed/D_vOqkEgmY0?autoplay=1&controls=0&mute=1&loop=1&modestbranding=1&showinfo=0&start=50&enablejsapi=1&&widgetid=3"
                    src="https://www.youtube.com/embed/8jT9ygmMvMg?autoplay=1&controls=0&mute=1&loop=1&playlist=8jT9ygmMvMg&modestbranding=1&showinfo=0"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
            </div>

            <div className="absolute top-0 left-0 w-full h-full inset-0 bg-gradient-to-b from-[rgba(11,56,64,0.62)] to-[rgba(11,56,64,0.8)]"></div>

            <div className="absolute bottom-0 w-full mx-auto px-4 sm:px-8 lg:px-20 pb-10 h-full flex flex-row items-end lg:justify-end lg:items-center">
                <div className="mt-5 max-w-xl text-yellow-50">
                    <h1 className="block font-bold text-2xl lg:text-3xl">
                    Experience <br />
                    the Beauty of Creta
                    </h1>
                    <p className="mt-4 pl-1 text-left line-clamp-2 ">
                    Explore Creta like never before with our comprehensive guides on local attractions, food, accommodations, transportation, and events. Whether you`re seeking an unforgettable culinary experience, a relaxing stay, or hidden gems to explore, we`ve got you covered. Start your journey today!
                    </p>
                    <button className="ml-1.5 mt-4 py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border bg-white text-black">Watch Video</button>
                </div>
            </div>


        </div>
    )
}

export default HeroVideo
