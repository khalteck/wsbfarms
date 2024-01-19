import { Routes, Route } from "react-router-dom";
import "./index.css";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";

const Homepage = lazy(() => import("./pages/Homepage"));
const Gallery = lazy(() => import("./pages/Gallery"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Suspense>
  );
}

export default App;
