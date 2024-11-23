const HeroFlex = () => {
  return (
    <div className="px-4 py-8 lg:px-20 lg:py-8 flex flex-col lg:flex-row gap-5 max-w-xl lg:max-w-none mx-auto">

        <div className="flex-1 flex flex-col justify-center gap-4">
            <h3 className="font-extrabold text-xl lg:text-5xl lg:max-w-lg">Plan Your Perfect Adventure in Creta</h3>
            <p className="text-base pr-6 hidden lg:block lg:max-w-xl">Discover step-by-step travel guides to explore Creta’s must-visit destinations, from serene beaches to breathtaking mountain trails. Prefer a guided experience? Choose from our trusted tour agencies to make your journey unforgettable. Start exploring now!</p>
        </div>
        <div className="flex-1 max-h-[500px] w-full relative overflow-hidden rounded-md">
            <div className="">
                <iframe
                    className="rounded-md"
                    width="1920"
                    height="1080"
                    // src="https://www.youtube.com/embed/D_vOqkEgmY0?autoplay=1&controls=0&mute=1&loop=1&modestbranding=1&showinfo=0&start=50&enablejsapi=1&&widgetid=3"
                    src="https://www.youtube.com/embed/8jT9ygmMvMg?autoplay=1&controls=0&mute=1&loop=1&playlist=8jT9ygmMvMg&modestbranding=1&showinfo=0"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
            </div>
        </div>
      
    </div>
  )
}

export default HeroFlex
