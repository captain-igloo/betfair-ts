/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';

export default class RemoveExposureReuseEnabledEventsResponse extends JsonResponse {
    private response: string;

    constructor(
        response: string = '',
    ) {
        super();
        this.response = response;
    }

    public fromJson(json: any): void {
        if (this.validateJson(json)) {
            if ('response' in json) {
                this.response = json.response;
            }
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.response !== null) {
            json.response = this.response;
        }
        return json;
    }

    public isValid(): boolean {
        return this.response !== null;
    }

    public getResponse(): string {
        return this.response;
    }
    public setResponse(response: string): void {
        this.response = response;
    }

}
