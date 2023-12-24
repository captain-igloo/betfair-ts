"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const Enum_1 = require("../../Enum");
class SubscriptionStatus extends Enum_1.default {
    constructor(value = '') {
        super();
        this.setValue(value);
    }
    setValue(value) {
        if (value) {
            if (value !== 'ALL' &&
                value !== 'ACTIVATED' &&
                value !== 'UNACTIVATED' &&
                value !== 'CANCELLED' &&
                value !== 'EXPIRED') {
                throw new Error(`Invalid SubscriptionStatus: ${value}`);
            }
            this.value = value;
            this.valid = true;
        }
    }
}
SubscriptionStatus.ALL = 'ALL';
SubscriptionStatus.ACTIVATED = 'ACTIVATED';
SubscriptionStatus.UNACTIVATED = 'UNACTIVATED';
SubscriptionStatus.CANCELLED = 'CANCELLED';
SubscriptionStatus.EXPIRED = 'EXPIRED';
exports.default = SubscriptionStatus;
//# sourceMappingURL=SubscriptionStatus.js.map