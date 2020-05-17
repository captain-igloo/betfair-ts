"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
class Event extends JsonMember_1.default {
    constructor(options) {
        super();
        this.id = options.id;
        this.name = options.name;
        this.countryCode = options.countryCode;
        this.timezone = options.timezone;
        this.venue = options.venue;
        if (options.openDate) {
            this.openDate = this.fromJson(options.openDate, Date);
        }
    }
    toJson() {
        const json = {};
        if (typeof this.id !== 'undefined') {
            json.id = this.id;
        }
        if (typeof this.name !== 'undefined') {
            json.name = this.name;
        }
        if (typeof this.countryCode !== 'undefined') {
            json.countryCode = this.countryCode;
        }
        if (typeof this.timezone !== 'undefined') {
            json.timezone = this.timezone;
        }
        if (typeof this.venue !== 'undefined') {
            json.venue = this.venue;
        }
        if (typeof this.openDate !== 'undefined') {
            json.openDate = this.openDate.toISOString();
        }
        return json;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getCountryCode() {
        return this.countryCode;
    }
    setCountryCode(countryCode) {
        this.countryCode = countryCode;
    }
    getTimezone() {
        return this.timezone;
    }
    setTimezone(timezone) {
        this.timezone = timezone;
    }
    getVenue() {
        return this.venue;
    }
    setVenue(venue) {
        this.venue = venue;
    }
    getOpenDate() {
        return this.openDate;
    }
    setOpenDate(openDate) {
        this.openDate = openDate;
    }
}
exports.default = Event;
//# sourceMappingURL=Event.js.map