import React from "react";
import CourseCard from "./CourseCard";
import useCourseData from "../utils/useCourseData";
import { getSchedule } from "../utils/courseUtils";
import CourseDatails from "./CourseDatails";
import ScheduleCard from "./ScheduleCard";
import { getElementById } from "../utils/courseUtils";

const ScheduleList = ( props) => {
  const { filters, data } = props;
  
  const schedule = getSchedule(data);

  const filteredCourses = schedule.filter((course) => {
    return (
      (!filters.category || course.courseId === filters.category) &&
      (!filters.day || course.day === filters.day) &&
      (!filters.location || course.locationId === filters.location) &&
      (!filters.availableOnly || course.status === "1")
    );
  });

  return (
    <section className="schedule-list">
      {filteredCourses.length > 0 ? (
        filteredCourses.map((course) => {
        //   const courseType = getElementById(data.courses, course.id);
          const mergedCourse = { ...course, ...course.course}; 
          return <ScheduleCard key={course.id} course={mergedCourse} />;
        })
      ) : (
        <p>Keinen Kursen wurde gefunden</p>
      )}
    </section>
  );
};

export default ScheduleList;
