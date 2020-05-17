/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';


export interface IDeveloperAppVersionOptions {
    owner: string;
    versionId: number;
    version: string;
    applicationKey: string;
    delayData?: boolean;
    subscriptionRequired: boolean;
    ownerManaged: boolean;
    active: boolean;
    vendorId?: string;
    vendorSecret?: string;
}

export default class DeveloperAppVersion extends JsonMember {
    private owner: string;
    private versionId: number;
    private version: string;
    private applicationKey: string;
    private delayData?: boolean;
    private subscriptionRequired: boolean;
    private ownerManaged: boolean;
    private active: boolean;
    private vendorId?: string;
    private vendorSecret?: string;

    constructor(options: IDeveloperAppVersionOptions) {
        super();
        this.owner = options.owner;
        this.versionId = options.versionId;
        this.version = options.version;
        this.applicationKey = options.applicationKey;
        this.delayData = options.delayData;
        this.subscriptionRequired = options.subscriptionRequired;
        this.ownerManaged = options.ownerManaged;
        this.active = options.active;
        this.vendorId = options.vendorId;
        this.vendorSecret = options.vendorSecret;
    }

    public toJson(): IDeveloperAppVersionOptions {
        const json: IDeveloperAppVersionOptions = {
            owner: this.owner,
            versionId: this.versionId,
            version: this.version,
            applicationKey: this.applicationKey,
            subscriptionRequired: this.subscriptionRequired,
            ownerManaged: this.ownerManaged,
            active: this.active,
        };
        if (typeof this.delayData !== 'undefined') {
            json.delayData = this.delayData;
        }
        if (typeof this.vendorId !== 'undefined') {
            json.vendorId = this.vendorId;
        }
        if (typeof this.vendorSecret !== 'undefined') {
            json.vendorSecret = this.vendorSecret;
        }
        return json;
    }

    public getOwner(): string {
        return this.owner;
    }
    public setOwner(owner: string): void {
        this.owner = owner;
    }
    public getVersionId(): number {
        return this.versionId;
    }
    public setVersionId(versionId: number): void {
        this.versionId = versionId;
    }
    public getVersion(): string {
        return this.version;
    }
    public setVersion(version: string): void {
        this.version = version;
    }
    public getApplicationKey(): string {
        return this.applicationKey;
    }
    public setApplicationKey(applicationKey: string): void {
        this.applicationKey = applicationKey;
    }
    public getDelayData(): boolean | undefined {
        return this.delayData;
    }
    public setDelayData(delayData: boolean): void {
        this.delayData = delayData;
    }
    public getSubscriptionRequired(): boolean {
        return this.subscriptionRequired;
    }
    public setSubscriptionRequired(subscriptionRequired: boolean): void {
        this.subscriptionRequired = subscriptionRequired;
    }
    public getOwnerManaged(): boolean {
        return this.ownerManaged;
    }
    public setOwnerManaged(ownerManaged: boolean): void {
        this.ownerManaged = ownerManaged;
    }
    public getActive(): boolean {
        return this.active;
    }
    public setActive(active: boolean): void {
        this.active = active;
    }
    public getVendorId(): string | undefined {
        return this.vendorId;
    }
    public setVendorId(vendorId: string): void {
        this.vendorId = vendorId;
    }
    public getVendorSecret(): string | undefined {
        return this.vendorSecret;
    }
    public setVendorSecret(vendorSecret: string): void {
        this.vendorSecret = vendorSecret;
    }

}
