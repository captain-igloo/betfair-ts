/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
export default class TimeRange extends JsonMember {
    private from;
    private to;
    constructor(from?: Date | null, to?: Date | null);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getFrom(): Date | null;
    setFrom(from: Date | null): void;
    getTo(): Date | null;
    setTo(to: Date | null): void;
}
