"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class JsonResponse {
    constructor() {
        this.success = false;
        this.faultCode = '';
        this.faultString = '';
    }
    validateJson(json) {
        this.success = true;
        if ('faultcode' in json) {
            this.faultCode = json.faultcode;
            if ('faultstring' in json) {
                this.faultString = json.faultstring;
            }
            this.success = false;
        }
        return this.success;
    }
    isSuccess() {
        return this.success;
    }
    getFaultCode() {
        return this.faultCode;
    }
    getFaultString() {
        return this.faultString;
    }
}
exports.default = JsonResponse;
