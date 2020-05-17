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
    private id?;
    private name?;
    private countryCode?;
    private timezone?;
    private venue?;
    private openDate?;
    constructor(options: IEventOptions);
    toJson(): IEventOptions;
    getId(): string | undefined;
    setId(id: string): void;
    getName(): string | undefined;
    setName(name: string): void;
    getCountryCode(): string | undefined;
    setCountryCode(countryCode: string): void;
    getTimezone(): string | undefined;
    setTimezone(timezone: string): void;
    getVenue(): string | undefined;
    setVenue(venue: string): void;
    getOpenDate(): Date | undefined;
    setOpenDate(openDate: Date): void;
}
