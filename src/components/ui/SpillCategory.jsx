import { useEffect, useState } from "react";
import { CardCategory, CardCategoryBullet } from "./CardCategory";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SpillCategory = () => {
  const dataCatalog = [
    { title: "Cafe", bgImage: "./hero-1.jpg" },
    { title: "Sport", bgImage: "./hero-2.jpg" },
    { title: "Station", bgImage: "./hero-3.jpg" },
    { title: "Book", bgImage: "./hero-1.jpg" },
    { title: "Cafe", bgImage: "./hero-1.jpg" },
    { title: "Sport", bgImage: "./hero-2.jpg" },
    { title: "Station", bgImage: "./hero-3.jpg" },
    { title: "Book", bgImage: "./hero-1.jpg" },
    { title: "Cafe", bgImage: "./hero-1.jpg" },
    { title: "Sport", bgImage: "./hero-2.jpg" },
    { title: "Station", bgImage: "./hero-3.jpg" },
    { title: "Book", bgImage: "./hero-1.jpg" },
    { title: "Cafe", bgImage: "./hero-1.jpg" },
    { title: "Sport", bgImage: "./hero-2.jpg" },
    { title: "Station", bgImage: "./hero-3.jpg" },
    { title: "Book", bgImage: "./hero-1.jpg" },
  ];

  const [startIndex, setStartIndex] = useState(0); // For desktop
  const [itemsPerPage, setItemsPerPage] = useState(4); // Items visible per page
  const [touchStartX, setTouchStartX] = useState(0); // Touch start position
  const [currentPage, setCurrentPage] = useState(0); // For mobile pagination
  const itemsPerPageBullet = 12; // Mobile: Items per page
  const totalPages = Math.ceil(dataCatalog.length / itemsPerPageBullet);

  // Update items per page based on screen width
  const updateItemsPerPage = () => {
    if (window.innerWidth < 768) {
      setItemsPerPage(2); // Mobile: 2 items
    } else {
      setItemsPerPage(4); // Desktop: 4 items
    }
  };

  useEffect(() => {
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  // Desktop: Visible data
  const visibleData = dataCatalog.slice(startIndex, startIndex + itemsPerPage);

  // Handle navigation for desktop
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

  // Swipe logic for mobile
  const handleSwipe = (e, action) => {
    if (action === "start") {
      setTouchStartX(e.touches[0].clientX);
    } else if (action === "end") {
      const swipeDistance = touchStartX - e.changedTouches[0].clientX;
      if (swipeDistance > 50) goToNextPage(); // Swipe left
      if (swipeDistance < -50) goToPreviousPage(); // Swipe right
    }
  };

  // Mobile: Pagination handlers
  const goToNextPage = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  // Mobile: Visible data
  const startIndexBullet = currentPage * itemsPerPageBullet;
  const currentData = dataCatalog.slice(startIndexBullet, startIndexBullet + itemsPerPageBullet);
  console.log(currentData)

  return (
    <section className="px-4 py-4 lg:px-20 lg:pt-12 flex flex-col gap-2 lg:gap-5 max-w-xl lg:max-w-none mx-auto">
      <div className="hidden lg:block">
        <h2 className="font-extrabold text-3xl md:text-3xl text-center">
          Explore Our Curated Catalogs
        </h2>
        <p className="text-center text-base">
          Discover a selection of Creta’s best offerings, carefully organized into categories that cover everything you need.
        </p>
      </div>

      <div className="flex justify-between">
        <h3 className="font-semibold text-lg md:text-xl">Browse Through Our Categories</h3>
        <div className="hidden lg:flex justify-center gap-2">
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

      {/* Desktop: Swipeable area */}
      <div
        className="hidden lg:flex flex-row gap-5"
        onTouchStart={(e) => handleSwipe(e, "start")}
        onTouchEnd={(e) => handleSwipe(e, "end")}
      >
        {visibleData.map((catalog, index) => (
          <CardCategory key={index} title={catalog.title} bgImage={catalog.bgImage} />
        ))}
      </div>

      {/* Mobile: Swipeable grid */}
      <div
        className="grid grid-cols-6 gap-2 lg:hidden"
        onTouchStart={(e) => handleSwipe(e, "start")}
        onTouchEnd={(e) => handleSwipe(e, "end")}
      >
        {currentData.map((catalog, index) => (
          <CardCategoryBullet key={index} title={catalog.title} bgImage={catalog.bgImage} />
        ))}
      </div>

      {/* Page Indicators */}
      <div className="flex justify-center mt-4 lg:hidden">
        {Array.from({ length: totalPages }).map((_, index) => (
          <span
            key={index}
            className={`mx-1 w-2 h-2 rounded-full ${
              currentPage === index ? "bg-gray-900" : "bg-gray-300"
            }`}
            onClick={() => setCurrentPage(index)}
            style={{ cursor: "pointer" }}
          />
        ))}
      </div>
    </section>
  );
};

export default SpillCategory;
