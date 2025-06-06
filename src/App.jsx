import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navbar from "@/assets/components/Navbar";
import Footer from "@/assets/components/Footer";
import Loading from "@/assets/components/Loading";
import ScrollToTop from "./assets/hooks/ScrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = lazy(() => import("@/assets/pages/Home"));
const Skills = lazy(() => import("@/assets/pages/Skills"));
const Projects = lazy(() => import("@/assets/pages/Projects"));
const Experience = lazy(() => import("@/assets/pages/Experience"));
const Contact = lazy(() => import("@/assets/pages/Contact"));
const NotFound = lazy(() => import("@/assets/pages/NotFound"));

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ToastContainer />
      <Router>
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
