/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

export default class Event extends JsonMember {
    private id: string;
    private name: string;
    private countryCode: string;
    private timezone: string;
    private venue: string;
    private openDate: Date | null;

    constructor(
        id: string = '',
        name: string = '',
        countryCode: string = '',
        timezone: string = '',
        venue: string = '',
        openDate: Date | null = null,
    ) {
        super();
        this.id = id;
        this.name = name;
        this.countryCode = countryCode;
        this.timezone = timezone;
        this.venue = venue;
        this.openDate = openDate;
    }

    public fromJson(json: any): void {
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

    public toJson(): any {
        const json: any = {};
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

    public isValid(): boolean {
        return true;
    }

    public getId(): string {
        return this.id;
    }
    public setId(id: string): void {
        this.id = id;
    }
    public getName(): string {
        return this.name;
    }
    public setName(name: string): void {
        this.name = name;
    }
    public getCountryCode(): string {
        return this.countryCode;
    }
    public setCountryCode(countryCode: string): void {
        this.countryCode = countryCode;
    }
    public getTimezone(): string {
        return this.timezone;
    }
    public setTimezone(timezone: string): void {
        this.timezone = timezone;
    }
    public getVenue(): string {
        return this.venue;
    }
    public setVenue(venue: string): void {
        this.venue = venue;
    }
    public getOpenDate(): Date | null {
        return this.openDate;
    }
    public setOpenDate(openDate: Date | null): void {
        this.openDate = openDate;
    }

}
