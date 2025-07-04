import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setMessage(null);

        try {
            await axios.post("http://localhost:5000/api/auth/register", formData);
            setMessage({ type: "success", text: "Registration Successful! Redirecting..." });

            // Delay for better UX, then navigate to Login
            setTimeout(() => navigate("/login"), 2000);
        } catch (error) {
            setMessage({ type: "danger", text: "Registration Failed! Try again." });
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card p-4 shadow" style={{ width: "350px" }}>
                <h2 className="text-center mb-3">Register</h2>

                {/* Display Success/Error Message */}
                {message && <div className={`alert alert-${message.type} text-center`}>{message.text}</div>}

                <form onSubmit={handleRegister}>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        className="form-control mb-2"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="form-control mb-2"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                        className="form-control mb-2"
                        required
                    />
                    <button type="submit" className="btn btn-primary w-100">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
