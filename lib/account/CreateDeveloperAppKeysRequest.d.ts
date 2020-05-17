/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
export interface ICreateDeveloperAppKeysRequestOptions {
    appName: string;
}
export default class CreateDeveloperAppKeysRequest extends JsonRequest {
    private appName;
    constructor(options: ICreateDeveloperAppKeysRequestOptions);
    toJson(): ICreateDeveloperAppKeysRequestOptions;
    getAppName(): string;
    setAppName(appName: string): void;
}
