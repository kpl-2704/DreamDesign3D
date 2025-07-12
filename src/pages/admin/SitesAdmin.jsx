import React, { useState, useEffect } from "react";

const SitesAdmin = () => {
  const [sites, setSites] = useState([]);
  const [form, setForm] = useState({
    title: "",
    location: "",
    description: "",
    status: "in-progress",
    image: "",
  });

  useEffect(() => {
    const storedSites = JSON.parse(localStorage.getItem("sites")) || [];
    setSites(storedSites);
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(files[0]);
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedSites = [...sites, { ...form, id: Date.now().toString() }];
    setSites(updatedSites);
    localStorage.setItem("sites", JSON.stringify(updatedSites));
    setForm({
      title: "",
      location: "",
      description: "",
      status: "in-progress",
      image: "",
    });
  };

  const handleDelete = (id) => {
    const filtered = sites.filter((site) => site.id !== id);
    setSites(filtered);
    localStorage.setItem("sites", JSON.stringify(filtered));
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Manage Sites</h3>
      <form
        onSubmit={handleSubmit}
        className="grid gap-4 bg-white p-4 rounded shadow-md mb-8"
      >
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Site Title"
          required
          className="p-2 border rounded"
        />
        <input
          name="location"
          value={form.location}
          onChange={handleChange}
          placeholder="Location"
          required
          className="p-2 border rounded"
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          required
          className="p-2 border rounded"
        />
        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="p-2 border rounded"
        >
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
        >
          Add Site
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {sites.map((site) => (
          <div key={site.id} className="bg-white p-4 rounded shadow">
            <img
              src={site.image}
              alt={site.title}
              className="w-full h-40 object-cover rounded"
            />
            <h4 className="text-lg font-bold mt-2">{site.title}</h4>
            <p className="text-sm text-gray-600">{site.location}</p>
            <p className="text-sm">{site.description}</p>
            <span
              className={`text-xs inline-block mt-1 px-2 py-1 rounded-full ${
                site.status === "completed"
                  ? "bg-green-200 text-green-800"
                  : "bg-yellow-200 text-yellow-800"
              }`}
            >
              {site.status}
            </span>
            <button
              onClick={() => handleDelete(site.id)}
              className="mt-2 text-red-500 hover:underline text-sm"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SitesAdmin;
