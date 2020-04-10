import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";

function CoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then((_courses) => setCourses(_courses));
  }, []);

  return (
    <>
      <h2>courses</h2>
      <CourseList courses={courses} />
    </>
  );
}
/*NOTE: creating separate components for logic and markup can make your
components easier to maintain and reuse*/
export default CoursesPage;
