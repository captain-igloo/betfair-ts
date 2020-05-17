"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
const ApplicationSubscription_1 = require("../account/ApplicationSubscription");
const TokenType_1 = require("../account/enum/TokenType");
class VendorAccessTokenInfo extends JsonResponse_1.default {
    constructor(options) {
        super();
        if (this.validateJson(options)) {
            this.accessToken = options.access_token;
            if (options.token_type) {
                this.tokenType = this.fromJson(options.token_type, TokenType_1.default);
            }
            this.expiresIn = options.expires_in;
            this.refreshToken = options.refresh_token;
            this.applicationSubscription = options.application_subscription && this.fromJson(options.application_subscription, ApplicationSubscription_1.default);
        }
    }
    toJson() {
        const json = {};
        if (typeof this.accessToken !== 'undefined') {
            json.access_token = this.accessToken;
        }
        if (this.tokenType) {
            json.token_type = this.tokenType.getValue();
        }
        if (typeof this.expiresIn !== 'undefined') {
            json.expires_in = this.expiresIn;
        }
        if (typeof this.refreshToken !== 'undefined') {
            json.refresh_token = this.refreshToken;
        }
        if (this.applicationSubscription) {
            json.application_subscription = this.applicationSubscription.toJson();
        }
        return json;
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