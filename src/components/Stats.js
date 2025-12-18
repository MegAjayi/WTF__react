const Stats = () => {
  const statsData = [
    { number: "12,000+", label: "Students Enrolled" },
    { number: "250+", label: "Expert Instructors" },
    { number: "500+", label: "Premium Courses" },
  ];

  return (
    <section className="stats">
      <div className="container">
        <h2>
          We Have Finished A Lot Of
          <br />
          Amazing Projects
        </h2>
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
