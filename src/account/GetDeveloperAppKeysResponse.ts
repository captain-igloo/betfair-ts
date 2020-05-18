/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';

import DeveloperApp, { IDeveloperAppOptions } from '../account/DeveloperApp';

export interface IGetDeveloperAppKeysResponseOptions {
    developerApps?: (DeveloperApp | IDeveloperAppOptions)[];
}

export default class GetDeveloperAppKeysResponse extends JsonResponse {
    private developerApps?: DeveloperApp[];

    constructor(options: (DeveloperApp | IDeveloperAppOptions)[]) {
        super();
        if (this.validateJson(options)) {
            if (options) {
                this.developerApps = this.arrayFromJson(options, DeveloperApp);
            }
        }
    }

    public toJson(): IGetDeveloperAppKeysResponseOptions {
        throw new Error('not implemented');
    }

    public getDeveloperApps(): DeveloperApp[] | undefined {
        return this.developerApps;
    }
    public setDeveloperApps(developerApps: DeveloperApp[]): void {
        this.developerApps = developerApps;
    }

}
