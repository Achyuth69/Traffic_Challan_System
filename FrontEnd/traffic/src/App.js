import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "D:/Traffic Challan System/FrontEnd/traffic/src/components/Navbar";
import Footer from "D:/Traffic Challan System/FrontEnd/traffic/src/components/Footer"; // Added Footer import
import Home from "D:/Traffic Challan System/FrontEnd/traffic/src/components/pages/Home";
import Register from "D:/Traffic Challan System/FrontEnd/traffic/src/components/Register";
import Login from "D:/Traffic Challan System/FrontEnd/traffic/src/components/Login";
import Dashboard from "D:/Traffic Challan System/FrontEnd/traffic/src/components/pages/Dashboard";
import CreateChallan from "D:/Traffic Challan System/FrontEnd/traffic/src/components/CreateChallan";
import SearchChallan from "D:/Traffic Challan System/FrontEnd/traffic/src/components/SearchChallan";
import PayChallan from "D:/Traffic Challan System/FrontEnd/traffic/src/components/PayChallan";
import NotFound from "D:/Traffic Challan System/FrontEnd/traffic/src/components/pages/NotFound"; // Added a 404 Page

function App() {
    return (
        <Router>
            <Navbar />
            <div className="container"> {/* Added a wrapper for spacing */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/create-challan" element={<CreateChallan />} />
                    <Route path="/search-challan" element={<SearchChallan />} />
                    <Route path="/pay-challan" element={<PayChallan />} />
                    <Route path="*" element={<NotFound />} /> {/* 404 Page */}
                </Routes>
            </div>
            <Footer /> {/* Placed Footer at the bottom */}
        </Router>
    );
}

export default App;
