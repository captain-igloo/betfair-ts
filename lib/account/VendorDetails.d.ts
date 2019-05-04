/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
export default class VendorDetails extends JsonResponse {
    private appVersionId;
    private vendorName;
    private redirectUrl;
    constructor(appVersionId?: number | null, vendorName?: string, redirectUrl?: string);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getAppVersionId(): number | null;
    setAppVersionId(appVersionId: number | null): void;
    getVendorName(): string;
    setVendorName(vendorName: string): void;
    getRedirectUrl(): string;
    setRedirectUrl(redirectUrl: string): void;
}
