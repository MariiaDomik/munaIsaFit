import React from 'react'
import { useLocation } from 'react-router-dom'

function CourseDetails() {
    const location = useLocation();
    const course = location.state?.course;

  return (
    <section>
        <article>
        <img src={course.img} alt="" />
       <h1>{course.name}</h1>
       <p>{course.description}</p>
       
        <p>{course.article}</p>
       </article>
       <div className='kursplan'></div>

       
    </section>
  ) 
}

export default CourseDetails