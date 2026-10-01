import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("currentUser")) || null
    );

    const login = (email, password) => {
        const users = JSON.parse(localStorage.getItem("users")) || [];

        const foundUser = users.find(
            (u) => u.email === email && u.password === password
        );

        if (!foundUser) {
            return false;
        }

        localStorage.setItem("currentUser", JSON.stringify(foundUser));
        setUser(foundUser);

        return true;
    };

    const logout = () => {
        localStorage.removeItem("currentUser");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;