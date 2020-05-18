/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import SubscriptionTokenInfo, { ISubscriptionTokenInfoOptions } from '../account/SubscriptionTokenInfo';
export interface IAccountSubscriptionOptions {
    subscriptionTokens: (SubscriptionTokenInfo | ISubscriptionTokenInfoOptions)[];
    applicationName?: string;
    applicationVersionId?: string;
}
export default class AccountSubscription extends JsonMember {
    private subscriptionTokens;
    private applicationName?;
    private applicationVersionId?;
    constructor(options: IAccountSubscriptionOptions);
    toJson(): IAccountSubscriptionOptions;
    getSubscriptionTokens(): SubscriptionTokenInfo[];
    setSubscriptionTokens(subscriptionTokens: SubscriptionTokenInfo[]): void;
    getApplicationName(): string | undefined;
    setApplicationName(applicationName: string): void;
    getApplicationVersionId(): string | undefined;
    setApplicationVersionId(applicationVersionId: string): void;
}
