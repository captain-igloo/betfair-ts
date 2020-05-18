"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const Enum_1 = require("../../Enum");
let GrantType = /** @class */ (() => {
    class GrantType extends Enum_1.default {
        constructor(value = '') {
            super();
            this.setValue(value);
        }
        setValue(value) {
            if (value) {
                if (value !== 'AUTHORIZATION_CODE' &&
                    value !== 'REFRESH_TOKEN') {
                    throw new Error(`Invalid GrantType: ${value}`);
                }
                this.value = value;
                this.valid = true;
            }
        }
    }
    GrantType.AUTHORIZATION_CODE = 'AUTHORIZATION_CODE';
    GrantType.REFRESH_TOKEN = 'REFRESH_TOKEN';
    return GrantType;
})();
exports.default = GrantType;
//# sourceMappingURL=GrantType.js.map