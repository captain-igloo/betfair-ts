/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
export default class Event extends JsonMember {
    private id;
    private name;
    private countryCode;
    private timezone;
    private venue;
    private openDate;
    constructor(id?: string, name?: string, countryCode?: string, timezone?: string, venue?: string, openDate?: Date | null);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getId(): string;
    setId(id: string): void;
    getName(): string;
    setName(name: string): void;
    getCountryCode(): string;
    setCountryCode(countryCode: string): void;
    getTimezone(): string;
    setTimezone(timezone: string): void;
    getVenue(): string;
    setVenue(venue: string): void;
    getOpenDate(): Date | null;
    setOpenDate(openDate: Date | null): void;
}
