const Gallery = () => {
    return (
        <section className="px-4 py-4 lg:px-20 lg:py-8 flex flex-col gap-5 max-w-xl lg:max-w-none mx-auto">

            <h3 className='text-lg lg:text-3xl font-extrabold text-center'> Crete Activities in Frame</h3>

            <div className="grid grid-cols-2 lg:grid-cols-5 grid-rows-1 gap-4">


                <div className="grid grid-rows-1 grid-cols-3 lg:grid-cols-1 gap-4 col-span-2">

                    {/* tinggi : 2/3  lebar : full */}
                    <div className='rounded-lg col-span-2 lg:col-span-1'>
                        <img src="./hero-1.jpg" className='w-full h-full object-cover rounded-lg' alt="" />
                    </div>

                    {/* tinggi : 1/3  lebar : flex 2 item  */}
                    <div className="flex flex-col lg:flex-row gap-4">
                        <div className='rounded-lg'>
                            <img src="./hero-1.jpg" className='w-full h-full object-cover rounded-lg' alt="" />
                        </div>
                        <div className='rounded-lg'>
                            <img src="./hero-1.jpg" className='w-full h-full object-cover rounded-lg' alt="" />
                        </div>
                    </div>
                </div>

                <div className="hidden lg:grid grid-rows-3 gap-4">
                    <div className='rounded-lg h-52'>
                        <img src="./hero-1.jpg" className='w-full h-full object-cover rounded-lg' alt="" />
                    </div>
                    <div className='rounded-lg h-52'>
                        <img src="./hero-1.jpg" className='w-full h-full object-cover rounded-lg' alt="" />
                    </div>
                    <div className='rounded-lg h-52'>
                        <img src="./hero-1.jpg" className='w-full h-full object-cover rounded-lg' alt="" />
                    </div>
                </div>

                <div className="grid grid-rows-1 grid-cols-3 lg:grid-cols-1 gap-4 col-span-2">
                    
                    {/* tinggi : 1/3  lebar : flex 2 item  */}
                    <div className="flex flex-col lg:flex-row gap-4">
                        <div className='rounded-lg'>
                            <img src="./hero-1.jpg" className='w-full h-full object-cover rounded-lg' alt="" />
                        </div>
                        <div className='rounded-lg'>
                            <img src="./hero-1.jpg" className='w-full h-full object-cover rounded-lg' alt="" />
                        </div>
                    </div>

                    {/* tinggi : 2/3  lebar : full */}
                    <div className='rounded-lg col-span-2 lg:col-span-1'>
                        <img src="./hero-1.jpg" className='w-full h-full object-cover rounded-lg' alt="" />
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Gallery