/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';


export interface IGetExposureReuseEnabledEventsResponseOptions {
    response?: Array<number>;
}

export default class GetExposureReuseEnabledEventsResponse extends JsonResponse {
    private response?: number[];

    constructor(options: Array<number>) {
        super();
        if (this.validateJson(options)) {
            this.response = options;
        }
    }

    public toJson(): IGetExposureReuseEnabledEventsResponseOptions {
        throw new Error('not implemented');
    }

    public getResponse(): number[] | undefined {
        return this.response;
    }
    public setResponse(response: number[]): void {
        this.response = response;
    }

}
