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
    private subscriptionTokens: SubscriptionTokenInfo[];
    private applicationName?: string;
    private applicationVersionId?: string;

    constructor(options: IAccountSubscriptionOptions) {
        super();
        this.subscriptionTokens = this.arrayFromJson(options.subscriptionTokens, SubscriptionTokenInfo);
        this.applicationName = options.applicationName;
        this.applicationVersionId = options.applicationVersionId;
    }

    public toJson(): IAccountSubscriptionOptions {
        const json: IAccountSubscriptionOptions = {
            subscriptionTokens: this.subscriptionTokens.map((value) => value.toJson()),
        };
        if (typeof this.applicationName !== 'undefined') {
            json.applicationName = this.applicationName;
        }
        if (typeof this.applicationVersionId !== 'undefined') {
            json.applicationVersionId = this.applicationVersionId;
        }
        return json;
    }

    public getSubscriptionTokens(): SubscriptionTokenInfo[] {
        return this.subscriptionTokens;
    }
    public setSubscriptionTokens(subscriptionTokens: SubscriptionTokenInfo[]): void {
        this.subscriptionTokens = subscriptionTokens;
    }
    public getApplicationName(): string | undefined {
        return this.applicationName;
    }
    public setApplicationName(applicationName: string): void {
        this.applicationName = applicationName;
    }
    public getApplicationVersionId(): string | undefined {
        return this.applicationVersionId;
    }
    public setApplicationVersionId(applicationVersionId: string): void {
        this.applicationVersionId = applicationVersionId;
    }

}
