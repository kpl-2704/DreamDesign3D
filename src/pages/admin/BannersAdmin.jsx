import React, { useEffect, useState } from "react";
import axios from "axios";

const initialForm = {
  heading: "",
  subtext: "",
  image: null,
};

const BannersAdmin = () => {
  const [banners, setBanners] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const token = localStorage.getItem("adminToken");

  const fetchBanners = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.get("/api/admin/banners");
      setBanners(res.data);
    } catch (err) {
      setError("Failed to fetch banners");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setForm((f) => ({ ...f, image: files[0] }));
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
      formData.append("heading", form.heading);
      formData.append("subtext", form.subtext);
      if (form.image) formData.append("image", form.image);
      if (editingId) {
        await axios.put(`/api/admin/banners/${editingId}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });
        setSuccess("Banner updated!");
      } else {
        await axios.post("/api/admin/banners", formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });
        setSuccess("Banner added!");
      }
      setForm(initialForm);
      setEditingId(null);
      fetchBanners();
    } catch (err) {
      setError("Failed to save banner");
    }
    setLoading(false);
  };

  const handleEdit = (banner) => {
    setEditingId(banner._id);
    setForm({
      heading: banner.heading || "",
      subtext: banner.subtext || "",
      image: null,
    });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this banner?")) return;
    setLoading(true);
    setError("");
    try {
      await axios.delete(`/api/admin/banners/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSuccess("Banner deleted!");
      fetchBanners();
    } catch (err) {
      setError("Failed to delete banner");
    }
    setLoading(false);
  };

  const handleCancel = () => {
    setEditingId(null);
    setForm(initialForm);
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Hero Banners</h3>
      {error && <div className="mb-2 text-red-500">{error}</div>}
      {success && <div className="mb-2 text-green-600">{success}</div>}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded shadow mb-8 grid grid-cols-1 md:grid-cols-2 gap-4"
        encType="multipart/form-data"
      >
        <input
          name="heading"
          value={form.heading}
          onChange={handleChange}
          placeholder="Heading"
          className="border p-2 rounded"
          required
        />
        <input
          name="subtext"
          value={form.subtext}
          onChange={handleChange}
          placeholder="Subtext"
          className="border p-2 rounded"
          required
        />
        <input
          name="image"
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="md:col-span-2"
          required={!editingId}
        />
        <div className="md:col-span-2 flex gap-2">
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded"
            disabled={loading}
          >
            {editingId ? "Update" : "Add"} Banner
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
        <h4 className="text-lg font-semibold mb-2">All Banners</h4>
        {loading ? (
          <div>Loading...</div>
        ) : banners.length === 0 ? (
          <div>No banners found.</div>
        ) : (
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="py-2">Image</th>
                <th className="py-2">Heading</th>
                <th className="py-2">Subtext</th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {banners.map((b) => (
                <tr key={b._id} className="border-t">
                  <td className="py-2">
                    {b.image && (
                      <img
                        src={b.image}
                        alt="banner"
                        className="w-24 h-12 object-cover rounded"
                      />
                    )}
                  </td>
                  <td className="py-2">{b.heading}</td>
                  <td className="py-2 max-w-xs truncate">{b.subtext}</td>
                  <td className="py-2 flex gap-2">
                    <button
                      onClick={() => handleEdit(b)}
                      className="bg-blue-500 text-white px-2 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(b._id)}
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

export default BannersAdmin;
