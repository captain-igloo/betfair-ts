"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
class AuthorisationResponse extends JsonResponse_1.default {
    constructor(options) {
        super();
        if (this.validateJson(options)) {
            this.authorisationCode = options.authorisationCode;
            this.redirectUrl = options.redirectUrl;
        }
    }
    toJson() {
        const json = {};
        if (typeof this.authorisationCode !== 'undefined') {
            json.authorisationCode = this.authorisationCode;
        }
        if (typeof this.redirectUrl !== 'undefined') {
            json.redirectUrl = this.redirectUrl;
        }
        return json;
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