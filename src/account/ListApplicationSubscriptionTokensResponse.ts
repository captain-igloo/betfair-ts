/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';

import ApplicationSubscription, { IApplicationSubscriptionOptions } from '../account/ApplicationSubscription';

export interface IListApplicationSubscriptionTokensResponseOptions {
    applicationSubscriptions?: Array<ApplicationSubscription | IApplicationSubscriptionOptions>;
}

export default class ListApplicationSubscriptionTokensResponse extends JsonResponse {
    private applicationSubscriptions?: ApplicationSubscription[];

    constructor(options: Array<ApplicationSubscription | IApplicationSubscriptionOptions>) {
        super();
        if (this.validateJson(options)) {
            if (options) {
                this.applicationSubscriptions = this.arrayFromJson(options, ApplicationSubscription);
            }
        }
    }

    public toJson(): IListApplicationSubscriptionTokensResponseOptions {
        throw new Error('not implemented');
    }

    public getApplicationSubscriptions(): ApplicationSubscription[] | undefined {
        return this.applicationSubscriptions;
    }
    public setApplicationSubscriptions(applicationSubscriptions: ApplicationSubscription[]): void {
        this.applicationSubscriptions = applicationSubscriptions;
    }

}
