import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Investigation from "./pages/Investigation";
import Analytics from "./pages/Analytics";
import Response from "./pages/Response";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/investigation" element={<Investigation />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/response" element={<Response />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}