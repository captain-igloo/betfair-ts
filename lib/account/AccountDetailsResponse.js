"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
class AccountDetailsResponse extends JsonResponse_1.default {
    constructor(currencyCode = '', firstName = '', lastName = '', localeCode = '', region = '', timezone = '', discountRate = null, pointsBalance = null, countryCode = '') {
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
    fromJson(json) {
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
    toJson() {
        const json = {};
        if (this.currencyCode !== '') {
            json.currencyCode = this.currencyCode;
        }
        if (this.firstName !== '') {
            json.firstName = this.firstName;
        }
        if (this.lastName !== '') {
            json.lastName = this.lastName;
        }
        if (this.localeCode !== '') {
            json.localeCode = this.localeCode;
        }
        if (this.region !== '') {
            json.region = this.region;
        }
        if (this.timezone !== '') {
            json.timezone = this.timezone;
        }
        if (this.discountRate !== null) {
            json.discountRate = this.discountRate;
        }
        if (this.pointsBalance !== null) {
            json.pointsBalance = this.pointsBalance;
        }
        if (this.countryCode !== '') {
            json.countryCode = this.countryCode;
        }
        return json;
    }
    isValid() {
        return true;
    }
    getCurrencyCode() {
        return this.currencyCode;
    }
    setCurrencyCode(currencyCode) {
        this.currencyCode = currencyCode;
    }
    getFirstName() {
        return this.firstName;
    }
    setFirstName(firstName) {
        this.firstName = firstName;
    }
    getLastName() {
        return this.lastName;
    }
    setLastName(lastName) {
        this.lastName = lastName;
    }
    getLocaleCode() {
        return this.localeCode;
    }
    setLocaleCode(localeCode) {
        this.localeCode = localeCode;
    }
    getRegion() {
        return this.region;
    }
    setRegion(region) {
        this.region = region;
    }
    getTimezone() {
        return this.timezone;
    }
    setTimezone(timezone) {
        this.timezone = timezone;
    }
    getDiscountRate() {
        return this.discountRate;
    }
    setDiscountRate(discountRate) {
        this.discountRate = discountRate;
    }
    getPointsBalance() {
        return this.pointsBalance;
    }
    setPointsBalance(pointsBalance) {
        this.pointsBalance = pointsBalance;
    }
    getCountryCode() {
        return this.countryCode;
    }
    setCountryCode(countryCode) {
        this.countryCode = countryCode;
    }
}
exports.default = AccountDetailsResponse;
//# sourceMappingURL=AccountDetailsResponse.js.map