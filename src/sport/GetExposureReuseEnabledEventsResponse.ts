/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';


export default class GetExposureReuseEnabledEventsResponse extends JsonResponse {
    private response: number[];

    constructor(
        response: number[] = [],
    ) {
        super();
        this.response = response;
    }

    public fromJson(json: any): void {
        if (this.validateJson(json)) {
            this.response = json;
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.response.length > 0) {
            json.response = this.response;
        }
        return json;
    }

    public isValid(): boolean {
        return this.response.length > 0;
    }

    public getResponse(): number[] {
        return this.response;
    }
    public setResponse(response: number[]): void {
        this.response = response;
    }

}
