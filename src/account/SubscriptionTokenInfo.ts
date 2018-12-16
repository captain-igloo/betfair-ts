/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

export default class SubscriptionTokenInfo extends JsonMember {
    private subscriptionToken: string;
    private activatedDateTime: Date | null;
    private expiryDateTime: Date | null;
    private expiredDateTime: Date | null;
    private cancellationDateTime: Date | null;
    private subscriptionStatus: string;

    constructor(
        subscriptionToken: string = '',
        activatedDateTime: Date | null = null,
        expiryDateTime: Date | null = null,
        expiredDateTime: Date | null = null,
        cancellationDateTime: Date | null = null,
        subscriptionStatus: string = '',
    ) {
        super();
        this.subscriptionToken = subscriptionToken;
        this.activatedDateTime = activatedDateTime;
        this.expiryDateTime = expiryDateTime;
        this.expiredDateTime = expiredDateTime;
        this.cancellationDateTime = cancellationDateTime;
        this.subscriptionStatus = subscriptionStatus;
    }

    public fromJson(json: any): void {
        if ('subscriptionToken' in json) {
            this.subscriptionToken = json.subscriptionToken;
        }
        if ('activatedDateTime' in json) {
            this.activatedDateTime = new Date(json.activatedDateTime);
        }
        if ('expiryDateTime' in json) {
            this.expiryDateTime = new Date(json.expiryDateTime);
        }
        if ('expiredDateTime' in json) {
            this.expiredDateTime = new Date(json.expiredDateTime);
        }
        if ('cancellationDateTime' in json) {
            this.cancellationDateTime = new Date(json.cancellationDateTime);
        }
        if ('subscriptionStatus' in json) {
            this.subscriptionStatus = json.subscriptionStatus;
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.subscriptionToken !== null) {
            json.subscriptionToken = this.subscriptionToken;
        }
        if (this.activatedDateTime !== null) {
            json.activatedDateTime = this.activatedDateTime.toISOString();
        }
        if (this.expiryDateTime !== null) {
            json.expiryDateTime = this.expiryDateTime.toISOString();
        }
        if (this.expiredDateTime !== null) {
            json.expiredDateTime = this.expiredDateTime.toISOString();
        }
        if (this.cancellationDateTime !== null) {
            json.cancellationDateTime = this.cancellationDateTime.toISOString();
        }
        if (this.subscriptionStatus !== null) {
            json.subscriptionStatus = this.subscriptionStatus;
        }
        return json;
    }

    public isValid(): boolean {
        return this.subscriptionToken !== null;
    }

    public getSubscriptionToken(): string {
        return this.subscriptionToken;
    }
    public setSubscriptionToken(subscriptionToken: string): void {
        this.subscriptionToken = subscriptionToken;
    }
    public getActivatedDateTime(): Date | null {
        return this.activatedDateTime;
    }
    public setActivatedDateTime(activatedDateTime: Date | null): void {
        this.activatedDateTime = activatedDateTime;
    }
    public getExpiryDateTime(): Date | null {
        return this.expiryDateTime;
    }
    public setExpiryDateTime(expiryDateTime: Date | null): void {
        this.expiryDateTime = expiryDateTime;
    }
    public getExpiredDateTime(): Date | null {
        return this.expiredDateTime;
    }
    public setExpiredDateTime(expiredDateTime: Date | null): void {
        this.expiredDateTime = expiredDateTime;
    }
    public getCancellationDateTime(): Date | null {
        return this.cancellationDateTime;
    }
    public setCancellationDateTime(cancellationDateTime: Date | null): void {
        this.cancellationDateTime = cancellationDateTime;
    }
    public getSubscriptionStatus(): string {
        return this.subscriptionStatus;
    }
    public setSubscriptionStatus(subscriptionStatus: string): void {
        this.subscriptionStatus = subscriptionStatus;
    }

}
