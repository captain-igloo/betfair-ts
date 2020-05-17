/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';


export interface ITimeRangeOptions {
    from?: Date | string;
    to?: Date | string;
}

export default class TimeRange extends JsonMember {
    private from?: Date;
    private to?: Date;

    constructor(options: ITimeRangeOptions) {
        super();
        if (options.from) {
            this.from = this.fromJson(options.from, Date);
        }
        if (options.to) {
            this.to = this.fromJson(options.to, Date);
        }
    }

    public toJson(): ITimeRangeOptions {
        const json: ITimeRangeOptions = {
        };
        if (typeof this.from !== 'undefined') {
            json.from = this.from.toISOString();
        }
        if (typeof this.to !== 'undefined') {
            json.to = this.to.toISOString();
        }
        return json;
    }

    public getFrom(): Date | undefined {
        return this.from;
    }
    public setFrom(from: Date): void {
        this.from = from;
    }
    public getTo(): Date | undefined {
        return this.to;
    }
    public setTo(to: Date): void {
        this.to = to;
    }

}
