/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';


export interface ISubscriptionHistoryOptions {
    subscriptionToken: string;
    expiryDateTime?: Date | string;
    expiredDateTime?: Date | string;
    createdDateTime?: Date | string;
    activationDateTime?: Date | string;
    cancellationDateTime?: Date | string;
    subscriptionStatus?: string;
    clientReference?: string;
}

export default class SubscriptionHistory extends JsonMember {
    private subscriptionToken: string;
    private expiryDateTime?: Date;
    private expiredDateTime?: Date;
    private createdDateTime?: Date;
    private activationDateTime?: Date;
    private cancellationDateTime?: Date;
    private subscriptionStatus?: string;
    private clientReference?: string;

    constructor(options: ISubscriptionHistoryOptions) {
        super();
        this.subscriptionToken = options.subscriptionToken;
        if (options.expiryDateTime) {
            this.expiryDateTime = this.fromJson(options.expiryDateTime, Date);
        }
        if (options.expiredDateTime) {
            this.expiredDateTime = this.fromJson(options.expiredDateTime, Date);
        }
        if (options.createdDateTime) {
            this.createdDateTime = this.fromJson(options.createdDateTime, Date);
        }
        if (options.activationDateTime) {
            this.activationDateTime = this.fromJson(options.activationDateTime, Date);
        }
        if (options.cancellationDateTime) {
            this.cancellationDateTime = this.fromJson(options.cancellationDateTime, Date);
        }
        this.subscriptionStatus = options.subscriptionStatus;
        this.clientReference = options.clientReference;
    }

    public toJson(): ISubscriptionHistoryOptions {
        const json: ISubscriptionHistoryOptions = {
            subscriptionToken: this.subscriptionToken,
        };
        if (typeof this.expiryDateTime !== 'undefined') {
            json.expiryDateTime = this.expiryDateTime.toISOString();
        }
        if (typeof this.expiredDateTime !== 'undefined') {
            json.expiredDateTime = this.expiredDateTime.toISOString();
        }
        if (typeof this.createdDateTime !== 'undefined') {
            json.createdDateTime = this.createdDateTime.toISOString();
        }
        if (typeof this.activationDateTime !== 'undefined') {
            json.activationDateTime = this.activationDateTime.toISOString();
        }
        if (typeof this.cancellationDateTime !== 'undefined') {
            json.cancellationDateTime = this.cancellationDateTime.toISOString();
        }
        if (typeof this.subscriptionStatus !== 'undefined') {
            json.subscriptionStatus = this.subscriptionStatus;
        }
        if (typeof this.clientReference !== 'undefined') {
            json.clientReference = this.clientReference;
        }
        return json;
    }

    public getSubscriptionToken(): string {
        return this.subscriptionToken;
    }
    public setSubscriptionToken(subscriptionToken: string): void {
        this.subscriptionToken = subscriptionToken;
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
    public getCreatedDateTime(): Date | undefined {
        return this.createdDateTime;
    }
    public setCreatedDateTime(createdDateTime: Date): void {
        this.createdDateTime = createdDateTime;
    }
    public getActivationDateTime(): Date | undefined {
        return this.activationDateTime;
    }
    public setActivationDateTime(activationDateTime: Date): void {
        this.activationDateTime = activationDateTime;
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
    public getClientReference(): string | undefined {
        return this.clientReference;
    }
    public setClientReference(clientReference: string): void {
        this.clientReference = clientReference;
    }

}
