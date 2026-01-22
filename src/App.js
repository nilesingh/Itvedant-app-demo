import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import DeleteStudent from "./pages/DeleteStudent";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import RegisterStudent from "./pages/RegisterStudent";
import UpdateStudent from "./pages/UpdateStudent";
import ViewStudent from "./pages/ViewStudent";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blogs" element={<Blog />} />

        <Route path="/student/register" element={<RegisterStudent />} />
        <Route path="/student/update" element={<UpdateStudent />} />
        <Route path="/student/delete" element={<DeleteStudent />} />
        <Route path="/student/view" element={<ViewStudent />} />

        {/* Dynamic Routing based on ID */}
        {/* <Route path="/student/view/:id" element={<StudentDetails />} /> */}

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      
      </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
