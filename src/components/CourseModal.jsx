import React from "react";

const CourseModal = ({ course, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{course.name}</h2>
        <p>День: {course.day}</p>
        <p>Время: {course.time}</p>
        <p>Цена: {course.price}</p>
        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
};

export default CourseModal;
