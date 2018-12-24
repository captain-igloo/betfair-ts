"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
class Event extends JsonMember_1.default {
    constructor(id = '', name = '', countryCode = '', timezone = '', venue = '', openDate = null) {
        super();
        this.id = id;
        this.name = name;
        this.countryCode = countryCode;
        this.timezone = timezone;
        this.venue = venue;
        this.openDate = openDate;
    }
    fromJson(json) {
        if ('id' in json) {
            this.id = json.id;
        }
        if ('name' in json) {
            this.name = json.name;
        }
        if ('countryCode' in json) {
            this.countryCode = json.countryCode;
        }
        if ('timezone' in json) {
            this.timezone = json.timezone;
        }
        if ('venue' in json) {
            this.venue = json.venue;
        }
        if ('openDate' in json) {
            this.openDate = new Date(json.openDate);
        }
    }
    toJson() {
        const json = {};
        if (this.id !== null) {
            json.id = this.id;
        }
        if (this.name !== null) {
            json.name = this.name;
        }
        if (this.countryCode !== null) {
            json.countryCode = this.countryCode;
        }
        if (this.timezone !== null) {
            json.timezone = this.timezone;
        }
        if (this.venue !== null) {
            json.venue = this.venue;
        }
        if (this.openDate !== null) {
            json.openDate = this.openDate.toISOString();
        }
        return json;
    }
    isValid() {
        return true;
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