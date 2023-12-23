import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./layout/Header";
import HomePage from "./pages/HomePage";
import SingleBlogPage from "./pages/SingleBlogPage";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs/:id" element={<SingleBlogPage />} />
      </Routes>
    </Router>
  );
}
