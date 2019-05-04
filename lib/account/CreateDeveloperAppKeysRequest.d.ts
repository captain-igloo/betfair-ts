/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
export default class CreateDeveloperAppKeysRequest extends JsonRequest {
    private appName;
    constructor(appName?: string);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getAppName(): string;
    setAppName(appName: string): void;
}
