import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CourseList from './components/CourseList';
import CourseForm from './components/CourseForm';
import './style.css';

const App = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const storedCourses = JSON.parse(localStorage.getItem('courses'));
    if (storedCourses) {
      setCourses(storedCourses);
    }
  }, []);

  const addCourse = (course) => {
    const updatedCourses = [...courses, course];
    setCourses(updatedCourses);
    localStorage.setItem('courses', JSON.stringify(updatedCourses));
  };

  const deleteAllCourses = () => {
    setCourses([]);
    localStorage.removeItem('courses');
  };

  const deleteCourse = (index) => {
    const updatedCourses = courses.filter((_, i) => i !== index);
    setCourses(updatedCourses);
    localStorage.setItem('courses', JSON.stringify(updatedCourses));
  };

  return (
    <div>
      <Header deleteAllCourses={deleteAllCourses} />
      <CourseForm addCourse={addCourse} />
      {courses.length > 0 && <CourseList courses={courses} onDeleteCourse={deleteCourse} />}
    </div>
  );
};

export default App;
