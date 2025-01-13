import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ image, category, route, text }) => {
  return (
    <Link to={route}>
      <div className="relative group overflow-hidden rounded-lg shadow-md">
        <img
          src={image}
          alt={category}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-800/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-6 left-6">
            <div className="text-md text-gray-400 mb-2">{category}</div>
            <div className="text-sm text-gray-500">{text}</div>
            <h3 className="text-xl font-bold text-white">View Project</h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Projects = () => {
  return (
    <div className="bg-gray-100 text-gray-800 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        <div className="flex gap-4 mb-6">
          {["All Works", "Construction", "Architecture", "Building", "Renovation", "Interior"].map(category => (
            <button key={category} className="text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200">
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Riwm72KYhnS8V7XpnG3ZBAjIloQ6s09uiw&s"
            category="Construction"
            text="Custom house planning and efficient construction"
            route="/construction"
          />
          <ProjectCard
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsFb-OJNS6mZ7TRu1II6XN0RnX8E3_14w30w&s"
            category="Building"
            text="Comprehensive construction services."
            route="/building"
          />
          <ProjectCard
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWRcFeQN2AMuY1GUN--kuZ5aeKLHDxcE_IYQ&s"
            category="Interior"
            text="Stylish and functional interior designs."
            route="/interior"
          />
          <ProjectCard
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoAUlWSf2rdaE_DODRW42MJE28QDOm-yMoOw&s"
            category="Renovation"
            text="Transform and upgrade your existing spaces."
            route="/renovation"
          />
          <ProjectCard
            image="https://media.istockphoto.com/id/1063723682/photo/hand-sketching-a-designer-villa-with-pool.jpg?s=612x612&w=0&k=20&c=SlIacvwSEEsZ-2imWLDk6dC0glhaWEg-pOGFSK4YQuI="
            category="Architecture"
            text="Innovative designs and legal approvals"
            route="/architecture"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
