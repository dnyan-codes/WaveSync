import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Map from "../pages/Map";
import Analytics from "../pages/Analytics";
import Alerts from "../pages/Alerts";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import About from "../pages/About";
import Architecture from "../pages/Architecture";
import Incidents from "../pages/Incidents";
import Agents from "../pages/Agents";
import DataSources from "../pages/DataSources";
import Reports from "../pages/Reports";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/map" element={<Map />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/alerts" element={<Alerts />} />
      <Route path="/architecture" element={<Architecture />} />
      <Route path="/incidents" element={<Incidents />} />
      <Route path="/agents" element={<Agents />} />
      <Route path="/data-sources" element={<DataSources />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}