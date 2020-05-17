/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';


export interface IRemoveExposureLimitForMarketGroupResponseOptions {
    response?: string;
}

export default class RemoveExposureLimitForMarketGroupResponse extends JsonResponse {
    private response?: string;

    constructor(options: string) {
        super();
        if (this.validateJson(options)) {
            this.response = options;
        }
    }

    public toJson(): IRemoveExposureLimitForMarketGroupResponseOptions {
        throw new Error('not implemented');
    }

    public getResponse(): string | undefined {
        return this.response;
    }
    public setResponse(response: string): void {
        this.response = response;
    }

}
