import React, { useState, useEffect } from 'react'
import { getSchedule } from './courseUtils';
import { contentData } from "../data/content.json"

function useCourseData() {
    const [ data, setCourseData ] = useState(null);

    // useEffect(() => {
    //     fetch('../data/content.json')
    //     .then((response) => response.json())
    //     .then((data) => setCourseData(data.contentData))
    //     .catch((error) => console.log(error));
    // }, []);

    useEffect(() => {
        if (!data) {
            setCourseData(contentData);  // ✅ Записываем данные только при первом рендере
        }
    }, [data]);

  return data ? {
    courses: data.courses,
    locations: data.locations,
    emails: data.emails,
    schedule: data.schedule
  } : null;
};

export default useCourseData;