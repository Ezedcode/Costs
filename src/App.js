import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home.js";
import Company from "./components/pages/Company.js";
import Contact from "./components/pages/Contact.js";
import NewProject from "./components/pages/NewProject.js";
import Projects from "./components/pages/Projects.js";
import Project from "./components/pages/Project.js";

import Container from "./components/layout/Container.js";
import NavBar from "./components/layout/NavBar.js";
import Footer from "./components/layout/Footer.js";

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<Container customClass="min_height" />}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
          <Route path="/project/:id" element={<Project />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
