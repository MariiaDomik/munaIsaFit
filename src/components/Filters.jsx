import React from "react";

const Filters = ({ filters, data, onFilterChange }) => {
  const handleChange = (e) => {
    onFilterChange({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="filters">
      <select name="category" onChange={handleChange}>
      <option value="">Alle KursTypen</option>
        { data.courses.map((course) => (
            <option key={course.id} value={course.id}>{course.name}</option>
        ))}
      </select>

      <select name="day" onChange={handleChange}>
        <option value="">Alle Tagen</option>
        {data.schedule.reduce((days, item) => {
            if (!days.includes(item.day)) days.push(item.day);
            return days;}, []).map((day) => (
                <option key={day} value={day}>{day}</option>
            ))
         
        }
      </select>

      <select name="location" onChange={handleChange}>
        <option value="">Alle Locations</option>
        {data.locations.map((location) => (
            <option key={location.id} value={location.id}>{location.adresse}</option>
        ))}
      </select>

      {/* <label>
        <input
          type="checkbox"
          name="availableOnly"
          checked={filters.availableOnly}
          onChange={(e) => onFilterChange({ ...filters, availableOnly: e.target.checked })}
        />
        Только доступные курсы
      </label> */}
    </div>
  );
};

export default Filters;
