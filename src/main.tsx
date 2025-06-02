import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import "./reset.css";
import ArtworkModal from "./components/ArtworkModal/index.tsx";
import CustomCursor from "./components/CustomCursor/index.tsx";
import Gallery from "./components/Gallery/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CustomCursor />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Gallery />} />
          <Route path="artwork/:artworkSourceURL" element={<ArtworkModal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
