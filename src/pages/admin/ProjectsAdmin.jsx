import React, { useEffect, useState } from "react";
import axios from "axios";

const initialForm = {
  title: "",
  description: "",
  status: "in-progress",
  location: "",
  scope: "",
  duration: "",
  client: "",
  images: [],
};

const ProjectsAdmin = () => {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const token = localStorage.getItem("adminToken");

  const fetchProjects = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.get("/api/admin/projects", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProjects(res.data);
    } catch (err) {
      setError("Failed to fetch projects");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProjects();
    // eslint-disable-next-line
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "images") {
      setForm((f) => ({ ...f, images: files }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        if (key === "images") {
          for (let i = 0; i < value.length; i++) {
            formData.append("images", value[i]);
          }
        } else {
          formData.append(key, value);
        }
      });
      if (editingId) {
        await axios.put(`/api/admin/projects/${editingId}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });
        setSuccess("Project updated!");
      } else {
        await axios.post("/api/admin/projects", formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });
        setSuccess("Project added!");
      }
      setForm(initialForm);
      setEditingId(null);
      fetchProjects();
    } catch (err) {
      setError("Failed to save project");
    }
    setLoading(false);
  };

  const handleEdit = (project) => {
    setEditingId(project._id);
    setForm({
      ...project,
      images: [], // Don't prefill images
    });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this project?")) return;
    setLoading(true);
    setError("");
    try {
      await axios.delete(`/api/admin/projects/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSuccess("Project deleted!");
      fetchProjects();
    } catch (err) {
      setError("Failed to delete project");
    }
    setLoading(false);
  };

  const handleCancel = () => {
    setEditingId(null);
    setForm(initialForm);
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Projects</h3>
      {error && <div className="mb-2 text-red-500">{error}</div>}
      {success && <div className="mb-2 text-green-600">{success}</div>}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded shadow mb-8 grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          className="border p-2 rounded"
          required
        />
        <input
          name="location"
          value={form.location}
          onChange={handleChange}
          placeholder="Location"
          className="border p-2 rounded"
        />
        <input
          name="scope"
          value={form.scope}
          onChange={handleChange}
          placeholder="Scope"
          className="border p-2 rounded"
        />
        <input
          name="duration"
          value={form.duration}
          onChange={handleChange}
          placeholder="Duration"
          className="border p-2 rounded"
        />
        <input
          name="client"
          value={form.client}
          onChange={handleChange}
          placeholder="Client"
          className="border p-2 rounded"
        />
        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="border p-2 rounded md:col-span-2"
        />
        <input
          name="images"
          type="file"
          multiple
          onChange={handleChange}
          className="md:col-span-2"
        />
        <div className="md:col-span-2 flex gap-2">
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded"
            disabled={loading}
          >
            {editingId ? "Update" : "Add"} Project
          </button>
          {editingId && (
            <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-300 px-4 py-2 rounded"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
      {loading && <div>Loading...</div>}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow">
          <thead>
            <tr>
              <th className="p-2 border">Title</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Location</th>
              <th className="p-2 border">Client</th>
              <th className="p-2 border">Images</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project._id}>
                <td className="p-2 border">{project.title}</td>
                <td className="p-2 border">{project.status}</td>
                <td className="p-2 border">{project.location}</td>
                <td className="p-2 border">{project.client}</td>
                <td className="p-2 border">
                  {project.images && project.images.length > 0 && (
                    <img
                      src={project.images[0]}
                      alt="project"
                      className="w-16 h-16 object-cover rounded"
                    />
                  )}
                </td>
                <td className="p-2 border">
                  <button
                    onClick={() => handleEdit(project)}
                    className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(project._id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectsAdmin;
