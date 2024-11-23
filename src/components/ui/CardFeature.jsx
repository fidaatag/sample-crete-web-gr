const CardFeature = ({ title, desc }) => {
    return (
      <div className="flex flex-col gap-5 mt-4 lg:mt-0">
        <div className="w-full">
          <img
            src="./hero-1.jpg"
            className="w-full h-full object-cover rounded-lg"
            alt=""
          />
        </div>
        <h3 className="font-extrabold text-xl">{title}</h3>
        <p>{desc}</p>
        <button className="border rounded-lg w-fit px-4 py-2">Learn More</button>
      </div>
    );
  };
  
  export default CardFeature;
  