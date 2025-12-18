const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

// Features Section Component
const Features = () => {
  const featuresData = [
    {
      icon: "🎓",
      title: "Expert Teachers",
      description: "Learn from industry professionals",
    },
    {
      icon: "📱",
      title: "Online Classes",
      description: "Study anywhere, anytime",
    },
    {
      icon: "🏆",
      title: "Certification",
      description: "Get recognized certificates",
    },
    {
      icon: "💼",
      title: "Career Support",
      description: "Job placement assistance",
    },
  ];

  return (
    <section className="features">
      <div className="container">
        <h2 className="section-title">About Us Educational Features</h2>
        <div className="features-grid">
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
