/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';

import ActionPerformed from '../heartbeat/enum/ActionPerformed';

export default class HeartbeatReport extends JsonResponse {
    private actionPerformed: ActionPerformed;
    private actualTimeoutSeconds: number | null;

    constructor(
        actionPerformed: ActionPerformed = new ActionPerformed(),
        actualTimeoutSeconds: number | null = null,
    ) {
        super();
        this.actionPerformed = actionPerformed;
        this.actualTimeoutSeconds = actualTimeoutSeconds;
    }

    public fromJson(json: any): void {
        if (this.validateJson(json)) {
            if ('actionPerformed' in json) {
                this.actionPerformed.setValue(json.actionPerformed);
            }
            if ('actualTimeoutSeconds' in json) {
                this.actualTimeoutSeconds = json.actualTimeoutSeconds;
            }
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.actionPerformed.isValid()) {
            json.actionPerformed = this.actionPerformed.getValue();
        }
        if (this.actualTimeoutSeconds !== null) {
            json.actualTimeoutSeconds = this.actualTimeoutSeconds;
        }
        return json;
    }

    public isValid(): boolean {
        return this.actionPerformed.isValid() &&
            this.actualTimeoutSeconds !== null;
    }

    public getActionPerformed(): ActionPerformed {
        return this.actionPerformed;
    }
    public setActionPerformed(actionPerformed: ActionPerformed): void {
        this.actionPerformed = actionPerformed;
    }
    public getActualTimeoutSeconds(): number | null {
        return this.actualTimeoutSeconds;
    }
    public setActualTimeoutSeconds(actualTimeoutSeconds: number | null): void {
        this.actualTimeoutSeconds = actualTimeoutSeconds;
    }

}
