/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';


export interface IIsAccountSubscribedToWebAppResponseOptions {
    response?: boolean;
}

export default class IsAccountSubscribedToWebAppResponse extends JsonResponse {
    private response?: boolean;

    constructor(options: boolean) {
        super();
        if (this.validateJson(options)) {
            this.response = options;
        }
    }

    public toJson(): IIsAccountSubscribedToWebAppResponseOptions {
        throw new Error('not implemented');
    }

    public getResponse(): boolean | undefined {
        return this.response;
    }
    public setResponse(response: boolean): void {
        this.response = response;
    }

}
