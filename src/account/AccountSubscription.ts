/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import SubscriptionTokenInfo from '../account/SubscriptionTokenInfo';

export default class AccountSubscription extends JsonMember {
    private subscriptionTokens: SubscriptionTokenInfo[];
    private applicationName: string;
    private applicationVersionId: string;

    constructor(
        subscriptionTokens: SubscriptionTokenInfo[] = [],
        applicationName: string = '',
        applicationVersionId: string = '',
    ) {
        super();
        this.subscriptionTokens = subscriptionTokens;
        this.applicationName = applicationName;
        this.applicationVersionId = applicationVersionId;
    }

    public fromJson(json: any): void {
        if ('subscriptionTokens' in json) {
            this.subscriptionTokens = json.subscriptionTokens.map((subscriptionTokensJson: any) => {
                const element = new SubscriptionTokenInfo();
                element.fromJson(subscriptionTokensJson);
                return element;
            });
        }
        if ('applicationName' in json) {
            this.applicationName = json.applicationName;
        }
        if ('applicationVersionId' in json) {
            this.applicationVersionId = json.applicationVersionId;
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.subscriptionTokens.length > 0) {
            json.subscriptionTokens = this.subscriptionTokens.map((value) => value.toJson());
        }
        if (this.applicationName !== null) {
            json.applicationName = this.applicationName;
        }
        if (this.applicationVersionId !== null) {
            json.applicationVersionId = this.applicationVersionId;
        }
        return json;
    }

    public isValid(): boolean {
        return this.subscriptionTokens.length > 0;
    }

    public getSubscriptionTokens(): SubscriptionTokenInfo[] {
        return this.subscriptionTokens;
    }
    public setSubscriptionTokens(subscriptionTokens: SubscriptionTokenInfo[]): void {
        this.subscriptionTokens = subscriptionTokens;
    }
    public getApplicationName(): string {
        return this.applicationName;
    }
    public setApplicationName(applicationName: string): void {
        this.applicationName = applicationName;
    }
    public getApplicationVersionId(): string {
        return this.applicationVersionId;
    }
    public setApplicationVersionId(applicationVersionId: string): void {
        this.applicationVersionId = applicationVersionId;
    }

}
