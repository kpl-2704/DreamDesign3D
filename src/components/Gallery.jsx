import React, { useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const categories = [
  "All",
  "Construction",
  "Architecture",
  "Interior",
  "Renovation",
  "Building",
];

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const API_BASE = process.env.REACT_APP_API_BASE || "";
  useEffect(() => {
    fetch(`${API_BASE}/api/gallery`)
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-8">Project Gallery</h1>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium border ${
                activeCategory === cat
                  ? "bg-black text-white"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        {loading ? (
          <div>Loading images...</div>
        ) : (
          <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
            {filteredImages?.map((img, idx) => (
              <div
                key={img._id || idx}
                className="break-inside-avoid cursor-pointer hover:opacity-90 transition"
                onClick={() => openLightbox(idx)}
              >
                <img
                  src={img.src}
                  alt={img.category}
                  className="w-full rounded-md shadow-sm"
                />
                <p className="mt-2 text-sm text-gray-600">{img.category}</p>
              </div>
            ))}
          </div>
        )}

        {/* Lightbox */}
        {isOpen && filteredImages.length > 0 && (
          <Lightbox
            open={isOpen}
            close={() => setIsOpen(false)}
            index={lightboxIndex}
            slides={filteredImages.map((img) => ({ src: img.src }))}
          />
        )}
      </div>
    </div>
  );
};

export default Gallery;
