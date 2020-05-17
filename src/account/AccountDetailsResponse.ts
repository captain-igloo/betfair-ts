/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';


export interface IAccountDetailsResponseOptions {
    currencyCode?: string;
    firstName?: string;
    lastName?: string;
    localeCode?: string;
    region?: string;
    timezone?: string;
    discountRate?: number;
    pointsBalance?: number;
    countryCode?: string;
}

export default class AccountDetailsResponse extends JsonResponse {
    private currencyCode?: string;
    private firstName?: string;
    private lastName?: string;
    private localeCode?: string;
    private region?: string;
    private timezone?: string;
    private discountRate?: number;
    private pointsBalance?: number;
    private countryCode?: string;

    constructor(options: IAccountDetailsResponseOptions) {
        super();
        if (this.validateJson(options)) {
            this.currencyCode = options.currencyCode;
            this.firstName = options.firstName;
            this.lastName = options.lastName;
            this.localeCode = options.localeCode;
            this.region = options.region;
            this.timezone = options.timezone;
            this.discountRate = options.discountRate;
            this.pointsBalance = options.pointsBalance;
            this.countryCode = options.countryCode;
        }
    }

    public toJson(): IAccountDetailsResponseOptions {
        const json: IAccountDetailsResponseOptions = {
        };
        if (typeof this.currencyCode !== 'undefined') {
            json.currencyCode = this.currencyCode;
        }
        if (typeof this.firstName !== 'undefined') {
            json.firstName = this.firstName;
        }
        if (typeof this.lastName !== 'undefined') {
            json.lastName = this.lastName;
        }
        if (typeof this.localeCode !== 'undefined') {
            json.localeCode = this.localeCode;
        }
        if (typeof this.region !== 'undefined') {
            json.region = this.region;
        }
        if (typeof this.timezone !== 'undefined') {
            json.timezone = this.timezone;
        }
        if (typeof this.discountRate !== 'undefined') {
            json.discountRate = this.discountRate;
        }
        if (typeof this.pointsBalance !== 'undefined') {
            json.pointsBalance = this.pointsBalance;
        }
        if (typeof this.countryCode !== 'undefined') {
            json.countryCode = this.countryCode;
        }
        return json;
    }

    public getCurrencyCode(): string | undefined {
        return this.currencyCode;
    }
    public setCurrencyCode(currencyCode: string): void {
        this.currencyCode = currencyCode;
    }
    public getFirstName(): string | undefined {
        return this.firstName;
    }
    public setFirstName(firstName: string): void {
        this.firstName = firstName;
    }
    public getLastName(): string | undefined {
        return this.lastName;
    }
    public setLastName(lastName: string): void {
        this.lastName = lastName;
    }
    public getLocaleCode(): string | undefined {
        return this.localeCode;
    }
    public setLocaleCode(localeCode: string): void {
        this.localeCode = localeCode;
    }
    public getRegion(): string | undefined {
        return this.region;
    }
    public setRegion(region: string): void {
        this.region = region;
    }
    public getTimezone(): string | undefined {
        return this.timezone;
    }
    public setTimezone(timezone: string): void {
        this.timezone = timezone;
    }
    public getDiscountRate(): number | undefined {
        return this.discountRate;
    }
    public setDiscountRate(discountRate: number): void {
        this.discountRate = discountRate;
    }
    public getPointsBalance(): number | undefined {
        return this.pointsBalance;
    }
    public setPointsBalance(pointsBalance: number): void {
        this.pointsBalance = pointsBalance;
    }
    public getCountryCode(): string | undefined {
        return this.countryCode;
    }
    public setCountryCode(countryCode: string): void {
        this.countryCode = countryCode;
    }

}
