import React, { useState } from "react";
import useCourseData from "../utils/useCourseData";
import { getGruppedSchedule, getSchedule } from "../utils/courseUtils";
import CourseDatails from "./CourseDatails";
import { Link } from "react-router-dom";

function CourseSchedule() {
  const data = useCourseData();
  const gruppedSchedule = getGruppedSchedule(data, "day");
  const firstDay = Object.keys(gruppedSchedule)[0];
  const [filterOptionIsOpenList, setFilterOptionIsOpenList] = useState({ [firstDay]: true, });

  if (!data) return <div className="loading">Loading...</div>;


  const handleOptionFilterClick = (filterName) => {
    setFilterOptionIsOpenList((prev) => ({
      ...prev,
      [filterName]: !prev[filterName],
    }));
  };

  return (
    <div>
      <h2>Unsere Kursplan</h2>
      <p>Du könntest unseren Kursplan als PDF File herunterladen</p>
      <Link className="button" to='/public/KursübersichtaktuellJanuar2025.pdf' download={'KursübersichtaktuellJanuar2025.pdf'}>Download als PDF</Link>
      {
      Object.entries(gruppedSchedule).map(([dayName, courses]) => (
        <div key={dayName}>
          <button onClick={() => handleOptionFilterClick(dayName)}>
            <h3>{dayName}</h3>
          </button>
          {!!filterOptionIsOpenList[dayName] && (
            <div>
              {courses.map((course) => (
                <CourseDatails key={course.id} course={course} />
                // <div key={course.id}>
                //   <h4>{course.name}</h4>
                //   <p>{course.location.adresse}</p>
                //   <p>{course.time}</p>
                //   <p>{course.price}</p>
                // </div>
              ))}
            </div>
          )}
        </div>
      ))}

    </div>
  );
}

export default CourseSchedule;
