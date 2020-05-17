"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonRequest_1 = require("../JsonRequest");
const GrantType_1 = require("../account/enum/GrantType");
class TokenRequest extends JsonRequest_1.default {
    constructor(options) {
        super();
        this.clientId = options.client_id;
        this.grantType = this.fromJson(options.grant_type, GrantType_1.default);
        this.code = options.code;
        this.clientSecret = options.client_secret;
        this.refreshToken = options.refresh_token;
    }
    toJson() {
        const json = {
            client_id: this.clientId,
            grant_type: this.grantType.getValue(),
            client_secret: this.clientSecret,
        };
        if (typeof this.code !== 'undefined') {
            json.code = this.code;
        }
        if (typeof this.refreshToken !== 'undefined') {
            json.refresh_token = this.refreshToken;
        }
        return json;
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