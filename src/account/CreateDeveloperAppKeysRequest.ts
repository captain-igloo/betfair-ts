/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';


export interface ICreateDeveloperAppKeysRequestOptions {
    appName: string;
}

export default class CreateDeveloperAppKeysRequest extends JsonRequest {
    private appName: string;

    constructor(options: ICreateDeveloperAppKeysRequestOptions) {
        super();
        this.appName = options.appName;
    }

    public toJson(): ICreateDeveloperAppKeysRequestOptions {
        const json: ICreateDeveloperAppKeysRequestOptions = {
            appName: this.appName,
        };
        return json;
    }

    public getAppName(): string {
        return this.appName;
    }
    public setAppName(appName: string): void {
        this.appName = appName;
    }

}
