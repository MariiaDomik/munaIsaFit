import { useState } from 'react';
import { Link } from 'react-router-dom';

function CourseCard(props) {
  const {course} = props;
  // const [showModal, setShowModal] = useState(false);

  return (
    <div key={course.id} className='card course-card' style={{backgroundImage: `url(${course.img})`}}>
      <div><h3>{course.name}</h3>
      {/* <img src={course.img} alt="" /> */}
      {/* <p>{course.description}</p> */}
      </div>

      {/* <button onClick={() => setShowModal(true)}>Подробнее</button> */}

      {/* {showModal && <CourseModal course={course} onClose={() => setShowModal(false)} />} */}
      <button><Link to={`/courses/${course.id}`} state={{course: {course}}}>Mehr erfahren</Link></button>
    </div>
  )
}

export default CourseCard