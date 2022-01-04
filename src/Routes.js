import { Routes, Route } from "react-router-dom";
import React from "react";

import Contact from "./Contact";
export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
