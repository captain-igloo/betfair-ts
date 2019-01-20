/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';


export default class IsAccountSubscribedToWebAppResponse extends JsonResponse {
    private response: boolean | null;

    constructor(
        response: boolean | null = null,
    ) {
        super();
        this.response = response;
    }

    public fromJson(json: any): void {
        if (this.validateJson(json)) {
            this.response = json.response;
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

    public getResponse(): boolean | null {
        return this.response;
    }
    public setResponse(response: boolean | null): void {
        this.response = response;
    }

}
