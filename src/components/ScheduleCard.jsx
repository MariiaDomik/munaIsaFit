import React from 'react'
import { Link } from 'react-router-dom';

function ScheduleCard(props) {
    const { course } = props;
  return (
    
    <div key={course.id} className='schedule-item' >
          <div>
          <h4>{course.name}:</h4>
          <p>
            <span>Datum:</span> {course.day} {course.time}
          </p>
          <p>
            <span>Adresse:</span> {course.location.adresse}
          </p>
          <p>
            {/* <strong>Свободных мест:</strong> {selectedCourse?.spots} */}
          </p>
          
          <button><Link to={`/courses/${course.id}`} state={{course: {...course, ...course.course}}}>Mehr erfahren</Link></button>
          <Link className='button' to={`/contact/anmeldung/${course.id}`} state={{course:course}}>Anmelden</Link>
          </div>
          <img src={course.course.img} alt="" />
        </div>
  )
}

export default ScheduleCard