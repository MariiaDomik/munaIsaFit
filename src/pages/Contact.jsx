import React from 'react'
import ContactForm from '../components/ContactForm'
import useCourseData from '../utils/useCourseData';
import { getSchedule } from '../utils/courseUtils';
import { useLocation } from 'react-router-dom';
import '../css/Contact.css'

function Contact() {
    const location = useLocation();
    const course = location.state?.course || null; 
    
  const data = useCourseData();
  if (!data) return <p>Загрузка данных...</p>;
  const schedule = getSchedule(data);
  return (
    <section>
        <ContactForm data={data} course={course}/>
    </section>
  )
}

export default Contact