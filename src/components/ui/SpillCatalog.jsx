import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CardCatalog from "./CardCatalog";

const SpillCatalog = () => {
  const dataCatalog = [
    { category: "event", title: "Cafe", bgImage: "./hero-1.jpg" },
    { category: "event", title: "Sport", bgImage: "./hero-2.jpg" },
    { category: "event", title: "Station", bgImage: "./hero-3.jpg" },
    { category: "event", title: "Book", bgImage: "./hero-1.jpg" },
    { category: "event", title: "Station", bgImage: "./hero-3.jpg" },
    { category: "event", title: "Book", bgImage: "./hero-1.jpg" },
    { category: "event", title: "Station", bgImage: "./hero-3.jpg" },
    { category: "event", title: "Book", bgImage: "./hero-1.jpg" },
    { category: "event", title: "Station", bgImage: "./hero-3.jpg" },
    { category: "event", title: "Book", bgImage: "./hero-1.jpg" },
    { category: "event", title: "Station", bgImage: "./hero-3.jpg" },
    { category: "event", title: "Book", bgImage: "./hero-1.jpg" },
    { category: "", title: "CARI LAINNYA DISINI", bgImage: "./hero-2.jpg" },
  ];

  const [startIndex, setStartIndex] = useState(0); // Indeks awal
  const [itemsPerPage, setItemsPerPage] = useState(4); // Jumlah item per halaman
  const [touchStartX, setTouchStartX] = useState(0); // Posisi awal touch
  const [touchEndX, setTouchEndX] = useState(0); // Posisi akhir touch

  // Fungsi untuk mendeteksi ukuran layar
  const updateItemsPerPage = () => {
    if (window.innerWidth < 768) {
      setItemsPerPage(2); // Mobile: 2 item
    } else {
      setItemsPerPage(5); // Desktop: 4 item
    }
  };

  // Perbarui itemsPerPage saat ukuran layar berubah
  useEffect(() => {
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

  // Data untuk ditampilkan berdasarkan indeks
  const visibleData = dataCatalog.slice(startIndex, startIndex + itemsPerPage);

  // Logika untuk tombol next dan prev
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

  // Event handlers untuk swipe
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    setTouchEndX(e.changedTouches[0].clientX);
    const swipeDistance = touchStartX - e.changedTouches[0].clientX;

    if (swipeDistance > 50) {
      // Swipe kiri
      handleNext();
    } else if (swipeDistance < -50) {
      // Swipe kanan
      handlePrev();
    }
  };

  return (
    <section className="ps-4 py-4 lg:px-20 lg:py-12 flex flex-col gap-5 max-w-xl lg:max-w-none mx-auto">

      <div>
        <h3 className="font-semibold text-lg md:text-xl">
          It's easier to explore in Creta
        </h3>

        <div className="flex justify-between mt-2 lg:mt-5">
          <div className="flex gap-2">
            <button className="bg-cyan-950 text-white w-fit rounded-3xl px-2 py-1 text-xs lg:text-base font-semibold">Populer</button>
            <button className="bg-cyan-100 text-gray-500 w-fit rounded-3xl px-2 py-1 text-xs lg:text-base font-semibold">Latest</button>
            <button className="bg-cyan-100 text-gray-500 w-fit rounded-3xl px-2 py-1 text-xs lg:text-base font-semibold">Top-20</button>
            <button className="bg-cyan-100 text-gray-500 w-fit rounded-3xl px-2 py-1 text-xs lg:text-base font-semibold">Opening</button>
          </div>

          <div className="hidden lg:flex justify-center gap-2">
            {/* Tombol Prev */}
            <button
              className="border text-center text-sm flex justify-center items-center w-8 h-8 rounded-full disabled:opacity-50"
              onClick={handlePrev}
              disabled={startIndex === 0}
            >
              <ChevronLeft />
            </button>

            {/* Tombol Next */}
            <button
              className="border text-center text-sm flex justify-center items-center w-8 h-8 rounded-full disabled:opacity-50"
              onClick={handleNext}
              disabled={startIndex + itemsPerPage >= dataCatalog.length}
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>

      {/* Area yang bisa di-swipe */}
      <div
        className="hidden lg:flex flex-row gap-5"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {visibleData.map((catalog, index) => (
          <CardCatalog key={index} title={catalog.title} bgImage={catalog.bgImage} category={catalog.category} showCategory={catalog.category.length === 0} />
        ))}
      </div>

      <div className="flex lg:hidden flex-row gap-2 overflow-auto pr-4">
        {dataCatalog.map((catalog, index) => (
          <CardCatalog key={index} title={catalog.title} bgImage={catalog.bgImage} category={catalog.category} showCategory={catalog.category.length === 0} />
        ))}
      </div>
    </section>
  );
};

export default SpillCatalog;
