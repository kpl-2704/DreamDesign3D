import React, { useEffect, useState } from "react";
import axios from "axios";

const initialForm = {
  clientName: "",
  quote: "",
  project: "",
  rating: 5,
  videoUrl: "",
};

const TestimonialsAdmin = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const token = localStorage.getItem("adminToken");

  const fetchTestimonials = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.get("/api/admin/testimonials", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTestimonials(res.data);
    } catch (err) {
      setError("Failed to fetch testimonials");
    }
    setLoading(false);
  };

  const fetchProjects = async () => {
    try {
      const res = await axios.get("/api/admin/projects", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProjects(res.data);
    } catch {}
  };

  useEffect(() => {
    fetchTestimonials();
    fetchProjects();
    // eslint-disable-next-line
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      // Prepare data to send
      const data = { ...form };
      if (!data.project) {
        delete data.project; // Remove project if empty
      }
      if (editingId) {
        await axios.put(`/api/admin/testimonials/${editingId}`, data, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setSuccess("Testimonial updated!");
      } else {
        await axios.post("/api/admin/testimonials", data, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setSuccess("Testimonial added!");
      }
      setForm(initialForm);
      setEditingId(null);
      fetchTestimonials();
    } catch (err) {
      setError("Failed to save testimonial");
    }
    setLoading(false);
  };

  const handleEdit = (testimonial) => {
    setEditingId(testimonial._id);
    setForm({
      clientName: testimonial.clientName || "",
      quote: testimonial.quote || "",
      project: testimonial.project?._id || "",
      rating: testimonial.rating || 5,
      videoUrl: testimonial.videoUrl || "",
    });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this testimonial?")) return;
    setLoading(true);
    setError("");
    try {
      await axios.delete(`/api/admin/testimonials/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSuccess("Testimonial deleted!");
      fetchTestimonials();
    } catch (err) {
      setError("Failed to delete testimonial");
    }
    setLoading(false);
  };

  const handleCancel = () => {
    setEditingId(null);
    setForm(initialForm);
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Testimonials</h3>
      {error && <div className="mb-2 text-red-500">{error}</div>}
      {success && <div className="mb-2 text-green-600">{success}</div>}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded shadow mb-8 grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <input
          name="clientName"
          value={form.clientName}
          onChange={handleChange}
          placeholder="Client Name"
          className="border p-2 rounded"
          required
        />
        <input
          name="rating"
          type="number"
          min="1"
          max="5"
          value={form.rating}
          onChange={handleChange}
          placeholder="Rating (1-5)"
          className="border p-2 rounded"
        />
        <input
          name="videoUrl"
          value={form.videoUrl}
          onChange={handleChange}
          placeholder="Video URL (optional)"
          className="border p-2 rounded"
        />
        <select
          name="project"
          value={form.project}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="">No Project</option>
          {projects.map((p) => (
            <option key={p._id} value={p._id}>
              {p.title}
            </option>
          ))}
        </select>
        <textarea
          name="quote"
          value={form.quote}
          onChange={handleChange}
          placeholder="Testimonial Quote"
          className="border p-2 rounded md:col-span-2"
          required
        />
        <div className="md:col-span-2 flex gap-2">
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded"
            disabled={loading}
          >
            {editingId ? "Update" : "Add"} Testimonial
          </button>
          {editingId && (
            <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-300 text-black px-4 py-2 rounded"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
      <div className="bg-white rounded shadow p-4">
        <h4 className="text-lg font-semibold mb-2">All Testimonials</h4>
        {loading ? (
          <div>Loading...</div>
        ) : testimonials.length === 0 ? (
          <div>No testimonials found.</div>
        ) : (
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="py-2">Client</th>
                <th className="py-2">Quote</th>
                <th className="py-2">Rating</th>
                <th className="py-2">Project</th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {testimonials.map((t) => (
                <tr key={t._id} className="border-t">
                  <td className="py-2">{t.clientName}</td>
                  <td className="py-2 max-w-xs truncate">{t.quote}</td>
                  <td className="py-2">{t.rating || "-"}</td>
                  <td className="py-2">{t.project?.title || "-"}</td>
                  <td className="py-2 flex gap-2">
                    <button
                      onClick={() => handleEdit(t)}
                      className="bg-blue-500 text-white px-2 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(t._id)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default TestimonialsAdmin;
