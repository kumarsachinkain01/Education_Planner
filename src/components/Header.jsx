import React from 'react';
import './CourseList.css'
import CourseList from './CourseList';

const Header = ({ deleteAllCourses }) => {
  return (
    <header className="header">
      <h1>Education Planner</h1>
      <button className="delete-button" onClick={deleteAllCourses}>
        Delete All
      </button>
    </header>
  );
};

export default Header;
