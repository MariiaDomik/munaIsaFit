import React, { useState } from "react";
import Filters from "../components/Filters";
import ScheduleList from "../components/ScheduleList";
import useCourseData from "../utils/useCourseData";
import { getSchedule } from "../utils/courseUtils";

const SchedulePage = () => {
  const [filters, setFilters] = useState({
    category: "",
    day: "",
    location: "",
    availableOnly: false,
  });

  
  const coursesData = useCourseData();
  
  if (!coursesData) return <div className="loading">Loading...</div>;
  

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="schedule-page">
      <h1>Unsere Kursplan</h1>
      <Filters filters={filters} data={coursesData} onFilterChange={handleFilterChange} />
      <ScheduleList filters={filters} data={coursesData} />
    </div>
  );
};

export default SchedulePage;
