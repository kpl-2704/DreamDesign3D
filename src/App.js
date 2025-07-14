import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import WhatsAppWidget from "./components/WhatsAppWidget";
import ChatBot from "./components/ChatBot";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonial from "./components/Testimonial";
import QuoteRequest from "./components/QuoteRequest";
import ContactInfo from "./components/ContactInfo";
import Footer from "./components/Footer";
import "./index.css"; // Tailwind CSS file
import ConstructionServices from "./components/Services/ConstructionService";
import AboutUs from "./components/AboutUs";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import SitesGallery from "./pages/admin/SitesGallery";
import BuildingServices from "./components/Services/BuildingServices";
import InteriorDesign from "./components/Services/InteriorDesign";
import ArchitectureDesign from "./components/Services/ArchitectureDesign";
import RenovationServices from "./components/Services/RenovationServices";
import AllProjects from "./components/AllProjects";
import Gallery from "./components/Gallery";

// Define restricted routes
const restrictedRoutes = ["/restricted"];

// Route Wrapper for restricted routes
const RestrictedRoute = ({ path, element }) => {
  const isRestricted = restrictedRoutes.includes(path);

  return isRestricted ? <Navigate to="/access-denied" replace /> : element;
};

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("adminToken");
  return token ? children : <Navigate to="/admin/login" />;
};

function App() {
  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <Navbar />
      <WhatsAppWidget />
      <ChatBot />
      <Routes>
        {/* Public Routes */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Stats />
              <hr className="text-xl" />
              <Experience />
              <hr />
              <Services />
              <hr />
              <Projects />
              <hr />
              <Testimonial />
              <hr />
              <div className="flex justify-center m-auto p-8">
                <QuoteRequest />
              </div>
            </>
          }
        />
        <Route path="/services" element={<Services />} />
        <Route path="/contact_us" element={<ContactInfo />} />
        <Route path="/construction" element={<ConstructionServices />} />
        <Route path="/building" element={<BuildingServices />} />
        <Route path="/interior" element={<InteriorDesign />} />
        <Route path="/architect" element={<ArchitectureDesign />} />
        <Route path="/renovate" element={<RenovationServices />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/sites" element={<SitesGallery />} />
        <Route path="/all-projects" element={<AllProjects />} />
        <Route path="/gallery" element={<Gallery />} />

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

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* Catch-All Route */}
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
