import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./layout/Header";
import Home from "./pages/Home";
import Blog from "./pages/Blog";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs/:id" element={<Blog />} />
      </Routes>
    </Router>
  );
}
