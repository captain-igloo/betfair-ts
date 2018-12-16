/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
export default class RemoveExposureReuseEnabledEventsRequest extends JsonRequest {
    private eventIds;
    constructor(eventIds?: number[]);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getEventIds(): number[];
    setEventIds(eventIds: number[]): void;
}
