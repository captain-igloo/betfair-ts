/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';

import Status from '../account/enum/Status';

export interface IRevokeAccessToWebAppResponseOptions {
    response?: Status | string;
}

export default class RevokeAccessToWebAppResponse extends JsonResponse {
    private response?: Status;

    constructor(options: Status | string) {
        super();
        if (this.validateJson(options)) {
            if (options) {
                this.response = this.fromJson(options, Status);
            }
        }
    }

    public toJson(): IRevokeAccessToWebAppResponseOptions {
        throw new Error('not implemented');
    }

    public getResponse(): Status | undefined {
        return this.response;
    }
    public setResponse(response: Status): void {
        this.response = response;
    }

}
