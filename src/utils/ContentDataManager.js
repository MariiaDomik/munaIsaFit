import { contentData } from "../data/content.json"

export default class ContentDataManager {
    constructor() {
        this.data = contentData;
    }

    getLocations() {
        return this.data.locations;
    }
    getCourses() {
        return this.data.courses;
    }
    getKursplan() {
        this.data.kursplan;
    }
    getEmails() {
        return this.data.emails;
    }
    getPartners() {
        return this.data.partners;
    }
}