/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
export interface ITimeRangeOptions {
    from?: Date | string;
    to?: Date | string;
}
export default class TimeRange extends JsonMember {
    private from?;
    private to?;
    constructor(options: ITimeRangeOptions);
    toJson(): ITimeRangeOptions;
    getFrom(): Date | undefined;
    setFrom(from: Date): void;
    getTo(): Date | undefined;
    setTo(to: Date): void;
}
