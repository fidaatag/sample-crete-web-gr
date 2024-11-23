import { useEffect, useState } from "react";
import CardCatalog from "./CardCatalog";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SpillTest = () => {
  const dataCatalog = [
    { title: "Cafe", bgImage: "src/assets/hero-1.jpg" },
    { title: "Sport", bgImage: "src/assets/hero-2.jpg" },
    { title: "Station", bgImage: "src/assets/hero-3.jpg" },
    { title: "Book", bgImage: "src/assets/hero-1.jpg" },
    { title: "CARI LAINNYA DISINI", bgImage: "src/assets/hero-2.jpg" },
  ];

  const [startIndex, setStartIndex] = useState(0); // Indeks awal
  const [itemsPerPage, setItemsPerPage] = useState(4); // Jumlah item per halaman
  const [touchStartX, setTouchStartX] = useState(0); // Posisi awal touch

  const updateItemsPerPage = () => {
    if (window.innerWidth < 768) {
      setItemsPerPage(2); // Mobile: 2 item
    } else {
      setItemsPerPage(4); // Desktop: 4 item
    }
  };

  useEffect(() => {
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

  const visibleData = dataCatalog.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => {
    if (startIndex + itemsPerPage < dataCatalog.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const swipeDistance = touchStartX - e.changedTouches[0].clientX;

    if (swipeDistance > 50) {
      handleNext();
    } else if (swipeDistance < -50) {
      handlePrev();
    }
  };

  return (
    <section className="px-4 py-8 lg:px-20 lg:py-12 flex flex-col gap-5">
      <h2 className="font-extrabold text-3xl md:text-4xl text-center">
        Explore Our Curated Catalogs
      </h2>
      <p className="text-center">
        Discover a selection of Creta's best offerings, carefully organized into
        categories that cover everything you need. From culinary delights to
        top accommodations, transportation options, and local events, start
        exploring the essentials that will make your visit unforgettable.
      </p>

      <div className="flex justify-between">
        <h3 className="font-semibold text-lg md:text-2xl">
          Browse Through Our Categories
        </h3>

        <div className="flex justify-center gap-2">
          <button
            className="border text-center text-sm flex justify-center items-center w-8 h-8 rounded-full disabled:opacity-50"
            onClick={handlePrev}
            disabled={startIndex === 0}
          >
            <ChevronLeft />
          </button>

          <button
            className="border text-center text-sm flex justify-center items-center w-8 h-8 rounded-full disabled:opacity-50"
            onClick={handleNext}
            disabled={startIndex + itemsPerPage >= dataCatalog.length}
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      <div
        className="flex gap-5 overflow-hidden touch-pan-x"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {visibleData.map((catalog, index) => (
          <CardCatalog
            key={index}
            title={catalog.title}
            bgImage={catalog.bgImage}
            className="flex-shrink-0"
          />
        ))}
      </div>
    </section>
  );
};

export default SpillTest;
