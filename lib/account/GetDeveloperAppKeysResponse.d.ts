/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import DeveloperApp, { IDeveloperAppOptions } from '../account/DeveloperApp';
export interface IGetDeveloperAppKeysResponseOptions {
    developerApps?: (DeveloperApp | IDeveloperAppOptions)[];
}
export default class GetDeveloperAppKeysResponse extends JsonResponse {
    private developerApps?;
    constructor(options: (DeveloperApp | IDeveloperAppOptions)[]);
    toJson(): IGetDeveloperAppKeysResponseOptions;
    getDeveloperApps(): DeveloperApp[] | undefined;
    setDeveloperApps(developerApps: DeveloperApp[]): void;
}
