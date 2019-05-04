"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonRequest_1 = require("../JsonRequest");
const GrantType_1 = require("../account/enum/GrantType");
class TokenRequest extends JsonRequest_1.default {
    constructor(clientId = '', grantType = new GrantType_1.default(), code = '', clientSecret = '', refreshToken = '') {
        super();
        this.clientId = clientId;
        this.grantType = grantType;
        this.code = code;
        this.clientSecret = clientSecret;
        this.refreshToken = refreshToken;
    }
    fromJson(json) {
        if ('client_id' in json) {
            this.clientId = json.client_id;
        }
        if ('grant_type' in json) {
            this.grantType.setValue(json.grant_type);
        }
        if ('code' in json) {
            this.code = json.code;
        }
        if ('client_secret' in json) {
            this.clientSecret = json.client_secret;
        }
        if ('refresh_token' in json) {
            this.refreshToken = json.refresh_token;
        }
    }
    toJson() {
        const json = {};
        if (this.clientId !== '') {
            json.client_id = this.clientId;
        }
        if (this.grantType.isValid()) {
            json.grant_type = this.grantType.getValue();
        }
        if (this.code !== '') {
            json.code = this.code;
        }
        if (this.clientSecret !== '') {
            json.client_secret = this.clientSecret;
        }
        if (this.refreshToken !== '') {
            json.refresh_token = this.refreshToken;
        }
        return json;
    }
    isValid() {
        return this.clientId !== '' &&
            this.grantType.isValid() &&
            this.clientSecret !== '';
    }
    getClientId() {
        return this.clientId;
    }
    setClientId(clientId) {
        this.clientId = clientId;
    }
    getGrantType() {
        return this.grantType;
    }
    setGrantType(grantType) {
        this.grantType = grantType;
    }
    getCode() {
        return this.code;
    }
    setCode(code) {
        this.code = code;
    }
    getClientSecret() {
        return this.clientSecret;
    }
    setClientSecret(clientSecret) {
        this.clientSecret = clientSecret;
    }
    getRefreshToken() {
        return this.refreshToken;
    }
    setRefreshToken(refreshToken) {
        this.refreshToken = refreshToken;
    }
}
exports.default = TokenRequest;
//# sourceMappingURL=TokenRequest.js.map