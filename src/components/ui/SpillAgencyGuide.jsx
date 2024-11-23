import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CardAgencyGuide from "./CardAgency";

const SpillAgencyGuide = () => {
  const dataCatalog = [
    {  desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", category: "event" , title: "Cafe", bgImage: "./hero-1.jpg" },
    {  desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", category: "event" , title: "Sport", bgImage: "./hero-2.jpg" },
    {  desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", category: "event" , title: "Station", bgImage: "./hero-3.jpg" },
    {  desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", category: "event" , title: "Book", bgImage: "./hero-1.jpg" },
    {  desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", category: "event" , title: "Station", bgImage: "./hero-3.jpg" },
    {  desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", category: "event" , title: "Book", bgImage: "./hero-1.jpg" },
    {  desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", category: "event" , title: "Station", bgImage: "./hero-3.jpg" },
    {  desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", category: "event" , title: "Book", bgImage: "./hero-1.jpg" },
    {  desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", category: "event" , title: "Station", bgImage: "./hero-3.jpg" },
    {  desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", category: "event" , title: "Book", bgImage: "./hero-1.jpg" },
    {  desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", category: "event" , title: "Station", bgImage: "./hero-3.jpg" },
    {  desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", category: "event" , title: "Book", bgImage: "./hero-1.jpg" },
    {  desc: "", category: "" , title: "CARI LAINNYA DISINI", bgImage: "./hero-2.jpg" },
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
      setItemsPerPage(3); // Desktop: 4 item
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
    <section className="ps-4 py-4 lg:px-20 lg:py-8 flex flex-col gap-5 max-w-xl lg:max-w-none mx-auto">

      <div className="flex justify-between">
        <h3 className="font-semibold text-lg md:text-xl">
          Find Trusted Tour Agencies
        </h3>

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

      {/* Area yang bisa di-swipe */}
      <div
        className="hidden lg:flex flex-row gap-5"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {visibleData.map((catalog, index) => (
          <CardAgencyGuide key={index} title={catalog.title} bgImage={catalog.bgImage} category={catalog.category} showCategory={catalog.category.length === 0} desc={catalog.desc}/>
        ))}
      </div>

      <div className="flex lg:hidden flex-row gap-2 overflow-auto pr-4">
      {dataCatalog.map((catalog, index) => (
          <CardAgencyGuide key={index} title={catalog.title} bgImage={catalog.bgImage} category={catalog.category} showCategory={catalog.category.length === 0} desc={catalog.desc}/>
        ))}
      </div>
    </section>
  );
};

export default SpillAgencyGuide;
