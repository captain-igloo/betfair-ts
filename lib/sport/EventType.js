"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
class EventType extends JsonMember_1.default {
    constructor(options) {
        super();
        this.id = options.id;
        this.name = options.name;
    }
    toJson() {
        const json = {};
        if (typeof this.id !== 'undefined') {
            json.id = this.id;
        }
        if (typeof this.name !== 'undefined') {
            json.name = this.name;
        }
        return json;
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
exports.default = EventType;
//# sourceMappingURL=EventType.js.map