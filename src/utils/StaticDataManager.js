import { data } from "../data/static_data.json"

export default class StaticDataManager {
    constructor() {
        this.data = data;
    }

    getHeaderData() {
        return this.data.header;
    }

    getHeroData() {
        return this.data.home.hero;
    }
    getAboutData() {
        return this.data.home.about;
    }

    getFooterData() {
        return this.data.footer;
    }
}