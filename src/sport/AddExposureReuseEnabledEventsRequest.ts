/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';


export default class AddExposureReuseEnabledEventsRequest extends JsonRequest {
    private eventIds: number[];

    constructor(
        eventIds: number[] = [],
    ) {
        super();
        this.eventIds = eventIds;
    }

    public fromJson(json: any): void {
        if ('eventIds' in json) {
            this.eventIds = json.eventIds;
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.eventIds.length > 0) {
            json.eventIds = this.eventIds;
        }
        return json;
    }

    public isValid(): boolean {
        return this.eventIds.length > 0;
    }

    public getEventIds(): number[] {
        return this.eventIds;
    }
    public setEventIds(eventIds: number[]): void {
        this.eventIds = eventIds;
    }

}
