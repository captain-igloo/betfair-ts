"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JsonMember_1 = require("./JsonMember");
class JsonResponse extends JsonMember_1.default {
    constructor() {
        super(...arguments);
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
//# sourceMappingURL=JsonResponse.js.map