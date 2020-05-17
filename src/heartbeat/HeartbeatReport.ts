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
    private actionPerformed?: ActionPerformed;
    private actualTimeoutSeconds?: number;

    constructor(options: IHeartbeatReportOptions) {
        super();
        if (this.validateJson(options)) {
            if (options.actionPerformed) {
                this.actionPerformed = this.fromJson(options.actionPerformed, ActionPerformed);
            }
            this.actualTimeoutSeconds = options.actualTimeoutSeconds;
        }
    }

    public toJson(): IHeartbeatReportOptions {
        const json: IHeartbeatReportOptions = {
        };
        if (this.actionPerformed) {
            json.actionPerformed = this.actionPerformed.getValue();
        }
        if (typeof this.actualTimeoutSeconds !== 'undefined') {
            json.actualTimeoutSeconds = this.actualTimeoutSeconds;
        }
        return json;
    }

    public getActionPerformed(): ActionPerformed | undefined {
        return this.actionPerformed;
    }
    public setActionPerformed(actionPerformed: ActionPerformed): void {
        this.actionPerformed = actionPerformed;
    }
    public getActualTimeoutSeconds(): number | undefined {
        return this.actualTimeoutSeconds;
    }
    public setActualTimeoutSeconds(actualTimeoutSeconds: number): void {
        this.actualTimeoutSeconds = actualTimeoutSeconds;
    }

}
