import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";

function CoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then((_courses) => setCourses(_courses));
  }, []);

  return (
    <>
      <h2>courses</h2>
      <Link className="btn btn-primary" to="/course">
        {" "}
        Add Course{" "}
      </Link>
      <CourseList courses={courses} />
    </>
  );
}
/*NOTE: creating separate components for logic and markup can make your
components easier to maintain and reuse*/
export default CoursesPage;
