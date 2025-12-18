const InstructorCard = ({ name, position }) => {
  return (
    <div className="instructor-card">
      <div className="image-placeholder instructor-img"></div>
      <h3>{name}</h3>
      <p>{position}</p>
      <div className="social-links">
        <a href="#">📘</a>
        <a href="#">🐦</a>
        <a href="#">💼</a>
      </div>
    </div>
  );
};

// Instructors Section Component
const Instructors = () => {
  const instructorsData = [
    { name: "John Doe", position: "Senior Developer" },
    { name: "Jane Smith", position: "UI/UX Designer" },
    { name: "Mike Johnson", position: "Marketing Expert" },
  ];

  return (
    <section className="instructors">
      <div className="container">
        <h2 className="section-title">Meet Our Best Instructors</h2>
        <div className="instructors-grid">
          {instructorsData.map((instructor, index) => (
            <InstructorCard key={index} {...instructor} />
          ))}
        </div>
      </div>
    </section>
  );
};
