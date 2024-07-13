import React from 'react';
import './CourseItem.css';

const CourseItem = ({ course, onDelete }) => {
  return (
    <div className="course-item">
      <button className="delete-course-button" onClick={onDelete}>Delete</button>
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <p>Start Date: {course.startDate}</p>
      <p>End Date: {course.endDate}</p>
      <p>Hours Required: {course.hours}</p>
    </div>
  );
};

export default CourseItem;



