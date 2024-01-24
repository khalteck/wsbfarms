import { Routes, Route } from "react-router-dom";
import "./index.css";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
import Aboutus from "./pages/Aboutus";

const Homepage = lazy(() => import("./pages/Homepage"));
const Gallery = lazy(() => import("./pages/Gallery"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<Aboutus />} />
      </Routes>
    </Suspense>
  );
}

export default App;
