/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';


export default class CreateDeveloperAppKeysRequest extends JsonRequest {
    private appName: string;

    constructor(
        appName: string = '',
    ) {
        super();
        this.appName = appName;
    }

    public fromJson(json: any): void {
        if ('appName' in json) {
            this.appName = json.appName;
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.appName !== '') {
            json.appName = this.appName;
        }
        return json;
    }

    public isValid(): boolean {
        return this.appName !== '';
    }

    public getAppName(): string {
        return this.appName;
    }
    public setAppName(appName: string): void {
        this.appName = appName;
    }

}
