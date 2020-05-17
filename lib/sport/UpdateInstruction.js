"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const PersistenceType_1 = require("../sport/enum/PersistenceType");
class UpdateInstruction extends JsonMember_1.default {
    constructor(options) {
        super();
        this.betId = options.betId;
        this.newPersistenceType = this.fromJson(options.newPersistenceType, PersistenceType_1.default);
    }
    toJson() {
        const json = {
            betId: this.betId,
            newPersistenceType: this.newPersistenceType.getValue(),
        };
        return json;
    }
    getBetId() {
        return this.betId;
    }
    setBetId(betId) {
        this.betId = betId;
    }
    getNewPersistenceType() {
        return this.newPersistenceType;
    }
    setNewPersistenceType(newPersistenceType) {
        this.newPersistenceType = newPersistenceType;
    }
}
exports.default = UpdateInstruction;
//# sourceMappingURL=UpdateInstruction.js.map