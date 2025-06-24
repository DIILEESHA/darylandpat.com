import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/nav/Navbar";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import Scrolltotop from "../Scrolltotop";
import Guestbook from "./pages/guest/Guestbook";
import RSVPForm from "./pages/guest/RSVPForm";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {

  const isDashboard = location.pathname === "/dashboard";

  return (
    <Router>
      {!isDashboard && <Navbar />} 
      <Scrolltotop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/guest-book" element={<Guestbook />} />
        <Route path="/rsvp" element={<RSVPForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      {!isDashboard && <Footer />} 
    </Router>
  );
}

export default App;
