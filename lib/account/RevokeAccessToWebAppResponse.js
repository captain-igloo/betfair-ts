"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const Status_1 = require("../account/enum/Status");
const JsonResponse_1 = require("../JsonResponse");
class RevokeAccessToWebAppResponse extends JsonResponse_1.default {
    constructor(response = new Status_1.default()) {
        super();
        this.response = response;
    }
    fromJson(json) {
        if (this.validateJson(json)) {
            if ('response' in json) {
                this.response.setValue(json.response);
            }
        }
    }
    toJson() {
        const json = {};
        if (this.response.isValid()) {
            json.response = this.response;
        }
        return json;
    }
    isValid() {
        return this.response.isValid();
    }
    getResponse() {
        return this.response;
    }
    setResponse(response) {
        this.response = response;
    }
}
exports.default = RevokeAccessToWebAppResponse;
