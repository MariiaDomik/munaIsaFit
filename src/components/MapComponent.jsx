import React, { useState, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import useCourseData from "../utils/useCourseData";
import { getFilteredSchedule } from "../utils/courseUtils";
import CourseDatails from "./CourseDatails";


const MapComponent = (props) => {
    const { locations, description } = props;
    const data = useCourseData();

    const [ selectedLocation, setSelectedLocation ] = useState(null);
    const filteredSchedule = useMemo(
        () => {
            console.log("data:", data);
            console.log("selectedLocation:", selectedLocation);
            console.log("locationID:", selectedLocation?.id || "");
            const result = getFilteredSchedule(data, "locationID", selectedLocation?.id || "");
            console.log("filteredSchedule:", result);
            return result;
            getFilteredSchedule(data, "locationID", selectedLocation?.id || "")},
        [data, selectedLocation]
      );

    const handleMarkerClick = (e, location) => {
        setSelectedLocation(location);
    }

  return (
    <div>
    <MapContainer center={[locations[0].location.latitude, locations[0].location.longitude]} zoom={13} style={{ height: "400px", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {locations.map(location => (
      <Marker 
      position={[location.location.latitude, location.location.longitude]}
      eventHandlers={{ click: (e) => handleMarkerClick(e, location)}}>
        <Popup>{location.adresse}</Popup>
        <Tooltip permanent>{location.adresse}</Tooltip>
      </Marker>
      ))};
    </MapContainer>
    {selectedLocation && (
        <div>
        <h2>An dieisen Ort finden folgende Kursen statt:</h2>
        {filteredSchedule && filteredSchedule.map((course) =>(
            
            <CourseDatails key={course.id} course={course} />
        ))}
        </div>
    )}
    </div>
  );
};

export default MapComponent;
