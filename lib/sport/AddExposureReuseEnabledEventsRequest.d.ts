/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
export interface IAddExposureReuseEnabledEventsRequestOptions {
    eventIds: number[];
}
export default class AddExposureReuseEnabledEventsRequest extends JsonRequest {
    private eventIds;
    constructor(options: IAddExposureReuseEnabledEventsRequestOptions);
    toJson(): IAddExposureReuseEnabledEventsRequestOptions;
    getEventIds(): number[];
    setEventIds(eventIds: number[]): void;
}
