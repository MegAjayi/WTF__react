const Courses = () => {
  const coursesData = [
    {
      badge: "Design",
      title: "Web Development Masterclass",
      description:
        "Learn modern web development from scratch with hands-on projects.",
      rating: 4.8,
      reviews: "2.5k",
      price: 49,
    },
    {
      badge: "Development",
      title: "Python Programming Complete",
      description:
        "Master Python programming with real-world applications and projects.",
      rating: 4.9,
      reviews: "3.2k",
      price: 59,
    },
    {
      badge: "Business",
      title: "Digital Marketing Strategy",
      description:
        "Learn effective digital marketing strategies for business growth.",
      rating: 4.7,
      reviews: "1.8k",
      price: 39,
    },
  ];

  return (
    <section className="courses">
      <div className="container">
        <h2 className="section-title">Our Most Popular Class</h2>
        <p className="section-subtitle">
          Let's join our best classes with our famous instructor and institutes
        </p>
        <div className="courses-grid">
          {coursesData.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};
