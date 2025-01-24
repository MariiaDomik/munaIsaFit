import React, { useState } from "react";
import Filters from "../components/Filters";
import ScheduleList from "../components/ScheduleList";
import useCourseData from "../utils/useCourseData";
import { getSchedule } from "../utils/courseUtils";
import { Link } from "react-router-dom";

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
      <article>
      <h1>Unsere Kursplan</h1>
      <p>Du könntest unseren Kursplan als PDF File herunterladen</p>
      <p><Link className="button" to='/KursübersichtaktuellJanuar2025.pdf' download={'KursübersichtaktuellJanuar2025.pdf'}>Download als PDF</Link>
      </p>
      </article>
      <Filters filters={filters} data={coursesData} onFilterChange={handleFilterChange} />
      <ScheduleList filters={filters} data={coursesData} />
    </div>
  );
};

export default SchedulePage;
