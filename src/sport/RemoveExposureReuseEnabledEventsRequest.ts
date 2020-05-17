/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';


export interface IRemoveExposureReuseEnabledEventsRequestOptions {
    eventIds: Array<number>;
}

export default class RemoveExposureReuseEnabledEventsRequest extends JsonRequest {
    private eventIds: number[];

    constructor(options: IRemoveExposureReuseEnabledEventsRequestOptions) {
        super();
        this.eventIds = options.eventIds;
    }

    public toJson(): IRemoveExposureReuseEnabledEventsRequestOptions {
        const json: IRemoveExposureReuseEnabledEventsRequestOptions = {
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
