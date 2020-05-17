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
    private currencyCode?;
    private firstName?;
    private lastName?;
    private localeCode?;
    private region?;
    private timezone?;
    private discountRate?;
    private pointsBalance?;
    private countryCode?;
    constructor(options: IAccountDetailsResponseOptions);
    toJson(): IAccountDetailsResponseOptions;
    getCurrencyCode(): string | undefined;
    setCurrencyCode(currencyCode: string): void;
    getFirstName(): string | undefined;
    setFirstName(firstName: string): void;
    getLastName(): string | undefined;
    setLastName(lastName: string): void;
    getLocaleCode(): string | undefined;
    setLocaleCode(localeCode: string): void;
    getRegion(): string | undefined;
    setRegion(region: string): void;
    getTimezone(): string | undefined;
    setTimezone(timezone: string): void;
    getDiscountRate(): number | undefined;
    setDiscountRate(discountRate: number): void;
    getPointsBalance(): number | undefined;
    setPointsBalance(pointsBalance: number): void;
    getCountryCode(): string | undefined;
    setCountryCode(countryCode: string): void;
}
