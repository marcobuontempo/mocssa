import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import "./reset.css";
import ArtworkModal from "./components/ArtworkModal/index.tsx";
import EmbedContainer from "./components/EmbedContainer/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="artwork/:artworkSourceURL" element={<ArtworkModal />} />
        </Route>
        <Route path="/embed/:artworkSourceURL" element={<EmbedContainer />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
