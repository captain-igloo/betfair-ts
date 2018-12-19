/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import DeveloperApp from '../account/DeveloperApp';
import JsonResponse from '../JsonResponse';
export default class GetDeveloperAppKeysResponse extends JsonResponse {
    private developerApps;
    constructor(developerApps?: DeveloperApp[]);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getDeveloperApps(): DeveloperApp[];
    setDeveloperApps(developerApps: DeveloperApp[]): void;
}
