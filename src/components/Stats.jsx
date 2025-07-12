import React, { useEffect, useState } from "react";
// Optional: import CountUp from 'react-countup'; // For animated numbers

const defaultStats = [
  { value: "5+", label: "Years of Experience" },
  { value: "2000+", label: "Projects Completed" },
  { value: "10+", label: "Active Projects" },
];

const Stats = () => {
  const [stats, setStats] = useState(defaultStats);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/stats")
      .then((res) => res.json())
      .then((data) => {
        setStats([
          { value: data.yearsOfExperience, label: "Years of Experience" },
          { value: data.projectsCompleted, label: "Projects Completed" },
          { value: data.activeProjects, label: "Active Projects" },
        ]);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {loading
            ? defaultStats.map(({ value, label }, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow p-6 transition hover:shadow-md opacity-50"
                >
                  <div className="text-4xl font-bold text-indigo-600 mb-2 animate-pulse">
                    {value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {label}
                  </div>
                </div>
              ))
            : stats.map(({ value, label }, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow p-6 transition hover:shadow-md"
                >
                  <div className="text-4xl font-bold text-indigo-600 mb-2">
                    {/* <CountUp end={parseInt(value)} duration={2} suffix="+" /> */}
                    {value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {label}
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
