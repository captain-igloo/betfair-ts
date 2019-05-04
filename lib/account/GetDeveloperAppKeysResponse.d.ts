/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import DeveloperApp from '../account/DeveloperApp';
export default class GetDeveloperAppKeysResponse extends JsonResponse {
    private developerApps;
    constructor(developerApps?: DeveloperApp[]);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getDeveloperApps(): DeveloperApp[];
    setDeveloperApps(developerApps: DeveloperApp[]): void;
}
