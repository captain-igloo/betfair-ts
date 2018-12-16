/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';

export default class RevokeAccessToWebAppRequest extends JsonRequest {
    private vendorId: number | null;

    constructor(
        vendorId: number | null = null,
    ) {
        super();
        this.vendorId = vendorId;
    }

    public fromJson(json: any): void {
        if ('vendorId' in json) {
            this.vendorId = json.vendorId;
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.vendorId !== null) {
            json.vendorId = this.vendorId;
        }
        return json;
    }

    public isValid(): boolean {
        return this.vendorId !== null;
    }

    public getVendorId(): number | null {
        return this.vendorId;
    }
    public setVendorId(vendorId: number | null): void {
        this.vendorId = vendorId;
    }

}
