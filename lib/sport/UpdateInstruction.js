"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const PersistenceType_1 = require("../sport/enum/PersistenceType");
class UpdateInstruction extends JsonMember_1.default {
    constructor(betId = '', newPersistenceType = new PersistenceType_1.default()) {
        super();
        this.betId = betId;
        this.newPersistenceType = newPersistenceType;
    }
    fromJson(json) {
        if ('betId' in json) {
            this.betId = json.betId;
        }
        if ('newPersistenceType' in json) {
            this.newPersistenceType.setValue(json.newPersistenceType);
        }
    }
    toJson() {
        const json = {};
        if (this.betId !== null) {
            json.betId = this.betId;
        }
        if (this.newPersistenceType.isValid()) {
            json.newPersistenceType = this.newPersistenceType;
        }
        return json;
    }
    isValid() {
        return this.betId !== null &&
            this.newPersistenceType.isValid();
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
