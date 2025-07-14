import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const categories = [
  "All",
  "Construction",
  "Renovation",
  "Interior",
  "Architecture",
  "Building",
];

const AllProjects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const [isOpen, setIsOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const API_BASE = process.env.REACT_APP_API_BASE || "";
        const res = await axios.get(`${API_BASE}/api/admin/projects/public`);
        setProjects(res.data);
      } catch (err) {
        setProjects([]);
      }
    };
    fetchProjects();
  }, []);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter(
          (p) => p.scope === selectedCategory || p.category === selectedCategory
        );

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">All Projects</h2>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedCategory === cat
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-800 border border-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedProjects.map((project) => (
            <Link key={project._id} to={`/${project._id}`}>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition">
                <img
                  src={
                    project.images && project.images.length > 0
                      ? project.images[0]
                      : "https://via.placeholder.com/400x200?text=No+Image"
                  }
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500">{project.location}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    {project.duration ? `Duration: ${project.duration}` : null}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-10 space-x-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-8 h-8 rounded-full text-sm font-semibold ${
                  currentPage === i + 1
                    ? "bg-gray-800 text-white"
                    : "bg-white text-gray-700 border border-gray-300"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProjects;
