"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonRequest_1 = require("../JsonRequest");
const GrantType_1 = require("../account/enum/GrantType");
class TokenRequest extends JsonRequest_1.default {
    constructor(client_id = '', grant_type = new GrantType_1.default(), code = '', client_secret = '', refresh_token = '') {
        super();
        this.client_id = client_id;
        this.grant_type = grant_type;
        this.code = code;
        this.client_secret = client_secret;
        this.refresh_token = refresh_token;
    }
    fromJson(json) {
        if ('client_id' in json) {
            this.client_id = json.client_id;
        }
        if ('grant_type' in json) {
            this.grant_type.setValue(json.grant_type);
        }
        if ('code' in json) {
            this.code = json.code;
        }
        if ('client_secret' in json) {
            this.client_secret = json.client_secret;
        }
        if ('refresh_token' in json) {
            this.refresh_token = json.refresh_token;
        }
    }
    toJson() {
        const json = {};
        if (this.client_id !== null) {
            json.client_id = this.client_id;
        }
        if (this.grant_type.isValid()) {
            json.grant_type = this.grant_type;
        }
        if (this.code !== null) {
            json.code = this.code;
        }
        if (this.client_secret !== null) {
            json.client_secret = this.client_secret;
        }
        if (this.refresh_token !== null) {
            json.refresh_token = this.refresh_token;
        }
        return json;
    }
    isValid() {
        return this.client_id !== null &&
            this.grant_type.isValid() &&
            this.client_secret !== null;
    }
    getClient_id() {
        return this.client_id;
    }
    setClient_id(client_id) {
        this.client_id = client_id;
    }
    getGrant_type() {
        return this.grant_type;
    }
    setGrant_type(grant_type) {
        this.grant_type = grant_type;
    }
    getCode() {
        return this.code;
    }
    setCode(code) {
        this.code = code;
    }
    getClient_secret() {
        return this.client_secret;
    }
    setClient_secret(client_secret) {
        this.client_secret = client_secret;
    }
    getRefresh_token() {
        return this.refresh_token;
    }
    setRefresh_token(refresh_token) {
        this.refresh_token = refresh_token;
    }
}
exports.default = TokenRequest;
