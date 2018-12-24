/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import DeveloperApp from '../account/DeveloperApp';
import JsonResponse from '../JsonResponse';

export default class GetDeveloperAppKeysResponse extends JsonResponse {
    private developerApps: DeveloperApp[];

    constructor(
        developerApps: DeveloperApp[] = [],
    ) {
        super();
        this.developerApps = developerApps;
    }

    public fromJson(json: any): void {
        if (this.validateJson(json)) {
            this.developerApps = json.map((developerAppsJson: any) => {
                const element = new DeveloperApp();
                element.fromJson(developerAppsJson);
                return element;
            });
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.developerApps.length > 0) {
            json.developerApps = this.developerApps.map((value) => value.toJson());
        }
        return json;
    }

    public isValid(): boolean {
        return this.developerApps.length > 0;
    }

    public getDeveloperApps(): DeveloperApp[] {
        return this.developerApps;
    }
    public setDeveloperApps(developerApps: DeveloperApp[]): void {
        this.developerApps = developerApps;
    }

}
