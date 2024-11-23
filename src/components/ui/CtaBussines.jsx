import { Icon } from "@iconify/react/dist/iconify.js"

const CtaBussines = () => {

    const dataCtaBussinesCard = [
        { title: "Targeted Exposure to Tourists", desc: "Reach 4M+ visitors yearly by showcasing your business to active travelers.", icon: "mingcute:target-fill" },
        { title: "Enhanced Local Engagement", desc: "Connect with Crete locals exploring new services and build loyal customer relationships.", icon: "ri:service-fill" },
        { title: "Exclusive Business Features", desc: "Access premium tools: business pages, banners, and curated city guide features.", icon: "pajamas:issue-type-feature" },
    ]

    return (
        <>
        <div className="px-4 py-4 lg:px-20 lg:py-20 flex flex-col gap-5 max-w-xl lg:max-w-none mx-auto">

            <h3 className="text-2xl lg:text-5xl font-extrabold text-center">Own a Business in Crete? Scale Up Here!</h3>
            <p className="text-base text-center">Crete’s growing market offers immense potential for businesses to thrive. By advertising on our platform, you can leverage its tools to promote your business, connect with the right audience, and drive meaningful engagement.</p>

            <div className="flex flex-col lg:flex-row gap-4">
                {dataCtaBussinesCard.map((data, index) => (
                    <div key={index} className="border px-1 py-5 lg:px-8 rounded-lg flex lg:flex-col items-center gap-1">
                        <Icon className="w-32 lg:w-12 h-12" icon={data.icon} />
                        <div className="flex flex-col text-left lg:text-center">
                            <p className="text-lg font-semibold">{data.title}</p>
                            <p className="text-base">{data.desc}</p>
                        </div>
                        
                    </div>
                ))}
            </div>

        </div>

        <div className="px-4 py-4 lg:px-20 lg:py-20 flex flex-col lg:flex-row justify-between items-center gap-5 max-w-xl lg:max-w-none mx-auto bg-cyan-950">

            <h3 className="text-2xl lg:text-3xl font-extrabold text-white max-w-lg text-center lg:text-left">Excited to make your business shine in Crete’s thriving market?</h3>

            <div className="flex gap-3">
                <button className="border rounded-lg px-4 py-2 text-white font-semibold text-sm">Learn More</button>
                <button className="bg-white rounded-lg px-4 py-2 text-cyan-950 font-semibold text-sm flex items-center gap-1">Learn More <Icon icon="uil:arrow-right" /></button>
            </div>

        </div>

        </>
    )
}

export default CtaBussines
