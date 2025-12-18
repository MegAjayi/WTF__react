const PopularPickCard = ({ title, description }) => {
  return (
    <div className="pick-card">
      <div className="image-placeholder pick-img"></div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="btn-primary">Learn More</button>
    </div>
  );
};

// Popular Picks Section Component
const PopularPicks = () => {
  const picksData = [
    { title: "Advanced React Course", description: "Master React with advanced patterns and best practices" },
    { title: "Data Science Bootcamp", description: "Learn data analysis and machine learning fundamentals" },
    { title: "Mobile App Development", description: "Build native mobile apps for iOS and Android" }
  ];

  return (
    <section className="popular-picks">
      <div className="container">
        <h2 className="section-title">Most Popular Picks</h2>
        <div className="picks-grid">
          {picksData.map((pick, index) => (
            <PopularPickCard key={index} {...pick} />
          ))}
        </div>
      </div>
    </section>
  );
};