/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import DeveloperAppVersion from '../account/DeveloperAppVersion';
import JsonResponse from '../JsonResponse';

export default class DeveloperApp extends JsonResponse {
    private appName: string;
    private appId: number | null;
    private appVersions: DeveloperAppVersion[];

    constructor(
        appName: string = '',
        appId: number | null = null,
        appVersions: DeveloperAppVersion[] = [],
    ) {
        super();
        this.appName = appName;
        this.appId = appId;
        this.appVersions = appVersions;
    }

    public fromJson(json: any): void {
        if ('appName' in json) {
            this.appName = json.appName;
        }
        if ('appId' in json) {
            this.appId = json.appId;
        }
        if ('appVersions' in json) {
            this.appVersions = json.appVersions.map((appVersionsJson: any) => {
                const element = new DeveloperAppVersion();
                element.fromJson(appVersionsJson);
                return element;
            });
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.appName !== null) {
            json.appName = this.appName;
        }
        if (this.appId !== null) {
            json.appId = this.appId;
        }
        if (this.appVersions.length > 0) {
            json.appVersions = this.appVersions.map((value) => value.toJson());
        }
        return json;
    }

    public isValid(): boolean {
        return this.appName !== null &&
            this.appId !== null &&
            this.appVersions.length > 0;
    }

    public getAppName(): string {
        return this.appName;
    }
    public setAppName(appName: string): void {
        this.appName = appName;
    }
    public getAppId(): number | null {
        return this.appId;
    }
    public setAppId(appId: number | null): void {
        this.appId = appId;
    }
    public getAppVersions(): DeveloperAppVersion[] {
        return this.appVersions;
    }
    public setAppVersions(appVersions: DeveloperAppVersion[]): void {
        this.appVersions = appVersions;
    }

}
