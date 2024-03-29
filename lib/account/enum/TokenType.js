"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const Enum_1 = require("../../Enum");
class TokenType extends Enum_1.default {
    constructor(value = '') {
        super();
        this.setValue(value);
    }
    setValue(value) {
        if (value) {
            if (value !== 'BEARER') {
                throw new Error(`Invalid TokenType: ${value}`);
            }
            this.value = value;
            this.valid = true;
        }
    }
}
TokenType.BEARER = 'BEARER';
exports.default = TokenType;
//# sourceMappingURL=TokenType.js.map