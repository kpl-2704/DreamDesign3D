import React, { useState } from "react";
import ProjectsAdmin from "./admin/ProjectsAdmin";
import SitesAdmin from "./admin/SitesAdmin";
import TestimonialsAdmin from "./admin/TestimonialsAdmin";
import BannersAdmin from "./admin/BannersAdmin";
import { useEffect } from "react";

let API_BASE = process.env.REACT_APP_API_BASE || "";

const sections = [
  { key: "projects", label: "Projects" },
  { key: "testimonials", label: "Testimonials" },
  { key: "banners", label: "Hero Banners" },
  { key: "stats", label: "Site Stats" },
  { key: "gallery", label: "Gallery Images" },
  { key: "blog", label: "Blog" },
  { key: "team", label: "Team" },
  { key: "sites", label: "Manage Sites" },
];

const galleryCategories = [
  "Construction",
  "Architecture",
  "Interior",
  "Renovation",
  "Building",
];

function GalleryAdmin() {
  const [images, setImages] = useState([]);
  const [form, setForm] = useState({
    src: "",
    category: galleryCategories[0],
    file: null,
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const fetchImages = () => {
    setLoading(true);
    fetch(`${API_BASE}/api/gallery`)
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load images");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setForm({ ...form, file: files[0], src: "" }); // clear src if file selected
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    let body, headers;
    if (form.file) {
      body = new FormData();
      body.append("file", form.file);
      body.append("category", form.category);
      headers = undefined; // browser sets multipart
    } else {
      body = JSON.stringify({ src: form.src, category: form.category });
      headers = { "Content-Type": "application/json" };
    }
    fetch(`${API_BASE}/api/gallery`, {
      method: "POST",
      headers,
      body,
    })
      .then((res) => res.json())
      .then(() => {
        setForm({ src: "", category: galleryCategories[0], file: null });
        fetchImages();
        setSaving(false);
      })
      .catch(() => {
        setError("Failed to add image");
        setSaving(false);
      });
  };

  const handleDelete = (id) => {
    if (!window.confirm("Delete this image?")) return;
    fetch(`${API_BASE}/api/gallery/${id}`, { method: "DELETE" })
      .then(() => fetchImages())
      .catch(() => setError("Failed to delete image"));
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Manage Gallery Images</h3>
      <form onSubmit={handleSubmit} className="max-w-lg space-y-4 mb-8">
        <div>
          <label className="block font-medium mb-1">Image URL</label>
          <input
            type="url"
            name="src"
            value={form.src}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            placeholder="https://..."
            disabled={!!form.file}
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Or Upload Image</label>
          <input
            type="file"
            name="file"
            accept="image/*"
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            disabled={!!form.src}
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Category</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          >
            {galleryCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          disabled={saving || (!form.file && !form.src)}
        >
          {saving ? "Adding..." : "Add Image"}
        </button>
        {error && <div className="text-red-600 mt-2">{error}</div>}
      </form>
      <div>
        <h4 className="font-semibold mb-2">Current Images</h4>
        {loading ? (
          <div>Loading...</div>
        ) : images?.length === 0 ? (
          <div>No images yet.</div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images?.map((img) => (
              <div key={img._id} className="relative group">
                <img
                  src={img.src}
                  alt={img.category}
                  className="w-full h-32 object-cover rounded shadow"
                />
                <div className="absolute top-1 right-1 bg-white bg-opacity-80 rounded p-1 text-xs">
                  {img.category}
                </div>
                <button
                  onClick={() => handleDelete(img._id)}
                  className="absolute bottom-1 right-1 bg-red-500 text-white rounded px-2 py-1 text-xs opacity-0 group-hover:opacity-100 transition"
                  title="Delete"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function StatsAdmin() {
  const [form, setForm] = useState({
    yearsOfExperience: "",
    projectsCompleted: "",
    activeProjects: "",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch(`${API_BASE}/api/stats`)
      .then((res) => res.json())
      .then((data) => {
        setForm({
          yearsOfExperience: data.yearsOfExperience || "",
          projectsCompleted: data.projectsCompleted || "",
          activeProjects: data.activeProjects || "",
        });
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load stats");
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaving(true);
    setSuccess(false);
    setError("");
    fetch(`${API_BASE}/api/stats`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => {
        setForm({
          yearsOfExperience: data.yearsOfExperience,
          projectsCompleted: data.projectsCompleted,
          activeProjects: data.activeProjects,
        });
        setSuccess(true);
        setSaving(false);
      })
      .catch(() => {
        setError("Failed to update stats");
        setSaving(false);
      });
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Edit Site Stats</h3>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-md space-y-4">
          <div>
            <label className="block font-medium mb-1">
              Years of Experience
            </label>
            <input
              type="text"
              name="yearsOfExperience"
              value={form.yearsOfExperience}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Projects Completed</label>
            <input
              type="text"
              name="projectsCompleted"
              value={form.projectsCompleted}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Active Projects</label>
            <input
              type="text"
              name="activeProjects"
              value={form.activeProjects}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            disabled={saving}
          >
            {saving ? "Saving..." : "Save Stats"}
          </button>
          {success && <div className="text-green-600 mt-2">Stats updated!</div>}
          {error && <div className="text-red-600 mt-2">{error}</div>}
        </form>
      )}
    </div>
  );
}

const AdminDashboard = () => {
  const [selected, setSelected] = useState("projects");

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/admin/login";
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      <aside className="w-64 bg-white shadow-md p-6 flex flex-col">
        <h2 className="text-xl font-bold mb-8">Admin Dashboard</h2>
        <nav className="flex-1">
          {sections.map((sec) => (
            <button
              key={sec.key}
              onClick={() => setSelected(sec.key)}
              className={`block w-full text-left px-4 py-2 mb-2 rounded ${
                selected === sec.key
                  ? "bg-black text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              {sec.label}
            </button>
          ))}
        </nav>
        <button
          onClick={handleLogout}
          className="mt-8 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </aside>
      <main className="flex-1 p-10">
        {selected === "projects" && <ProjectsAdmin />}
        {selected === "testimonials" && <TestimonialsAdmin />}
        {selected === "banners" && <BannersAdmin />}
        {selected === "stats" && <StatsAdmin />}
        {selected === "gallery" && <GalleryAdmin />}
        {selected === "blog" && (
          <div>
            <h3 className="text-2xl font-bold mb-4">Blog</h3>
            <p>Blog management UI coming soon.</p>
          </div>
        )}
        {selected === "team" && (
          <div>
            <h3 className="text-2xl font-bold mb-4">Team</h3>
            <p>Team management UI coming soon.</p>
          </div>
        )}
        {selected === "sites" && <SitesAdmin />}
      </main>
    </div>
  );
};

export default AdminDashboard;
