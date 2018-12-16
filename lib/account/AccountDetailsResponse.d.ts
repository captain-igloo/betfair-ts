/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';
export default class AccountDetailsResponse extends JsonResponse {
    private currencyCode;
    private firstName;
    private lastName;
    private localeCode;
    private region;
    private timezone;
    private discountRate;
    private pointsBalance;
    private countryCode;
    constructor(currencyCode?: string, firstName?: string, lastName?: string, localeCode?: string, region?: string, timezone?: string, discountRate?: number | null, pointsBalance?: number | null, countryCode?: string);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getCurrencyCode(): string;
    setCurrencyCode(currencyCode: string): void;
    getFirstName(): string;
    setFirstName(firstName: string): void;
    getLastName(): string;
    setLastName(lastName: string): void;
    getLocaleCode(): string;
    setLocaleCode(localeCode: string): void;
    getRegion(): string;
    setRegion(region: string): void;
    getTimezone(): string;
    setTimezone(timezone: string): void;
    getDiscountRate(): number | null;
    setDiscountRate(discountRate: number | null): void;
    getPointsBalance(): number | null;
    setPointsBalance(pointsBalance: number | null): void;
    getCountryCode(): string;
    setCountryCode(countryCode: string): void;
}
