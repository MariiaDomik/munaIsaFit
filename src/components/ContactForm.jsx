import React, { useState, useMemo, useRef } from "react";
import { getFilteredSchedule } from "../utils/courseUtils";
import CourseDatails from "./CourseDatails";
import { sendEmail } from "../utils/sendEmail";

const ContactForm = ({ data, title, course }) => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const titleRef = useRef();
  // const coursesRef = useRef();
  const messageRef = useRef();

  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedType, setSelectedType] = useState("");
  const filteredSchedule = useMemo(
    () => getFilteredSchedule(data, "courseId", selectedType),
    [data, selectedType]
  );

  const handleTypeCourseChange = (e) => {
    setSelectedType(e.target.value);
    setSelectedCourse(null);
  };

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const formData = {
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            email: emailRef.current.value,
            title: titleRef.current.value,
            course: course?.name || '',
            message: messageRef.current.value,
        };

        const response = await sendEmail(formData, false);

        if (response.ok) {
            alert("Deine Nachricht wurde gesendet");
            if (course) {
                await sendEmail(formData, true);
            }
        } else {
            alert("Etwas ist schiefgelaufen");
        }
    } catch (error) {
        console.error("Fehler beim Senden der Nachricht:", error);
        alert("Ein unerwarteter Fehler ist aufgetreten.");
    }
};


  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h1>{title}</h1>
      <div className="first-row">
        <label htmlFor="first-name">First Name</label>
        <input
          type="text"
          id="first-name"
          className="input-text"
          ref={firstNameRef}
        />
        
        <label htmlFor="last-name">Last Name</label>
        <input
          type="text"
          id="last-name"
          className="input-text"
          ref={lastNameRef}
        />
      </div>
      <div className="second-row">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="input-text"
          ref={emailRef}
        />

        <label htmlFor="title">Subject</label>
        <input
          type="text"
          id="title"
          className="input-text"
          ref={titleRef}
        />
      </div>

      {course && (
        <div className="third-row">
          <label>Dieser Kurs wird ausgewählt</label>
          <CourseDatails course={course} />
        </div>
      )}
      {!course && (
        <div className="third-row">
          <label htmlFor="courses">Type auswählen</label>
          <select
            id="courses"
            className="input-text"
            onChange={handleTypeCourseChange}
          >
            {data.courses.map((course) => (
              <option key={course.id} value={course.id}>
                {course.name}
              </option>
            ))}
          </select>

          {selectedType && (
            <>
              <h4>{selectedType}</h4>
              {filteredSchedule.map((course) => (
               
                  <div className="course-option"
                  onClick={() => handleCourseClick(course)}
                  key={course.id}>
                    <h4>{course.name}</h4>
                    {course.day}
                    {course.time}
                    {course.location.adresse}
                  </div>
              ))}
            </>
          )}

          {selectedCourse && <CourseDatails course={selectedCourse} />}
        </div>
      )}

      <div className="forth-row">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          ref={messageRef}
        ></textarea>
        <button type="submit">Senden</button>
      </div>
    </form>
  );
};

export default ContactForm;
