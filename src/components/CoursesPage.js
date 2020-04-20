import React, { useState, useEffect } from "react";
import courseStore from "../stores/courseStore";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";
import { loadCourses, deleteCourse } from "../actions/courseActions";

function CoursesPage() {
  const [courses, setCourses] = useState(courseStore.getCourses());

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    if (courseStore.getCourses().length === 0) loadCourses();
    return () => courseStore.removeChangeListener(onChange);
  }, []);

  function onChange() {
    // since our component is connected to the flux store,
    // when courses are added to the store, onChange will be called
    setCourses(courseStore.getCourses());
  }

  return (
    <>
      <h2>courses</h2>
      <Link className="btn btn-primary" to="/course">
        {" "}
        Add Course{" "}
      </Link>
      <CourseList courses={courses} deleteCourse={deleteCourse} />
    </>
  );
}
/*NOTE: creating separate components for logic and markup can make your
components easier to maintain and reuse*/
export default CoursesPage;
