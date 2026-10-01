import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("LEARNER");
    

    const handleRegister = (e) => {
        e.preventDefault();

        if (!name || !email || !password) {
            setError("Please fill all fields");
            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const exists = users.find((u) => u.email === email);

        if (exists) {
            setError("Email already registered");
            return;
        }

        const newUser = {
            id: Date.now(),
            name,
            email,
            password,
            role
        };

        users.push(newUser);

        localStorage.setItem("users", JSON.stringify(users));

        alert("Registration successful");

        navigate("/");
    };

    return (
        <div className="form-container">
            <h2>Registration</h2>

            <form onSubmit={handleRegister}>

                <input
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

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

                <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                >
                    <option value="LEARNER">Learner</option>
                    <option value="ADMIN">Admin</option>
                </select>

                {error && <p className="error">{error}</p>}

                <button type="submit">Register</button>
            </form>

            <p>
                Already have an account?{" "}
                <span onClick={() => navigate("/")}>
                    Login
                </span>
            </p>
        </div>
    );
}

export default Register;