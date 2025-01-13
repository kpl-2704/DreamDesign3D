import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import framer-motion
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Experience from "./components/Experience";
import Services from "./Pages/Services";
import Projects from "./components/Projects";
import Testimonial from "./components/Testimonial";
import QuoteRequest from "./components/QuoteRequest";
import ContactInfo from "./components/ContactInfo";
import Footer from "./components/Footer";
import "./index.css"; // Tailwind CSS file
import ConstructionServices from "./components/Services/ConstructionService";

// Define restricted routes
const restrictedRoutes = ["/restricted"];

// Route Wrapper for restricted routes
const RestrictedRoute = ({ path, element }) => {
  const isRestricted = restrictedRoutes.includes(path);

  return isRestricted ? <Navigate to="/access-denied" replace /> : element;
};

function App() {
  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route
          path="/home"
          element={
            <>
              {/* Hero Section with a Left-to-Right Fade In */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Hero />
              </motion.div>

              {/* Stats Section with Vertical Animation */}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Stats />
              </motion.div>

              <hr className="text-xl" />

              {/* Experience Section with a Bounce Effect */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                }}
                viewport={{ once: true }}
              >
                <Experience />
              </motion.div>

              <hr />

              {/* Projects Section with a Smooth Fade and Slide Effect */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: true }}
              >
                <Projects />
              </motion.div>

              <hr />

              {/* Testimonial Section with Zoom In Effect */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                <Testimonial />
              </motion.div>

              <hr />

              {/* QuoteRequest Section with a Bounce Effect */}
              <div className="flex justify-center m-auto p-8">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    type: "spring",
                    stiffness: 120,
                    damping: 12,
                  }}
                  viewport={{ once: true }}
                >
                  <QuoteRequest />
                </motion.div>
              </div>
            </>
          }
        />
        <Route path="/services" element={<Services />} />
        <Route path="/contact_us" element={<ContactInfo />} />
        <Route path="/construction" element={<ConstructionServices />} />

        {/* Restricted Route Example */}
        <Route
          path="/restricted"
          element={
            <RestrictedRoute
              path="/restricted"
              element={<h1>Restricted Content</h1>}
            />
          }
        />

        {/* Access Denied Page */}
        {/* <Route path="/access-denied" element={<AccessDenied />} /> */}

        {/* Catch-All Route */}
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
