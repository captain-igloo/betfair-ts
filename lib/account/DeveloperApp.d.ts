/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import DeveloperAppVersion from '../account/DeveloperAppVersion';
import JsonResponse from '../JsonResponse';
export default class DeveloperApp extends JsonResponse {
    private appName;
    private appId;
    private appVersions;
    constructor(appName?: string, appId?: number | null, appVersions?: DeveloperAppVersion[]);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getAppName(): string;
    setAppName(appName: string): void;
    getAppId(): number | null;
    setAppId(appId: number | null): void;
    getAppVersions(): DeveloperAppVersion[];
    setAppVersions(appVersions: DeveloperAppVersion[]): void;
}
