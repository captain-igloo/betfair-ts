"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const Enum_1 = require("../../Enum");
class AffiliateRelationStatus extends Enum_1.default {
    constructor(value = '') {
        super();
        this.setValue(value);
    }
    setValue(value) {
        if (value) {
            if (value !== 'INVALID_USER' &&
                value !== 'AFFILIATED' &&
                value !== 'NOT_AFFILIATED') {
                throw new Error(`Invalid AffiliateRelationStatus: ${value}`);
            }
            this.value = value;
            this.valid = true;
        }
    }
}
exports.default = AffiliateRelationStatus;
AffiliateRelationStatus.INVALID_USER = 'INVALID_USER';
AffiliateRelationStatus.AFFILIATED = 'AFFILIATED';
AffiliateRelationStatus.NOT_AFFILIATED = 'NOT_AFFILIATED';
//# sourceMappingURL=AffiliateRelationStatus.js.map