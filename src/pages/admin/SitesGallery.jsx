import React, { useEffect, useState } from "react";

const SitesGallery = () => {
  const [sites, setSites] = useState([]);
  const [tab, setTab] = useState("in-progress");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("sites")) || [];
    setSites(data);
  }, []);

  const filtered = sites.filter((site) => site.status === tab);

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Our Sites Portfolio
      </h1>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-8">
        {["in-progress", "completed"].map((status) => (
          <button
            key={status}
            onClick={() => setTab(status)}
            className={`px-5 py-2 text-sm font-medium rounded-full border transition 
              ${
                tab === status
                  ? "bg-orange-500 text-white border-orange-500 shadow-md"
                  : "bg-white text-gray-600 border-gray-300 hover:bg-orange-50"
              }`}
          >
            {status === "in-progress" ? "In Progress" : "Completed"}
          </button>
        ))}
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.length ? (
          filtered.map((site) => (
            <div
              key={site.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <img
                src={site.image}
                alt={site.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {site.title}
                </h3>
                <p className="text-sm text-gray-500 italic mb-2">
                  {site.location}
                </p>
                <p className="text-sm text-gray-700 leading-snug">
                  {site.description}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 text-lg">
            No sites to display in this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default SitesGallery;
