import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function MyCourses() {

    const { user } = useContext(AuthContext);

    const [courses, setCourses] = useState([]);

    useEffect(() => {

        const allCourses =
            JSON.parse(localStorage.getItem("courses")) || [];

        const enrollments =
            JSON.parse(localStorage.getItem("enrollments")) || [];

        const myEnrollments =
            enrollments.filter(
                (e) => e.userId === user.id
            );

        const myCourses =
            allCourses.filter((course) =>
                myEnrollments.some(
                    (e) => e.courseId === course.id
                )
            );

        setCourses(myCourses);

    }, [user]);

    return (
        <div className="page">

            <h1>My Courses</h1>

            {courses.length === 0 ? (
                <p>You have not enrolled in any course.</p>
            ) : (

                courses.map((course) => (

                    <div
                        className="course-card"
                        key={course.id} >

                        <h3>{course.title}</h3>

                        <p>
                            {course.description}
                        </p>

                        <p>
                            Category: {course.category}
                        </p>

                    </div>

                ))
            )}

        </div>
    );
}

export default MyCourses;