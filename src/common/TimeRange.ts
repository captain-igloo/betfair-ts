/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';


export default class TimeRange extends JsonMember {
    private from: Date | null;
    private to: Date | null;

    constructor(
        from: Date | null = null,
        to: Date | null = null,
    ) {
        super();
        this.from = from;
        this.to = to;
    }

    public fromJson(json: any): void {
        if ('from' in json) {
            this.from = new Date(json.from);
        }
        if ('to' in json) {
            this.to = new Date(json.to);
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.from !== null) {
            json.from = this.from.toISOString();
        }
        if (this.to !== null) {
            json.to = this.to.toISOString();
        }
        return json;
    }

    public isValid(): boolean {
        return true;
    }

    public getFrom(): Date | null {
        return this.from;
    }
    public setFrom(from: Date | null): void {
        this.from = from;
    }
    public getTo(): Date | null {
        return this.to;
    }
    public setTo(to: Date | null): void {
        this.to = to;
    }

}
