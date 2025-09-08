import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ConverterPage from "./pages/ConverterPage";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/converter" element={<ConverterPage />} />
            </Routes>
        </Router>
    );
}
