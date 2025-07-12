import React from "react";

const CompletedProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Interior Project",
      description:
        "A modern house with exquisite interior and exterior design, completed in 2023.",
      images: [
        "https://plus.unsplash.com/premium_photo-1684508638760-72ad80c0055f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGludGVyaW9yfGVufDB8fDB8fHww", // Replace with actual image URLs
        "https://plus.unsplash.com/premium_photo-1671269941569-7841144ee4e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGludGVyaW9yfGVufDB8fDB8fHww",
        "https://plus.unsplash.com/premium_photo-1684508638760-72ad80c0055f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGludGVyaW9yfGVufDB8fDB8fHww",
      ],
    },
    {
      id: 2,
      title: "Residential Apartment Renovation",
      description:
        "Renovation of a 10-year-old apartment, transforming it into a contemporary living space.",
      images: [
        "https://imgs.search.brave.com/WpChbv9AgdZ_jn00pL4JY_ifh00uB1afChtHQYDSQc0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE0/NjI5NTY2NS9waG90/by9yZW5vdmF0aW9u/LW9mLXN0dWRpby1y/b29tLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1DQ2ZvM0lv/RElxWG1TX1poaWhZ/ZmRkXzVfTTRSaUJp/cHVGQkZVSlkyU3pB/PQ",
        "https://imgs.search.brave.com/apugsZXWzxxQc4rPZW2SmCN9ZqNzL2r8QrTTwAJBEHg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9kcmFw/ZXJhbmRrcmFtZXIu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIwLzA0L2luc2ln/aHRzLXdoYXQtZG9l/cy1hLXJlbm92YXRl/ZC1hcGFydG1lbnQt/bWVhbi1kcmFwZXJh/bmRrcmFtZXJfMjAy/MDA0MDhfaGVhZGVy/LWltYWdlLnBuZw",
        "https://imgs.search.brave.com/MdEiqJyrB2oQ_4y1CykekjMT3eObaDlQsY5t-bgwfvM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5hcmNoaXRlY3R1/cmFsZGlnZXN0LmNv/bS9waG90b3MvNjc0/NGQxMWVjOTM5MjY3/OGEzMjI0OWFlLzE6/MS9wYXNzL3VuZGVm/aW5lZA",
      ],
    },
    {
      id: 3,
      title: "Commercial Building Design",
      description:
        "Design and construction of a multi-story commercial building completed in record time.",
      images: [
        "https://imgs.search.brave.com/7XwK0XDw7haVy8VyGs_-HNAxTSDHxLzuuZaPAu1PkgU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgy/MTg4Nzk1L3Bob3Rv/L21vZGVybi1vZmZp/Y2UtYnVpbGRpbmct/ZXh0ZXJpb3IuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPUVk/WVpjT2YtZEVJTEV1/S0JkbUtRMTc1WUpC/NXliTmVteTZhUS0z/eFphUEU9",
        "https://imgs.search.brave.com/s95iSCa4MXzHD5GEJLjYI4SxjTUSaUWc8z7DWNprw6I/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzU4/NDcxYTIzMjk2ODdm/MTJjNjA5NTVhMy84/N2Y3YTc0OS1mZDcz/LTQyYTMtOGNlZC05/YTQ3MDQ2MmU1YjAv/Y29tbWVyY2lhbC1i/dWlsZGluZy1kZXNp/Z24tcHJvZmVzc2lv/bmFscw.jpeg",
      ],
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800 py-4">
      <div className="h-40 bg-black flex justify-center items-center mb-6">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Completed Projects
        </h1>
      </div>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative">
                {project?.images?.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${project.title} - ${index + 1}`}
                    className={`w-full h-48 object-cover ${
                      index === 0 ? "" : "hidden"
                    }`}
                  />
                ))}
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-black mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-700 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex gap-2">
                  {project?.images?.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        const images = document.querySelectorAll(
                          `#project-${project.id} img`
                        );
                        images.forEach((img, idx) => {
                          img.classList.toggle("hidden", idx !== index);
                        });
                      }}
                      className="w-10 h-10 border rounded-full overflow-hidden focus:ring-2 focus:ring-indigo-500"
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompletedProjects;
