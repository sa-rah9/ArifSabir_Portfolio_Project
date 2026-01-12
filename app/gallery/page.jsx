"use client";

import { useState } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  Download,
  Grid3x3,
  LayoutGrid,
} from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [layout, setLayout] = useState("masonry"); // "masonry" or "grid"

  const images = [
    // Vertical images
    {
      src: "/assets/images/37.JPG",
      alt: "Ministry Image 1",
      orientation: "portrait",
    },
    {
      src: "/assets/images/38.JPG",
      alt: "Ministry Image 2",
      orientation: "portrait",
    },
    {
      src: "/assets/images/39.JPG",
      alt: "Ministry Image 3",
      orientation: "portrait",
    },
    {
      src: "/assets/images/40.JPG",
      alt: "Ministry Image 4",
      orientation: "portrait",
    },
    {
      src: "/assets/images/41.JPG",
      alt: "Ministry Image 5",
      orientation: "portrait",
    },
    {
      src: "/assets/images/42.JPG",
      alt: "Ministry Image 6",
      orientation: "portrait",
    },
    {
      src: "/assets/images/43.JPG",
      alt: "Ministry Image 7",
      orientation: "portrait",
    },
    {
      src: "/assets/images/44.JPG",
      alt: "Ministry Image 8",
      orientation: "portrait",
    },
    {
      src: "/assets/images/45.JPG",
      alt: "Ministry Image 9",
      orientation: "portrait",
    },
    {
      src: "/assets/images/46.JPG",
      alt: "Ministry Image 10",
      orientation: "portrait",
    },
    {
      src: "/assets/images/47.JPG",
      alt: "Ministry Image 11",
      orientation: "portrait",
    },
    {
      src: "/assets/images/48.JPG",
      alt: "Ministry Image 12",
      orientation: "portrait",
    },
    {
      src: "/assets/images/49.JPG",
      alt: "Ministry Image 13",
      orientation: "portrait",
    },
    {
      src: "/assets/images/50.JPG",
      alt: "Ministry Image 14",
      orientation: "portrait",
    },
    {
      src: "/assets/images/51.JPG",
      alt: "Ministry Image 15",
      orientation: "portrait",
    },
    {
      src: "/assets/images/52.JPG",
      alt: "Ministry Image 16",
      orientation: "portrait",
    },
    {
      src: "/assets/images/54.JPG",
      alt: "Ministry Image 17",
      orientation: "portrait",
    },
    {
      src: "/assets/images/56.JPG",
      alt: "Ministry Image 18",
      orientation: "portrait",
    },
    {
      src: "/assets/images/57.JPG",
      alt: "Ministry Image 19",
      orientation: "portrait",
    },
    {
      src: "/assets/images/58.JPG",
      alt: "Ministry Image 20",
      orientation: "portrait",
    },
    {
      src: "/assets/images/62.JPG",
      alt: "Ministry Image 21",
      orientation: "portrait",
    },
    {
      src: "/assets/images/63.JPG",
      alt: "Ministry Image 22",
      orientation: "portrait",
    },
    {
      src: "/assets/images/64.JPG",
      alt: "Ministry Image 23",
      orientation: "portrait",
    },
    {
      src: "/assets/images/65.JPG",
      alt: "Ministry Image 24",
      orientation: "portrait",
    },
    {
      src: "/assets/images/66.JPG",
      alt: "Ministry Image 25",
      orientation: "portrait",
    },
    {
      src: "/assets/images/69.JPG",
      alt: "Ministry Image 26",
      orientation: "portrait",
    },
    {
      src: "/assets/images/74.JPG",
      alt: "Ministry Image 27",
      orientation: "portrait",
    },
    {
      src: "/assets/images/75.JPG",
      alt: "Ministry Image 28",
      orientation: "portrait",
    },
    {
      src: "/assets/images/76.JPG",
      alt: "Ministry Image 29",
      orientation: "portrait",
    },
    {
      src: "/assets/images/77.JPG",
      alt: "Ministry Image 30",
      orientation: "portrait",
    },
    {
      src: "/assets/images/78.JPG",
      alt: "Ministry Image 31",
      orientation: "portrait",
    },
    {
      src: "/assets/images/79.JPG",
      alt: "Ministry Image 32",
      orientation: "portrait",
    },
    {
      src: "/assets/images/83.JPG",
      alt: "Ministry Image 33",
      orientation: "portrait",
    },
    {
      src: "/assets/images/84.JPG",
      alt: "Ministry Image 34",
      orientation: "portrait",
    },
    {
      src: "/assets/images/85.JPG",
      alt: "Ministry Image 35",
      orientation: "portrait",
    },
    {
      src: "/assets/images/86.JPG",
      alt: "Ministry Image 36",
      orientation: "portrait",
    },
    {
      src: "/assets/images/87.JPG",
      alt: "Ministry Image 37",
      orientation: "portrait",
    },
    {
      src: "/assets/images/89.JPG",
      alt: "Ministry Image 38",
      orientation: "portrait",
    },
    {
      src: "/assets/images/90.JPG",
      alt: "Ministry Image 39",
      orientation: "portrait",
    },
    {
      src: "/assets/images/image1.jpg",
      alt: "Ministry Image 40",
      orientation: "portrait",
    },
    {
      src: "/assets/images/image2.jpg",
      alt: "Ministry Image 41",
      orientation: "portrait",
    },
    {
      src: "/assets/images/image3.jpg",
      alt: "Ministry Image 42",
      orientation: "portrait",
    },
    {
      src: "/assets/images/image5.jpg",
      alt: "Ministry Image 43",
      orientation: "portrait",
    },
    {
      src: "/assets/images/image6.jpg",
      alt: "Ministry Image 44",
      orientation: "portrait",
    },
    {
      src: "/assets/images/image7.jpg",
      alt: "Ministry Image 45",
      orientation: "portrait",
    },
    {
      src: "/assets/images/image8.jpg",
      alt: "Ministry Image 46",
      orientation: "portrait",
    },
    {
      src: "/assets/images/image9.jpg",
      alt: "Ministry Image 47",
      orientation: "portrait",
    },
    {
      src: "/assets/images/image10.jpg",
      alt: "Ministry Image 48",
      orientation: "portrait",
    },
    {
      src: "/assets/images/image11.jpg",
      alt: "Ministry Image 49",
      orientation: "portrait",
    },
    {
      src: "/assets/images/image12.jpg",
      alt: "Ministry Image 50",
      orientation: "portrait",
    },
    {
      src: "/assets/images/image13.jpg",
      alt: "Ministry Image 51",
      orientation: "portrait",
    },
    {
      src: "/assets/images/image14.jpg",
      alt: "Ministry Image 52",
      orientation: "portrait",
    },
    {
      src: "/assets/images/image15.jpg",
      alt: "Ministry Image 53",
      orientation: "portrait",
    },
    {
      src: "/assets/images/image16.jpg",
      alt: "Ministry Image 54",
      orientation: "portrait",
    },
    {
      src: "/assets/images/image17.jpg",
      alt: "Ministry Image 55",
      orientation: "portrait",
    },
    {
      src: "/assets/images/image18.jpg",
      alt: "Ministry Image 56",
      orientation: "portrait",
    },
    {
      src: "/assets/images/image19.jpg",
      alt: "Ministry Image 57",
      orientation: "portrait",
    },
    {
      src: "/assets/images/image20.jpg",
      alt: "Ministry Image 58",
      orientation: "portrait",
    },
    {
      src: "/assets/images/image21.jpg",
      alt: "Ministry Image 59",
      orientation: "portrait",
    },
    // Horizontal images
    {
      src: "/assets/images/34.JPG",
      alt: "Ministry Image 60",
      orientation: "landscape",
    },
    {
      src: "/assets/images/35.JPG",
      alt: "Ministry Image 61",
      orientation: "landscape",
    },
    {
      src: "/assets/images/36.JPG",
      alt: "Ministry Image 62",
      orientation: "landscape",
    },
    {
      src: "/assets/images/59.JPG",
      alt: "Ministry Image 63",
      orientation: "landscape",
    },
    {
      src: "/assets/images/60.JPG",
      alt: "Ministry Image 64",
      orientation: "landscape",
    },
    {
      src: "/assets/images/67.JPG",
      alt: "Ministry Image 65",
      orientation: "landscape",
    },
    {
      src: "/assets/images/68.JPG",
      alt: "Ministry Image 66",
      orientation: "landscape",
    },
    {
      src: "/assets/images/70.JPG",
      alt: "Ministry Image 67",
      orientation: "landscape",
    },
    {
      src: "/assets/images/71.JPG",
      alt: "Ministry Image 68",
      orientation: "landscape",
    },
    {
      src: "/assets/images/72.JPG",
      alt: "Ministry Image 69",
      orientation: "landscape",
    },
    {
      src: "/assets/images/73.JPG",
      alt: "Ministry Image 70",
      orientation: "landscape",
    },
    {
      src: "/assets/images/80.JPG",
      alt: "Ministry Image 71",
      orientation: "landscape",
    },
    {
      src: "/assets/images/81.JPG",
      alt: "Ministry Image 72",
      orientation: "landscape",
    },
    {
      src: "/assets/images/82.JPG",
      alt: "Ministry Image 73",
      orientation: "landscape",
    },
    {
      src: "/assets/images/image33.JPG",
      alt: "Ministry Image 74",
      orientation: "landscape",
    },
    {
      src: "/assets/images/image22.jpg",
      alt: "Ministry Image 75",
      orientation: "landscape",
    },
    {
      src: "/assets/images/image23.jpg",
      alt: "Ministry Image 76",
      orientation: "landscape",
    },
    {
      src: "/assets/images/image24.jpg",
      alt: "Ministry Image 77",
      orientation: "landscape",
    },
    {
      src: "/assets/images/image25.jpg",
      alt: "Ministry Image 78",
      orientation: "landscape",
    },
    {
      src: "/assets/images/image26.jpg",
      alt: "Ministry Image 79",
      orientation: "landscape",
    },
    {
      src: "/assets/images/image27.jpg",
      alt: "Ministry Image 80",
      orientation: "landscape",
    },
    {
      src: "/assets/images/image28.jpg",
      alt: "Ministry Image 81",
      orientation: "landscape",
    },
    {
      src: "/assets/images/image29.jpg",
      alt: "Ministry Image 82",
      orientation: "landscape",
    },
    {
      src: "/assets/images/image30.jpg",
      alt: "Ministry Image 83",
      orientation: "landscape",
    },
    {
      src: "/assets/images/image32.jpg",
      alt: "Ministry Image 84",
      orientation: "landscape",
    },
  ];

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(images[nextIndex]);
  };

  const goToPrevious = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(images[prevIndex]);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 py-20 px-6 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full backdrop-blur-sm mb-6">
            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
            <span className="text-sm text-indigo-300 font-medium">
              Gallery
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Photo
            <span className="block mt-2 bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              Gallery
            </span>
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Capturing moments of worship, fellowship, and Gods grace in our
            journey.
          </p>

          {/* Layout Toggle */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setLayout("masonry")}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 ${
                layout === "masonry"
                  ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/50"
                  : "bg-slate-800/50 text-slate-400 hover:text-white border border-slate-700"
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              Masonry
            </button>
            <button
              onClick={() => setLayout("grid")}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 ${
                layout === "grid"
                  ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/50"
                  : "bg-slate-800/50 text-slate-400 hover:text-white border border-slate-700"
              }`}
            >
              <Grid3x3 className="w-4 h-4" />
              Grid
            </button>
          </div>
        </div>

        {/* Gallery Grid - Masonry Layout */}
        {layout === "masonry" && (
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {images.map((image, index) => (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                className="group relative break-inside-avoid cursor-pointer overflow-hidden rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-indigo-500/50 transition-all duration-300 hover:scale-105 animate-fadeIn"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center justify-between">
                      {/* <span className="text-sm font-medium">{image.alt}</span> */}
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Gallery Grid - Regular Grid Layout */}
        {layout === "grid" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-indigo-500/50 transition-all duration-300 hover:scale-105 animate-fadeIn"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{image.alt}</span>
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-slate-800/80 border border-slate-700 text-white hover:bg-slate-700 hover:rotate-90 transition-all duration-300 z-10"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Image Counter */}
          <div className="absolute top-6 left-6 px-4 py-2 bg-slate-800/80 border border-slate-700 rounded-full text-white text-sm font-medium backdrop-blur-sm">
            {currentIndex + 1} / {images.length}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-6 w-12 h-12 flex items-center justify-center rounded-full bg-slate-800/80 border border-slate-700 text-white hover:bg-slate-700 hover:scale-110 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-6 w-12 h-12 flex items-center justify-center rounded-full bg-slate-800/80 border border-slate-700 text-white hover:bg-slate-700 hover:scale-110 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Image */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-7xl max-h-[90vh] animate-scaleIn"
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />

            {/* Image Info */}
            {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 rounded-b-lg">
              <p className="text-white text-lg font-medium">
                {selectedImage.alt}
              </p>
            </div> */}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.4s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Gallery;
