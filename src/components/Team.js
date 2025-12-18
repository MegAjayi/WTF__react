const TeamMember = ({ name, position }) => {
  return (
    <div className="team-card">
      <div className="image-placeholder team-img"></div>
      <h3>{name}</h3>
      <p>{position}</p>
    </div>
  );
};

// Team Section Component
const Team = () => {
  const teamData = [
    { name: "Alex Brown", position: "CEO" },
    { name: "Emily White", position: "CTO" },
    { name: "Chris Green", position: "Head of Design" },
    { name: "Sam Taylor", position: "Marketing Lead" },
  ];

  return (
    <section className="team">
      <div className="container">
        <h2 className="section-title">Meet Our Team</h2>
        <p className="section-subtitle">
          Dedicated professionals committed to your success
        </p>
        <div className="team-grid">
          {teamData.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};
