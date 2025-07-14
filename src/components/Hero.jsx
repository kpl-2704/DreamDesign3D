import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Hero = () => {
  const [banners, setBanners] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const API_BASE = process.env.REACT_APP_API_BASE || "";
        const res = await axios.get(`${API_BASE}/api/admin/banners`);
        setBanners(res.data);
      } catch (err) {
        setBanners([]);
      }
    };
    fetchBanners();
  }, []);

  useEffect(() => {
    if (index >= banners.length) {
      setIndex(0);
    }
  }, [banners, index]);

  const nextSlide = () => {
    setIndex((prev) => {
      const next = (prev + 1) % banners.length;
      console.log("Next:", next, banners.length);
      return next;
    });
  };
  const prevSlide = () => {
    setIndex((prev) => {
      const prevIdx = (prev - 1 + banners.length) % banners.length;
      console.log("Prev:", prevIdx, banners.length);
      return prevIdx;
    });
  };

  if (!banners.length) return null;

  const currentBanner = banners[index];

  return (
    <section className="relative h-[90vh] overflow-hidden text-white">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${currentBanner.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          {currentBanner.heading}
        </h1>
        <p className="text-md sm:text-lg max-w-xl mb-6">
          {currentBanner.subtext}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
          <Link
            to="/all-projects"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded shadow transition"
          >
            View Projects
          </Link>
          <Link
            to="/services"
            className="bg-white hover:bg-gray-100 text-orange-600 font-semibold px-6 py-3 rounded shadow transition"
          >
            Explore Services
          </Link>
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="z-20 absolute top-1/2 left-4 transform -translate-y-1/2 text-white hover:text-orange-500"
        disabled={banners.length < 2}
      >
        Prev
      </button>
      <button
        onClick={nextSlide}
        className="z-20 absolute top-1/2 right-4 transform -translate-y-1/2 text-white hover:text-orange-500"
        disabled={banners.length < 2}
      >
        Next
      </button>
    </section>
  );
};

export default Hero;
