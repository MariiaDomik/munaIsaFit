import React from 'react'
import CourseCard from './CourseCard';

function CoursesListSection(props) {
    const { courses } = props;
  return (
    <section id='courses' >
        <h2>Kursen</h2>
        <div className='cards-container'>
            { courses.map((course) => (
              <CourseCard key={course.id} course={course} />  
            ))}
        </div>
    </section>
  )
}

export default CoursesListSection