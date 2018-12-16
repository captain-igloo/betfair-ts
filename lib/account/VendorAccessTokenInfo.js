"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
const TokenType_1 = require("../account/enum/TokenType");
const ApplicationSubscription_1 = require("../account/ApplicationSubscription");
class VendorAccessTokenInfo extends JsonResponse_1.default {
    constructor(access_token = '', token_type = new TokenType_1.default(), expires_in = null, refresh_token = '', application_subscription = new ApplicationSubscription_1.default()) {
        super();
        this.access_token = access_token;
        this.token_type = token_type;
        this.expires_in = expires_in;
        this.refresh_token = refresh_token;
        this.application_subscription = application_subscription;
    }
    fromJson(json) {
        if ('access_token' in json) {
            this.access_token = json.access_token;
        }
        if ('token_type' in json) {
            this.token_type.setValue(json.token_type);
        }
        if ('expires_in' in json) {
            this.expires_in = json.expires_in;
        }
        if ('refresh_token' in json) {
            this.refresh_token = json.refresh_token;
        }
        if ('application_subscription' in json) {
            this.application_subscription.fromJson(json.application_subscription);
        }
    }
    toJson() {
        const json = {};
        if (this.access_token !== null) {
            json.access_token = this.access_token;
        }
        if (this.token_type.isValid()) {
            json.token_type = this.token_type;
        }
        if (this.expires_in !== null) {
            json.expires_in = this.expires_in;
        }
        if (this.refresh_token !== null) {
            json.refresh_token = this.refresh_token;
        }
        if (this.application_subscription.isValid()) {
            json.application_subscription = this.application_subscription.toJson();
        }
        return json;
    }
    isValid() {
        return this.access_token !== null &&
            this.token_type.isValid() &&
            this.expires_in !== null &&
            this.refresh_token !== null &&
            this.application_subscription.isValid();
    }
    getAccess_token() {
        return this.access_token;
    }
    setAccess_token(access_token) {
        this.access_token = access_token;
    }
    getToken_type() {
        return this.token_type;
    }
    setToken_type(token_type) {
        this.token_type = token_type;
    }
    getExpires_in() {
        return this.expires_in;
    }
    setExpires_in(expires_in) {
        this.expires_in = expires_in;
    }
    getRefresh_token() {
        return this.refresh_token;
    }
    setRefresh_token(refresh_token) {
        this.refresh_token = refresh_token;
    }
    getApplication_subscription() {
        return this.application_subscription;
    }
    setApplication_subscription(application_subscription) {
        this.application_subscription = application_subscription;
    }
}
exports.default = VendorAccessTokenInfo;
