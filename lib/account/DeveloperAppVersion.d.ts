/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
export default class DeveloperAppVersion extends JsonMember {
    private owner;
    private versionId;
    private version;
    private applicationKey;
    private delayData;
    private subscriptionRequired;
    private ownerManaged;
    private active;
    private vendorId;
    private vendorSecret;
    constructor(owner?: string, versionId?: number | null, version?: string, applicationKey?: string, delayData?: boolean | null, subscriptionRequired?: boolean | null, ownerManaged?: boolean | null, active?: boolean | null, vendorId?: string, vendorSecret?: string);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getOwner(): string;
    setOwner(owner: string): void;
    getVersionId(): number | null;
    setVersionId(versionId: number | null): void;
    getVersion(): string;
    setVersion(version: string): void;
    getApplicationKey(): string;
    setApplicationKey(applicationKey: string): void;
    getDelayData(): boolean | null;
    setDelayData(delayData: boolean | null): void;
    getSubscriptionRequired(): boolean | null;
    setSubscriptionRequired(subscriptionRequired: boolean | null): void;
    getOwnerManaged(): boolean | null;
    setOwnerManaged(ownerManaged: boolean | null): void;
    getActive(): boolean | null;
    setActive(active: boolean | null): void;
    getVendorId(): string;
    setVendorId(vendorId: string): void;
    getVendorSecret(): string;
    setVendorSecret(vendorSecret: string): void;
}
