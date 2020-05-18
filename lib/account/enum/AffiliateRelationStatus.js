"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const Enum_1 = require("../../Enum");
let AffiliateRelationStatus = /** @class */ (() => {
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
    AffiliateRelationStatus.INVALID_USER = 'INVALID_USER';
    AffiliateRelationStatus.AFFILIATED = 'AFFILIATED';
    AffiliateRelationStatus.NOT_AFFILIATED = 'NOT_AFFILIATED';
    return AffiliateRelationStatus;
})();
exports.default = AffiliateRelationStatus;
//# sourceMappingURL=AffiliateRelationStatus.js.map