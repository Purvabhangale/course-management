import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function CourseDetails() {

    const { id } = useParams();

    const { user } = useContext(AuthContext);

    const [course, setCourse] = useState(null);

    useEffect(() => {

        const courses =
            JSON.parse(localStorage.getItem("courses")) || [];

        const foundCourse =
            courses.find(
                (c) => c.id === Number(id)
            );

        setCourse(foundCourse);

    }, [id]);

    const handleEnroll = () => {

        const enrollments =
            JSON.parse(localStorage.getItem("enrollments")) || [];

        const alreadyEnrolled =
            enrollments.find(
                (e) =>
                    e.userId === user.id &&
                    e.courseId === course.id
            );

        if (alreadyEnrolled) {
            alert("Already enrolled");
            return;
        }

        enrollments.push({
            userId: user.id,
            courseId: course.id
        });

        localStorage.setItem(
            "enrollments",
            JSON.stringify(enrollments)
        );

        alert("Enrollment successful");
    };

    if (!course) {
        return <h2>Course not found</h2>;
    }

    return (
        <div className="page">

            <h1>{course.title}</h1>

            <p>
                <b>Description:</b>
                <br />
                {course.description}
            </p>

            <p>
                <b>Category:</b> {course.category}
            </p>

            <p>
                <b>Duration:</b> {course.duration}
            </p>

            <button onClick={handleEnroll}>
                Enroll Now
            </button>

        </div>
    );
}

export default CourseDetails;