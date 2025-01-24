import React from 'react'
import { Link } from 'react-router-dom';

function ScheduleCard(props) {
    const { course } = props;
    const basePath = import.meta.env.VITE_BASE_PATH;

  return (
    
    <div key={course.id} className='schedule-item' >
          <div>
          <h3>{course.name}:</h3>
          <p>
            <span>Wochentag und Zeit:</span> {course.day} {course.time}
          </p>
          <p>
            <span>Adresse:</span> {course.location.adresse}
          </p>
          {course.price &&<p>Prise: {course.price}</p>}
          
          <button><Link to={`/courses/${course.id}`} state={{course: {...course, ...course.course}}}>Mehr erfahren</Link></button>
          <Link className='button' to={`/contact/anmeldung/${course.id}`} state={{course:course}}>Anmelden</Link>
          </div>
          <img src={basePath + course.course.img} alt="" />
        </div>
  )
}

export default ScheduleCard