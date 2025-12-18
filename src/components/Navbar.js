const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <div className="logo">EduCourse</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="nav-buttons">
            <button className="btn-secondary">Login</button>
            <button className="btn-primary">Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
};