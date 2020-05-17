/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';


export interface IHeartbeatRequestOptions {
    preferredTimeoutSeconds: number;
}

export default class HeartbeatRequest extends JsonRequest {
    private preferredTimeoutSeconds: number;

    constructor(options: IHeartbeatRequestOptions) {
        super();
        this.preferredTimeoutSeconds = options.preferredTimeoutSeconds;
    }

    public toJson(): IHeartbeatRequestOptions {
        const json: IHeartbeatRequestOptions = {
            preferredTimeoutSeconds: this.preferredTimeoutSeconds,
        };
        return json;
    }

    public getPreferredTimeoutSeconds(): number {
        return this.preferredTimeoutSeconds;
    }
    public setPreferredTimeoutSeconds(preferredTimeoutSeconds: number): void {
        this.preferredTimeoutSeconds = preferredTimeoutSeconds;
    }

}
