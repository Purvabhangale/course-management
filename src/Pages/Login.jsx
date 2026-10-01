import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Login() {

    const { login } = useContext(AuthContext);

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError("Email and password are required");
            return;
        }

        const success = login(email, password);

        if (!success) {
            setError("Invalid email or password");
            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const user = users.find((u) => u.email === email);

        if (user.role === "ADMIN") {
            navigate("/admin/courses");
        } else {
            navigate("/courses");
        }
    };

    return (
        <div className="form-container">

            <h2>Login</h2>

            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {error && <p className="error">{error}</p>}

                <button type="submit">
                    Login
                </button>

            </form>

            <p>
                Don't have an account?{" "}
                <span onClick={() => navigate("/register")}>
                    Register
                </span>
            </p>

        </div>
    );
}

export default Login;
