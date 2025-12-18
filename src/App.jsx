import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <style>{styles}</style>
      <div className="landing-page">
        <Navbar />
        <Hero />
        <Benefits />
        <Courses />
        <Stats />
        <Features />
        <CTA />
        <Instructors />
        <Testimonials />
        <Team />
        <PopularPicks />
        <Footer />
      </div>
    </>
  );
}

export default App;
