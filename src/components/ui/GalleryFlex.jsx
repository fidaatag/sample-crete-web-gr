const Gallery = () => {
    return (
        <section className="px-4 py-4 lg:px-20 lg:py-8 flex flex-col gap-5 max-w-xl lg:max-w-none mx-auto">

            <h3 className='text-3xl font-extrabold text-center'> Crete Activities in Frame</h3>

            {/* 2 colom 3 baris */}
            <div className='flex gap-7'>

                {/* colom 1 */}
                <div className="flex flex-col gap-7">
                    {/* tinggi : 2/3  lebar : full */}
                    <div className='rounded-lg'>
                        <img src="./hero-1.jpg" className='w-full h-full object-cover rounded-lg' alt="" />
                    </div>

                    {/* tinggi : 1/3  lebar : flex 2 item  */}
                    <div className="flex gap-7">
                        <div className='rounded-lg'>
                            <img src="./hero-1.jpg" className='w-full h-full object-cover rounded-lg' alt="" />
                        </div>
                        <div className='rounded-lg'>
                            <img src="./hero-1.jpg" className='w-full h-full object-cover rounded-lg' alt="" />
                        </div>
                    </div>
                </div>

                {/* colom 2 */}

                {/* tinggi : bagi 3  lebar : full -- jadi ukuran 2 colum untuk 3 item, ukuran item mengikuti parentnya tidak boleh lebih tinggi dari parent */}
                <div className="hidden lg:flex flex-col gap-7">
                    <div className='rounded-lg'>
                        <img src="./hero-1.jpg" className='w-full h-full object-cover rounded-lg' alt="" />
                    </div>
                    <div className='rounded-lg'>
                        <img src="./hero-1.jpg" className='w-full h-full object-cover rounded-lg' alt="" />
                    </div>
                    <div className='rounded-lg'>
                        <img src="./hero-1.jpg" className='w-full h-full object-cover rounded-lg' alt="" />
                    </div>
                </div>

                {/* colom 3 */}

                <div className="flex flex-col gap-7">
                    {/* tinggi : 1/3  lebar : flex 2 item  */}
                    <div className="flex gap-7">
                        <div className='rounded-lg'>
                            <img src="./hero-1.jpg" className='w-full h-full object-cover rounded-lg' alt="" />
                        </div>
                        <div className='rounded-lg'>
                            <img src="./hero-1.jpg" className='w-full h-full object-cover rounded-lg' alt="" />
                        </div>
                    </div>
                     {/* tinggi : 2/3  lebar : full */}
                    <div className='rounded-lg'>
                        <img src="./hero-1.jpg" className='w-full h-full object-cover rounded-lg' alt="" />
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Gallery