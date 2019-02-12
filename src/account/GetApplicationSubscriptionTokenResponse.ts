/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';


export default class GetApplicationSubscriptionTokenResponse extends JsonResponse {
    private response: string;

    constructor(
        response: string = '',
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
        let json: any = {};
        if (this.response !== '') {
            json.response = this.response;
        }
        return json;
    }

    public isValid(): boolean {
        return this.response !== '';
    }

    public getResponse(): string {
        return this.response;
    }
    public setResponse(response: string): void {
        this.response = response;
    }

}
