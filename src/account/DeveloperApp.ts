/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';

import DeveloperAppVersion, { IDeveloperAppVersionOptions } from '../account/DeveloperAppVersion';

export interface IDeveloperAppOptions {
    appName?: string;
    appId?: number;
    appVersions?: (DeveloperAppVersion | IDeveloperAppVersionOptions)[];
}

export default class DeveloperApp extends JsonResponse {
    private appName?: string;
    private appId?: number;
    private appVersions?: DeveloperAppVersion[];

    constructor(options: IDeveloperAppOptions) {
        super();
        if (this.validateJson(options)) {
            this.appName = options.appName;
            this.appId = options.appId;
            if (options.appVersions) {
                this.appVersions = this.arrayFromJson(options.appVersions, DeveloperAppVersion);
            }
        }
    }

    public toJson(): IDeveloperAppOptions {
        const json: IDeveloperAppOptions = {
        };
        if (typeof this.appName !== 'undefined') {
            json.appName = this.appName;
        }
        if (typeof this.appId !== 'undefined') {
            json.appId = this.appId;
        }
        if (this.appVersions && this.appVersions.length > 0) {
            json.appVersions = this.appVersions.map((value) => value.toJson());
        }
        return json;
    }

    public getAppName(): string | undefined {
        return this.appName;
    }
    public setAppName(appName: string): void {
        this.appName = appName;
    }
    public getAppId(): number | undefined {
        return this.appId;
    }
    public setAppId(appId: number): void {
        this.appId = appId;
    }
    public getAppVersions(): DeveloperAppVersion[] | undefined {
        return this.appVersions;
    }
    public setAppVersions(appVersions: DeveloperAppVersion[]): void {
        this.appVersions = appVersions;
    }

}
