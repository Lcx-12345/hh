import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Browse from "@/pages/Browse";
import { MusicPlayer } from "@/components/MusicPlayer";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen pb-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/other" element={<div className="text-center text-xl">Other Page - Coming Soon</div>} />
        </Routes>
        <MusicPlayer />
      </div>
    </Router>
  );
}
