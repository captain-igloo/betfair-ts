/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import ActionPerformed from '../heartbeat/enum/ActionPerformed';
import JsonResponse from '../JsonResponse';
export default class HeartbeatReport extends JsonResponse {
    private actionPerformed;
    private actualTimeoutSeconds;
    constructor(actionPerformed?: ActionPerformed, actualTimeoutSeconds?: number | null);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getActionPerformed(): ActionPerformed;
    setActionPerformed(actionPerformed: ActionPerformed): void;
    getActualTimeoutSeconds(): number | null;
    setActualTimeoutSeconds(actualTimeoutSeconds: number | null): void;
}
