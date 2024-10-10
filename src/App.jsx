import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home"; // Import your Home component
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BlogPost from "./components/BlogPost";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/blog/:postId" element={<BlogPost />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
