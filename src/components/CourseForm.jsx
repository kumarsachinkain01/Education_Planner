import React, { useState } from 'react';


const CourseForm = ({ addCourse }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [hours, setHours] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addCourse({ title, description, startDate, endDate, hours });
    setTitle('');
    setDescription('');
    setStartDate('');
    setEndDate('');
    setHours('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Course Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Course Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        required
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Hours Required"
        value={hours}
        onChange={(e) => setHours(e.target.value)}
        required
      />
      <button type="submit">Add Course</button>
    </form>
  );
};

export default CourseForm;
