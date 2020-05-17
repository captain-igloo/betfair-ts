/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import ActionPerformed from '../heartbeat/enum/ActionPerformed';
export interface IHeartbeatReportOptions {
    actionPerformed?: ActionPerformed | string;
    actualTimeoutSeconds?: number;
}
export default class HeartbeatReport extends JsonResponse {
    private actionPerformed?;
    private actualTimeoutSeconds?;
    constructor(options: IHeartbeatReportOptions);
    toJson(): IHeartbeatReportOptions;
    getActionPerformed(): ActionPerformed | undefined;
    setActionPerformed(actionPerformed: ActionPerformed): void;
    getActualTimeoutSeconds(): number | undefined;
    setActualTimeoutSeconds(actualTimeoutSeconds: number): void;
}
