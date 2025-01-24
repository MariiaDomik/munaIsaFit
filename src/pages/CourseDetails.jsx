import React from 'react'
import { useLocation } from 'react-router-dom'
import useCourseData from '../utils/useCourseData';
import { getFilteredSchedule } from '../utils/courseUtils';
import CourseDatails from '../components/CourseDatails';
  


function CourseDetails() {
    const location = useLocation();
    const course = location.state?.course;
    const data = useCourseData();

    const basePath = import.meta.env.VITE_BASE_PATH;

    if (!data) return <div className='loading'>Loading</div>;

    if (!course) return <div>Leider der Kurs ist nicht gefunden</div>
    const filteredSchedule = getFilteredSchedule(data, 'courseId', course.id);
    return (
    <section className='course-page-container'>
        <article>
        <img src={basePath + course.img} alt="" />
       <h1>{course.name}</h1>
       <p>{course.description}</p>
       
        <p>{course.article}</p>
       </article>
       <div className='kursplan'>
        {filteredSchedule.map((item) => (
          <CourseDatails key={item.id} course={item} />
        ))}
       </div>

       
    </section>
  ) 
}

export default CourseDetails