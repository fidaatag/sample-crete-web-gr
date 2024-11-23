import CardFeature from "./CardFeature"

const Feature = () => {
  return (
    <section className="px-4 py-8 lg:px-20 lg:py-12 flex flex-col gap-5">
      <h2 className="font-extrabold text-3xl md:text-4xl text-center">Explore All That Creta Has to Offer</h2>
      <p className="text-center">Creta is a cnameity filled with unique experiences waiting for you to discover. Whether you`re looking for local recommendations, planning your next adventure, or joining a vibrant community, we`ve got everything you need. Here`s what you can find on our platform:</p>
      <div className="block lg:flex gap-10">
        <CardFeature 
            title="Discover Our Extensive Catalogs" 
            desc="Discover a wide range of local listings, including culinary spots, accommodations, schools, transportation, and events. Find everything you need to make the most of your time in Creta."
        />
        <CardFeature 
            title="Independent Travel Guides" 
            desc="Get insider tips and detailed guides on how to experience Creta like a local. From scenic hikes to secret sunset spots, we provide practical information to help you plan your perfect trip."
        />
        <CardFeature 
            title="Join the Community" 
            desc="Be part of Cret`s vibrant community! Share experiences, connect with locals, and get recommendations from other travelers through our platform that inspiration for your next adventure."
        />
      </div>
    </section>
  )
}

export default Feature
