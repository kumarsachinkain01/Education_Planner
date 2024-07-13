import React from 'react';
import CourseItem from './CourseItem';
import './CourseList.css';

const CourseList = ({ courses, onDeleteCourse }) => {
  return (
    <div className="course-list">
      {courses.map((course, index) => (
        <div key={index} className="course-list-item">
          <CourseItem course={course} onDelete={() => onDeleteCourse(index)} />
        </div>
      ))}
    </div>
  );
};

export default CourseList;

