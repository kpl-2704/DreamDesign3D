import React from "react";

const Services = () => {
  const services = [
    {
      title: "Interior Design",
      description:
        "Our interior design services aim to enhance your living space, making it both beautiful and functional. Whether you're looking to make a room more cozy or stylish, we work with you to create designs that match your taste, needs, and budget. From furniture selection to color schemes, we cover all aspects to give your home a fresh, new look.",
    },
    {
      title: "Exterior 3D Elevation",
      description:
        "We create stunning 3D visualizations of your building's exterior to help you better understand how it will look once it's built. Our exterior 3D elevations offer a realistic view of your project, showing off its design, structure, and layout. This is a great way to see your ideas come to life before construction even begins, ensuring you're happy with every detail.",
    },
    {
      title: "Structural Drawings",
      description:
        "Our structural drawings are detailed plans that lay out the framework and structure of your building. These drawings are essential for ensuring the building's safety, stability, and durability. We take care to follow all engineering standards to make sure your project is built to last, preventing any future issues and ensuring everything is up to code.",
    },
    {
      title: "Building Planning as per Vastu",
      description:
        "Our Vastu-based building planning service incorporates ancient Indian principles of architecture that help create a positive, harmonious living or working environment. By aligning your building's design with Vastu guidelines, we aim to bring balance, prosperity, and peace into your space, ensuring it has the right energy for its occupants.",
    },
    {
      title: "Landscaping",
      description:
        "Our landscaping services transform your outdoor spaces into beautiful and functional areas. Whether it's designing a serene garden, creating a functional backyard, or planning an elegant front yard, we offer tailored solutions to suit your preferences. From planting to paving, we ensure your outdoor area looks amazing and enhances the overall appeal of your property.",
    },
    {
      title: "3D Cut Plan",
      description:
        "A 3D cut plan gives you an in-depth view of your building's design, showing detailed interior layouts and structural components. It's like having a cross-sectional view of your space, which allows you to better understand how each part of the building fits together. With this plan, you can visualize the flow of space, plan furniture layouts, and ensure that everything works well in terms of functionality and design.",
    },
    {
      title: "Building Construction and Supervision",
      description:
        "We handle the entire building construction process, from groundbreaking to final touches. Our experienced team ensures that each step is completed on time, within budget, and with the highest standards of quality. We also provide supervision to make sure everything runs smoothly, ensuring your project stays on track and any potential issues are quickly resolved. Your satisfaction and the safety of the structure are our top priorities.",
    },
    {
      title: "Repair and Maintenance Work",
      description:
        "Our repair and maintenance services are designed to keep your property in excellent condition for years to come. Whether it's fixing a leaky roof, repairing damaged walls, or maintaining plumbing systems, we offer reliable, timely services to address any issues. We help prevent small problems from turning into big ones, ensuring that your property stays safe and well-maintained.",
    },
  ];

  return (
    <div className="bg-gray-100 py-14  ">
      <div className="text-center py-12 bg-gray-900">
        <h1 className="text-4xl font-bold text-white">Our Services</h1>
        <p className="mt-4 text-lg text-white">
          We provide a variety of services to meet all your building and design
          needs. Here’s a detailed overview of what we offer:
        </p>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="space-y-8 max-w-6xl mx-auto px-6 py-12">
          {services.map((service, index) => (
            <div key={index}>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
