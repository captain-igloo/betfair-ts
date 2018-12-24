"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
class AuthorisationResponse extends JsonResponse_1.default {
    constructor(authorisationCode = '', redirectUrl = '') {
        super();
        this.authorisationCode = authorisationCode;
        this.redirectUrl = redirectUrl;
    }
    fromJson(json) {
        if (this.validateJson(json)) {
            if ('authorisationCode' in json) {
                this.authorisationCode = json.authorisationCode;
            }
            if ('redirectUrl' in json) {
                this.redirectUrl = json.redirectUrl;
            }
        }
    }
    toJson() {
        const json = {};
        if (this.authorisationCode !== null) {
            json.authorisationCode = this.authorisationCode;
        }
        if (this.redirectUrl !== null) {
            json.redirectUrl = this.redirectUrl;
        }
        return json;
    }
    isValid() {
        return this.authorisationCode !== null &&
            this.redirectUrl !== null;
    }
    getAuthorisationCode() {
        return this.authorisationCode;
    }
    setAuthorisationCode(authorisationCode) {
        this.authorisationCode = authorisationCode;
    }
    getRedirectUrl() {
        return this.redirectUrl;
    }
    setRedirectUrl(redirectUrl) {
        this.redirectUrl = redirectUrl;
    }
}
exports.default = AuthorisationResponse;
//# sourceMappingURL=AuthorisationResponse.js.map