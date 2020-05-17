/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
export interface IHeartbeatRequestOptions {
    preferredTimeoutSeconds: number;
}
export default class HeartbeatRequest extends JsonRequest {
    private preferredTimeoutSeconds;
    constructor(options: IHeartbeatRequestOptions);
    toJson(): IHeartbeatRequestOptions;
    getPreferredTimeoutSeconds(): number;
    setPreferredTimeoutSeconds(preferredTimeoutSeconds: number): void;
}
