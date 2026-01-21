import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Blog, Contribution, Home, Login, Signup, Tutorials } from "./pages";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home , Tutorials, Best Resources, Contribution,Blog, Project Ideas */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/contribution" element={<Contribution />} />
      </Routes>
    </BrowserRouter>
  );
}
