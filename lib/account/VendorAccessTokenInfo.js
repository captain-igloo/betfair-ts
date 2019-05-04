"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
const ApplicationSubscription_1 = require("../account/ApplicationSubscription");
const TokenType_1 = require("../account/enum/TokenType");
class VendorAccessTokenInfo extends JsonResponse_1.default {
    constructor(accessToken = '', tokenType = new TokenType_1.default(), expiresIn = null, refreshToken = '', applicationSubscription = new ApplicationSubscription_1.default()) {
        super();
        this.accessToken = accessToken;
        this.tokenType = tokenType;
        this.expiresIn = expiresIn;
        this.refreshToken = refreshToken;
        this.applicationSubscription = applicationSubscription;
    }
    fromJson(json) {
        if (this.validateJson(json)) {
            if ('access_token' in json) {
                this.accessToken = json.access_token;
            }
            if ('token_type' in json) {
                this.tokenType.setValue(json.token_type);
            }
            if ('expires_in' in json) {
                this.expiresIn = json.expires_in;
            }
            if ('refresh_token' in json) {
                this.refreshToken = json.refresh_token;
            }
            if ('application_subscription' in json) {
                this.applicationSubscription.fromJson(json.application_subscription);
            }
        }
    }
    toJson() {
        const json = {};
        if (this.accessToken !== '') {
            json.access_token = this.accessToken;
        }
        if (this.tokenType.isValid()) {
            json.token_type = this.tokenType.getValue();
        }
        if (this.expiresIn !== null) {
            json.expires_in = this.expiresIn;
        }
        if (this.refreshToken !== '') {
            json.refresh_token = this.refreshToken;
        }
        if (this.applicationSubscription.isValid()) {
            json.application_subscription = this.applicationSubscription.toJson();
        }
        return json;
    }
    isValid() {
        return this.accessToken !== '' &&
            this.tokenType.isValid() &&
            this.expiresIn !== null &&
            this.refreshToken !== '' &&
            this.applicationSubscription.isValid();
    }
    getAccessToken() {
        return this.accessToken;
    }
    setAccessToken(accessToken) {
        this.accessToken = accessToken;
    }
    getTokenType() {
        return this.tokenType;
    }
    setTokenType(tokenType) {
        this.tokenType = tokenType;
    }
    getExpiresIn() {
        return this.expiresIn;
    }
    setExpiresIn(expiresIn) {
        this.expiresIn = expiresIn;
    }
    getRefreshToken() {
        return this.refreshToken;
    }
    setRefreshToken(refreshToken) {
        this.refreshToken = refreshToken;
    }
    getApplicationSubscription() {
        return this.applicationSubscription;
    }
    setApplicationSubscription(applicationSubscription) {
        this.applicationSubscription = applicationSubscription;
    }
}
exports.default = VendorAccessTokenInfo;
//# sourceMappingURL=VendorAccessTokenInfo.js.map