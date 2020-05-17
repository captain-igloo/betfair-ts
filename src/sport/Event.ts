/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';


export interface IEventOptions {
    id?: string;
    name?: string;
    countryCode?: string;
    timezone?: string;
    venue?: string;
    openDate?: Date | string;
}

export default class Event extends JsonMember {
    private id?: string;
    private name?: string;
    private countryCode?: string;
    private timezone?: string;
    private venue?: string;
    private openDate?: Date;

    constructor(options: IEventOptions) {
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

    public toJson(): IEventOptions {
        const json: IEventOptions = {
        };
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

    public getId(): string | undefined {
        return this.id;
    }
    public setId(id: string): void {
        this.id = id;
    }
    public getName(): string | undefined {
        return this.name;
    }
    public setName(name: string): void {
        this.name = name;
    }
    public getCountryCode(): string | undefined {
        return this.countryCode;
    }
    public setCountryCode(countryCode: string): void {
        this.countryCode = countryCode;
    }
    public getTimezone(): string | undefined {
        return this.timezone;
    }
    public setTimezone(timezone: string): void {
        this.timezone = timezone;
    }
    public getVenue(): string | undefined {
        return this.venue;
    }
    public setVenue(venue: string): void {
        this.venue = venue;
    }
    public getOpenDate(): Date | undefined {
        return this.openDate;
    }
    public setOpenDate(openDate: Date): void {
        this.openDate = openDate;
    }

}
