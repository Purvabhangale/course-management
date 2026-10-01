import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Navbar() {

    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <nav>

            <h2>Course Management</h2>

            <div>

                {user?.role === "LEARNER" && (
                    <>
                        <Link to="/courses">Courses</Link>
                        <Link to="/my-courses">My Courses</Link>
                    </>
                )}

                {user?.role === "ADMIN" && (
                    <Link to="/admin/courses">
                        Manage Courses
                    </Link>
                )}

                {user && (
                    <button onClick={handleLogout}>
                        Logout
                    </button>
                )}

            </div>

        </nav>
    );
}

export default Navbar;