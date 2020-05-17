/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import DeveloperAppVersion, { IDeveloperAppVersionOptions } from '../account/DeveloperAppVersion';
export interface IDeveloperAppOptions {
    appName?: string;
    appId?: number;
    appVersions?: Array<DeveloperAppVersion | IDeveloperAppVersionOptions>;
}
export default class DeveloperApp extends JsonResponse {
    private appName?;
    private appId?;
    private appVersions?;
    constructor(options: IDeveloperAppOptions);
    toJson(): IDeveloperAppOptions;
    getAppName(): string | undefined;
    setAppName(appName: string): void;
    getAppId(): number | undefined;
    setAppId(appId: number): void;
    getAppVersions(): DeveloperAppVersion[] | undefined;
    setAppVersions(appVersions: DeveloperAppVersion[]): void;
}
