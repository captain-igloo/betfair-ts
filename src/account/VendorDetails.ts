/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';


export default class VendorDetails extends JsonResponse {
    private appVersionId: number | null;
    private vendorName: string;
    private redirectUrl: string;

    constructor(
        appVersionId: number | null = null,
        vendorName: string = '',
        redirectUrl: string = '',
    ) {
        super();
        this.appVersionId = appVersionId;
        this.vendorName = vendorName;
        this.redirectUrl = redirectUrl;
    }

    public fromJson(json: any): void {
        if (this.validateJson(json)) {
            if ('appVersionId' in json) {
                this.appVersionId = json.appVersionId;
            }
            if ('vendorName' in json) {
                this.vendorName = json.vendorName;
            }
            if ('redirectUrl' in json) {
                this.redirectUrl = json.redirectUrl;
            }
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.appVersionId !== null) {
            json.appVersionId = this.appVersionId;
        }
        if (this.vendorName !== '') {
            json.vendorName = this.vendorName;
        }
        if (this.redirectUrl !== '') {
            json.redirectUrl = this.redirectUrl;
        }
        return json;
    }

    public isValid(): boolean {
        return this.appVersionId !== null &&
            this.vendorName !== '';
    }

    public getAppVersionId(): number | null {
        return this.appVersionId;
    }
    public setAppVersionId(appVersionId: number | null): void {
        this.appVersionId = appVersionId;
    }
    public getVendorName(): string {
        return this.vendorName;
    }
    public setVendorName(vendorName: string): void {
        this.vendorName = vendorName;
    }
    public getRedirectUrl(): string {
        return this.redirectUrl;
    }
    public setRedirectUrl(redirectUrl: string): void {
        this.redirectUrl = redirectUrl;
    }

}
