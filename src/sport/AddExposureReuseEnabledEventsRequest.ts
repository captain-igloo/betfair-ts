/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';


export interface IAddExposureReuseEnabledEventsRequestOptions {
    eventIds: number[];
}

export default class AddExposureReuseEnabledEventsRequest extends JsonRequest {
    private eventIds: number[];

    constructor(options: IAddExposureReuseEnabledEventsRequestOptions) {
        super();
        this.eventIds = options.eventIds;
    }

    public toJson(): IAddExposureReuseEnabledEventsRequestOptions {
        const json: IAddExposureReuseEnabledEventsRequestOptions = {
            eventIds: this.eventIds,
        };
        return json;
    }

    public getEventIds(): number[] {
        return this.eventIds;
    }
    public setEventIds(eventIds: number[]): void {
        this.eventIds = eventIds;
    }

}
