import { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";

function CourseList() {

    const [courses, setCourses] = useState([]);

    useEffect(() => {

        const storedCourses =
            JSON.parse(localStorage.getItem("courses")) || [];

        const publishedCourses =
            storedCourses.filter(
                (course) => course.published
            );

        setCourses(publishedCourses);

    }, []);

    return (
        <div className="page">

            <h1>Available Courses</h1>

            <div className="course-container">

                {courses.length === 0 ? (
                    <p>No published courses available.</p>
                ) : (
                    courses.map((course) => (
                        <CourseCard
                            key={course.id}
                            course={course}
                        />
                    ))
                )}

            </div>

        </div>
    );
}

export default CourseList;