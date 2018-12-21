/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';

export default class AccountDetailsResponse extends JsonResponse {
    private currencyCode: string;
    private firstName: string;
    private lastName: string;
    private localeCode: string;
    private region: string;
    private timezone: string;
    private discountRate: number | null;
    private pointsBalance: number | null;
    private countryCode: string;

    constructor(
        currencyCode: string = '',
        firstName: string = '',
        lastName: string = '',
        localeCode: string = '',
        region: string = '',
        timezone: string = '',
        discountRate: number | null = null,
        pointsBalance: number | null = null,
        countryCode: string = '',
    ) {
        super();
        this.currencyCode = currencyCode;
        this.firstName = firstName;
        this.lastName = lastName;
        this.localeCode = localeCode;
        this.region = region;
        this.timezone = timezone;
        this.discountRate = discountRate;
        this.pointsBalance = pointsBalance;
        this.countryCode = countryCode;
    }

    public fromJson(json: any): void {
        if (this.validateJson(json)) {
            if ('currencyCode' in json) {
                this.currencyCode = json.currencyCode;
            }
            if ('firstName' in json) {
                this.firstName = json.firstName;
            }
            if ('lastName' in json) {
                this.lastName = json.lastName;
            }
            if ('localeCode' in json) {
                this.localeCode = json.localeCode;
            }
            if ('region' in json) {
                this.region = json.region;
            }
            if ('timezone' in json) {
                this.timezone = json.timezone;
            }
            if ('discountRate' in json) {
                this.discountRate = json.discountRate;
            }
            if ('pointsBalance' in json) {
                this.pointsBalance = json.pointsBalance;
            }
            if ('countryCode' in json) {
                this.countryCode = json.countryCode;
            }
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.currencyCode !== null) {
            json.currencyCode = this.currencyCode;
        }
        if (this.firstName !== null) {
            json.firstName = this.firstName;
        }
        if (this.lastName !== null) {
            json.lastName = this.lastName;
        }
        if (this.localeCode !== null) {
            json.localeCode = this.localeCode;
        }
        if (this.region !== null) {
            json.region = this.region;
        }
        if (this.timezone !== null) {
            json.timezone = this.timezone;
        }
        if (this.discountRate !== null) {
            json.discountRate = this.discountRate;
        }
        if (this.pointsBalance !== null) {
            json.pointsBalance = this.pointsBalance;
        }
        if (this.countryCode !== null) {
            json.countryCode = this.countryCode;
        }
        return json;
    }

    public isValid(): boolean {
        return true;
    }

    public getCurrencyCode(): string {
        return this.currencyCode;
    }
    public setCurrencyCode(currencyCode: string): void {
        this.currencyCode = currencyCode;
    }
    public getFirstName(): string {
        return this.firstName;
    }
    public setFirstName(firstName: string): void {
        this.firstName = firstName;
    }
    public getLastName(): string {
        return this.lastName;
    }
    public setLastName(lastName: string): void {
        this.lastName = lastName;
    }
    public getLocaleCode(): string {
        return this.localeCode;
    }
    public setLocaleCode(localeCode: string): void {
        this.localeCode = localeCode;
    }
    public getRegion(): string {
        return this.region;
    }
    public setRegion(region: string): void {
        this.region = region;
    }
    public getTimezone(): string {
        return this.timezone;
    }
    public setTimezone(timezone: string): void {
        this.timezone = timezone;
    }
    public getDiscountRate(): number | null {
        return this.discountRate;
    }
    public setDiscountRate(discountRate: number | null): void {
        this.discountRate = discountRate;
    }
    public getPointsBalance(): number | null {
        return this.pointsBalance;
    }
    public setPointsBalance(pointsBalance: number | null): void {
        this.pointsBalance = pointsBalance;
    }
    public getCountryCode(): string {
        return this.countryCode;
    }
    public setCountryCode(countryCode: string): void {
        this.countryCode = countryCode;
    }

}
