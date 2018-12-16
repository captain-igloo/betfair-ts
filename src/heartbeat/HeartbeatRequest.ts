/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';

export default class HeartbeatRequest extends JsonRequest {
    private preferredTimeoutSeconds: number | null;

    constructor(
        preferredTimeoutSeconds: number | null = null,
    ) {
        super();
        this.preferredTimeoutSeconds = preferredTimeoutSeconds;
    }

    public fromJson(json: any): void {
        if ('preferredTimeoutSeconds' in json) {
            this.preferredTimeoutSeconds = json.preferredTimeoutSeconds;
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.preferredTimeoutSeconds !== null) {
            json.preferredTimeoutSeconds = this.preferredTimeoutSeconds;
        }
        return json;
    }

    public isValid(): boolean {
        return this.preferredTimeoutSeconds !== null;
    }

    public getPreferredTimeoutSeconds(): number | null {
        return this.preferredTimeoutSeconds;
    }
    public setPreferredTimeoutSeconds(preferredTimeoutSeconds: number | null): void {
        this.preferredTimeoutSeconds = preferredTimeoutSeconds;
    }

}
