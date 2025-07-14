import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const categories = [
  "All Works",
  "Construction",
  "Architecture",
  "Building",
  "Renovation",
  "Interior",
];

const ProjectCard = ({ image, category, route, text }) => (
  <Link to={route}>
    <div className="relative overflow-hidden rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300 group border border-gray-200 bg-white">
      <img
        src={image}
        alt={category}
        className="w-full h-64 object-cover group-hover:brightness-75 transition duration-300"
      />
      <div className="absolute bottom-4 left-4 right-4 bg-white/90 rounded p-3 shadow-md backdrop-blur-sm">
        <p className="text-xs text-gray-500 uppercase font-semibold tracking-wide">
          {category}
        </p>
        <p className="text-sm text-gray-600 mb-1">{text}</p>
        <span className="text-sm text-indigo-600 font-semibold underline underline-offset-2">
          View Project →
        </span>
      </div>
    </div>
  </Link>
);

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All Works");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const API_BASE = process.env.REACT_APP_API_BASE || "";
        const res = await axios.get(`${API_BASE}/api/admin/projects/public`);
        setProjects(res.data);
        setLoading(false);
      } catch (err) {
        setProjects([]);
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const filteredProjects =
    activeCategory === "All Works"
      ? projects
      : projects.filter(
          (p) => p.scope === activeCategory || p.category === activeCategory
        );

  // Show first 6 projects as featured
  const featuredProjects = filteredProjects.slice(0, 6);

  return (
    <div className="bg-gray-50 text-gray-800 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold mb-4 text-center tracking-tight">
          Our Featured Projects
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Explore our latest accomplishments across architectural design, custom
          home builds, commercial renovations, and innovative interior concepts.
          We blend precision, function, and style in every project.
        </p>

        {/* Project Cards */}
        {loading ? (
          <div className="text-center py-8">Loading projects...</div>
        ) : featuredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <Link key={project._id} to={`/all-projects`}>
                <div className="relative overflow-hidden rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300 group border border-gray-200 bg-white">
                  <img
                    src={
                      project.images && project.images.length > 0
                        ? project.images[0]
                        : "https://via.placeholder.com/400x200?text=No+Image"
                    }
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:brightness-75 transition duration-300"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 rounded p-3 shadow-md backdrop-blur-sm">
                    <p className="text-xs text-gray-500 uppercase font-semibold tracking-wide">
                      {project.scope || project.category || "Project"}
                    </p>
                    <p className="text-sm text-gray-600 mb-1">
                      {project.title}
                    </p>
                    <span className="text-sm text-indigo-600 font-semibold underline underline-offset-2">
                      View Project →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            No projects available yet.
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-xl font-semibold mb-2">
            Interested in working with us?
          </h3>
          <p className="text-gray-600 mb-4">
            Discover how we can bring your vision to life.
          </p>
          <Link
            to="/contact_us"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition"
          >
            Request a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
