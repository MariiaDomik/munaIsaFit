import { useState } from 'react';
import { Link } from 'react-router-dom';

function CourseCard(props) {
  const {course} = props;
  // const [showModal, setShowModal] = useState(false);
  const basePath = import.meta.env.VITE_BASE_PATH;

  return (
    <div key={course.id} className='card course-card' style={{backgroundImage: `url(${basePath + course.img})`}}>
      <div><h3>{course.name}</h3>
      {/* <img src={course.img} alt="" /> */}
      {/* <p>{course.description}</p> */}
      </div>

      {/* <button onClick={() => setShowModal(true)}>Подробнее</button> */}

      {/* {showModal && <CourseModal course={course} onClose={() => setShowModal(false)} />} */}
      <Link className='card-link' to={`/courses/${course.id}`} state={{course: course}}><span className='desktop'>Mehr erfahren</span></Link>
    </div>
  )
}

export default CourseCard