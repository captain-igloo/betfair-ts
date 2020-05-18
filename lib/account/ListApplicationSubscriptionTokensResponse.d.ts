/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
import ApplicationSubscription, { IApplicationSubscriptionOptions } from '../account/ApplicationSubscription';
export interface IListApplicationSubscriptionTokensResponseOptions {
    applicationSubscriptions?: (ApplicationSubscription | IApplicationSubscriptionOptions)[];
}
export default class ListApplicationSubscriptionTokensResponse extends JsonResponse {
    private applicationSubscriptions?;
    constructor(options: (ApplicationSubscription | IApplicationSubscriptionOptions)[]);
    toJson(): IListApplicationSubscriptionTokensResponseOptions;
    getApplicationSubscriptions(): ApplicationSubscription[] | undefined;
    setApplicationSubscriptions(applicationSubscriptions: ApplicationSubscription[]): void;
}
