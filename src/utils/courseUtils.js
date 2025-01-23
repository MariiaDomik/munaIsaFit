export const getSchedule = (data) => {
    if (!data || !data.schedule) return []; 

    return data.schedule.reduce((schedule, item) => {
        const course = getElementById(data.courses, item.courseId) || {};
        const location = getElementById(data.locations, item.locationId) || {};
        const email = getElementById(data.emails, item.emailId) || {};

        schedule.push({
            id: item.id,
            name: course.name || "Unknown Course",
            courseId: item.courseId,
            locationId: item.locationId,
            emailId: item.emailId,
            day: item.day, 
            time: item.time,
            price: item.price || "Not Specified",
            course,
            location,
            locationID: location.id,
            email
        });

        return schedule;
    }, []);
};

export const getGruppedSchedule = (data, groupFilter) => {
    return getSchedule(data).reduce((acc, course) => {
        const key = course[groupFilter];
        if (!acc[key]) acc[key] = [];
        acc[key].push(course);
        return acc;
    }, {});
};

export const getFilteredSchedule = (data, filter, value) => {
    return getSchedule(data).filter((course) => course[filter] == value);
};

export const getElementById = (data, id) => {
    if (!data) return null;
    return data.find((element) => element.id == id) || null;
};
