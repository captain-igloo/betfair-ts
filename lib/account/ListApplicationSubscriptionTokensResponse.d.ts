/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import ApplicationSubscription, { IApplicationSubscriptionOptions } from '../account/ApplicationSubscription';
export interface IListApplicationSubscriptionTokensResponseOptions {
    applicationSubscriptions?: Array<ApplicationSubscription | IApplicationSubscriptionOptions>;
}
export default class ListApplicationSubscriptionTokensResponse extends JsonResponse {
    private applicationSubscriptions?;
    constructor(options: Array<ApplicationSubscription | IApplicationSubscriptionOptions>);
    toJson(): IListApplicationSubscriptionTokensResponseOptions;
    getApplicationSubscriptions(): ApplicationSubscription[] | undefined;
    setApplicationSubscriptions(applicationSubscriptions: ApplicationSubscription[]): void;
}
