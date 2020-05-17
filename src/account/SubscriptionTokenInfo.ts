/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';


export interface ISubscriptionTokenInfoOptions {
    subscriptionToken: string;
    activatedDateTime?: Date | string;
    expiryDateTime?: Date | string;
    expiredDateTime?: Date | string;
    cancellationDateTime?: Date | string;
    subscriptionStatus?: string;
}

export default class SubscriptionTokenInfo extends JsonMember {
    private subscriptionToken: string;
    private activatedDateTime?: Date;
    private expiryDateTime?: Date;
    private expiredDateTime?: Date;
    private cancellationDateTime?: Date;
    private subscriptionStatus?: string;

    constructor(options: ISubscriptionTokenInfoOptions) {
        super();
        this.subscriptionToken = options.subscriptionToken;
        if (options.activatedDateTime) {
            this.activatedDateTime = this.fromJson(options.activatedDateTime, Date);
        }
        if (options.expiryDateTime) {
            this.expiryDateTime = this.fromJson(options.expiryDateTime, Date);
        }
        if (options.expiredDateTime) {
            this.expiredDateTime = this.fromJson(options.expiredDateTime, Date);
        }
        if (options.cancellationDateTime) {
            this.cancellationDateTime = this.fromJson(options.cancellationDateTime, Date);
        }
        this.subscriptionStatus = options.subscriptionStatus;
    }

    public toJson(): ISubscriptionTokenInfoOptions {
        const json: ISubscriptionTokenInfoOptions = {
            subscriptionToken: this.subscriptionToken,
        };
        if (typeof this.activatedDateTime !== 'undefined') {
            json.activatedDateTime = this.activatedDateTime.toISOString();
        }
        if (typeof this.expiryDateTime !== 'undefined') {
            json.expiryDateTime = this.expiryDateTime.toISOString();
        }
        if (typeof this.expiredDateTime !== 'undefined') {
            json.expiredDateTime = this.expiredDateTime.toISOString();
        }
        if (typeof this.cancellationDateTime !== 'undefined') {
            json.cancellationDateTime = this.cancellationDateTime.toISOString();
        }
        if (typeof this.subscriptionStatus !== 'undefined') {
            json.subscriptionStatus = this.subscriptionStatus;
        }
        return json;
    }

    public getSubscriptionToken(): string {
        return this.subscriptionToken;
    }
    public setSubscriptionToken(subscriptionToken: string): void {
        this.subscriptionToken = subscriptionToken;
    }
    public getActivatedDateTime(): Date | undefined {
        return this.activatedDateTime;
    }
    public setActivatedDateTime(activatedDateTime: Date): void {
        this.activatedDateTime = activatedDateTime;
    }
    public getExpiryDateTime(): Date | undefined {
        return this.expiryDateTime;
    }
    public setExpiryDateTime(expiryDateTime: Date): void {
        this.expiryDateTime = expiryDateTime;
    }
    public getExpiredDateTime(): Date | undefined {
        return this.expiredDateTime;
    }
    public setExpiredDateTime(expiredDateTime: Date): void {
        this.expiredDateTime = expiredDateTime;
    }
    public getCancellationDateTime(): Date | undefined {
        return this.cancellationDateTime;
    }
    public setCancellationDateTime(cancellationDateTime: Date): void {
        this.cancellationDateTime = cancellationDateTime;
    }
    public getSubscriptionStatus(): string | undefined {
        return this.subscriptionStatus;
    }
    public setSubscriptionStatus(subscriptionStatus: string): void {
        this.subscriptionStatus = subscriptionStatus;
    }

}
