import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { BestResources, Blog, Contribution, Home, Login, ProjectIdeas, Signup, Tutorials } from "./pages";
import Navbar from "./components/Navbar";


export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        {/* Home , Tutorials, Best Resources, Contribution,Blog, Project Ideas */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/contribution" element={<Contribution/>} />
        <Route path="/project-ideas" element={<ProjectIdeas/>} />
        <Route path="/best-resources" element={<BestResources/>} />
      </Routes>
    </BrowserRouter>
  );
}
