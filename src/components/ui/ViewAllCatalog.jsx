import { Icon } from "@iconify/react/dist/iconify.js"
import CardCatalog from "./CardCatalog";
import { Link } from "react-router-dom";

const ViewAllCatalog = ({searchValue, category}) => {

    const dataCatalog = [
        { category: "event", title: "Cafe", bgImage: "src/assets/hero-1.jpg" },
        { category: "event", title: "Sport", bgImage: "src/assets/hero-2.jpg" },
        { category: "event", title: "Station", bgImage: "src/assets/hero-3.jpg" },
        { category: "event", title: "Book", bgImage: "src/assets/hero-1.jpg" },
        { category: "event", title: "Station", bgImage: "src/assets/hero-3.jpg" },
        { category: "event", title: "Book", bgImage: "src/assets/hero-1.jpg" },
        { category: "event", title: "Station", bgImage: "src/assets/hero-3.jpg" },
        { category: "event", title: "Book", bgImage: "src/assets/hero-1.jpg" },
        { category: "event", title: "Station", bgImage: "src/assets/hero-3.jpg" },
        { category: "event", title: "Book", bgImage: "src/assets/hero-1.jpg" },
        { category: "event", title: "Station", bgImage: "src/assets/hero-3.jpg" },
        { category: "event", title: "Book", bgImage: "src/assets/hero-1.jpg" },
        { category: "", title: "CARI LAINNYA DISINI", bgImage: "src/assets/hero-2.jpg" },
      ];

     // Filter data berdasarkan searchValue
     const filteredCatalog = dataCatalog.filter((catalog) =>
        catalog.title.toLowerCase().includes(searchValue.toLowerCase())
    );


  return (
    <div className="px-4 py-4 lg:px-20 lg:py-12 flex flex-col gap-5 max-w-xl lg:max-w-none mx-auto">

        <div className="flex justify-between text-sm lg:text-base">

            <div className="flex items-center gap-1">
                <Link to="/">
                    <Icon icon="lucide:home" width={35} className="cursor-pointer hover:bg-slate-100 p-2 rounded-md" />
                </Link>
                <p> / {category.length === 0 ? "Clubs" : category} / <span className="font-semibold">Search Results</span></p>
            </div>

            <p className="font-semibold flex gap-1"><span className="hidden lg:block">There were </span> {filteredCatalog.length} Results found</p>

        </div>

        {/* Jika tidak ada hasil pencarian, tampilkan pesan */}
      {filteredCatalog.length === 0 ? (

        <div className="flex flex-col gap-5 py-5 text-gray-500 items-center">
            <Icon width={50} className="opacity-30" icon="streamline:smiley-crying-1-solid" />
        <p className="text-center text-lg ">No results found for "{searchValue}"</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredCatalog.map((catalog, index) => (
            <CardCatalog
              key={index}
              title={catalog.title}
              bgImage={catalog.bgImage}
              category={catalog.category}
              showCategory={catalog.category.length === 0}
            />
          ))}
        </div>
      )}
      
    </div>
  )
}

export default ViewAllCatalog
