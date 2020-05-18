/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
export interface IRemoveExposureReuseEnabledEventsRequestOptions {
    eventIds: number[];
}
export default class RemoveExposureReuseEnabledEventsRequest extends JsonRequest {
    private eventIds;
    constructor(options: IRemoveExposureReuseEnabledEventsRequestOptions);
    toJson(): IRemoveExposureReuseEnabledEventsRequestOptions;
    getEventIds(): number[];
    setEventIds(eventIds: number[]): void;
}
