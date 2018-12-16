/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
export default class HeartbeatRequest extends JsonRequest {
    private preferredTimeoutSeconds;
    constructor(preferredTimeoutSeconds?: number | null);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getPreferredTimeoutSeconds(): number | null;
    setPreferredTimeoutSeconds(preferredTimeoutSeconds: number | null): void;
}
