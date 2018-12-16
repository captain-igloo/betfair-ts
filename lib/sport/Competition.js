"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
class Competition extends JsonMember_1.default {
    constructor(id = '', name = '') {
        super();
        this.id = id;
        this.name = name;
    }
    fromJson(json) {
        if ('id' in json) {
            this.id = json.id;
        }
        if ('name' in json) {
            this.name = json.name;
        }
    }
    toJson() {
        const json = {};
        if (this.id !== null) {
            json.id = this.id;
        }
        if (this.name !== null) {
            json.name = this.name;
        }
        return json;
    }
    isValid() {
        return true;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
}
exports.default = Competition;
