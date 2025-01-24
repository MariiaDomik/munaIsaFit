import React from 'react'
import { Link } from 'react-router-dom';

function CourseDatails(props) {
    const { course } = props;
  return (
    
        <div className='course-details'>
          <div><h4>Gewählter Kurs:</h4>
          <p>
            <span>Überschrift:</span> {course.name}
          </p>
          <p>
            <span>Datum:</span> {course.day} {course.time}
          </p>
          <p>
            <span>Adresse:</span> {course.location.adresse}
          </p>
          <p>
            {/* <strong>Свободных мест:</strong> {selectedCourse?.spots} */}
          </p>
          </div>
          <Link className='button' to={`/contact/anmeldung/${course.id}`} state={{course:course}}>Anmelden</Link>
        </div>
  )
}

export default CourseDatails