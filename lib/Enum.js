"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Enum {
    constructor() {
        this.value = '';
        this.valid = false;
    }
    getValue() {
        return this.value;
    }
    toJSON() {
        // provides only the value, not the whole structure of the Enum.
        return this.value;
    }
}
exports.default = Enum;
//# sourceMappingURL=Enum.js.map