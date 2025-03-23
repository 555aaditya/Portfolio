import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Info from "./components/Info";

const pages = ["Home", "Projects", "Experience", "Skills", "Info"];

function App() {
  return (
    <Router>
      <div className="h-screen overflow-hidden bg-black font-['JetBrains_Mono']">
        <Layout>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/info" element={<Info />} />
            </Routes>
          </AnimatePresence>
        </Layout>
      </div>
    </Router>
  );
}

export default App;