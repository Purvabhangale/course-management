import { useNavigate } from "react-router-dom";

function CourseCard({ course }) {

    const navigate = useNavigate();

    return (
        <div className="course-card">

            <h3>{course.title}</h3>

            <p>
                {course.description}
            </p>

            <p>
                <b>Category:</b> {course.category}
            </p>

            <p>
                <b>Duration:</b> {course.duration}
            </p>

            <button
                onClick={() =>
                    navigate(`/courses/${course.id}`)
                }
            >
                View Details
            </button>

        </div>
    );
}

export default CourseCard;