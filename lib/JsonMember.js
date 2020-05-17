"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Enum_1 = require("./Enum");
class JsonMember {
    toString() {
        return JSON.stringify(this.toJson());
    }
    fromJson(json, Type) {
        if (json instanceof Type) {
            return json;
        }
        return new Type(json);
    }
    arrayFromJson(json, Type) {
        return json.map((v) => {
            return this.fromJson(v, Type);
        });
    }
    setFromJson(json, Type) {
        const set = new Set();
        json.forEach((value) => {
            if (Type) {
                set.add(this.fromJson(value, Type));
            }
            else {
                set.add(value);
            }
        });
        return set;
    }
    setToJson(member) {
        const set = [];
        member.forEach((value) => {
            if (value instanceof Enum_1.default) {
                set.push(value.getValue());
            }
            else {
                set.push(value);
            }
        });
        return set;
    }
    mapFromJson(json, Type) {
        const map = new Map();
        if (json instanceof Map) {
            json.forEach((value, key) => {
                if (Type) {
                    map.set(key, this.fromJson(value, Type));
                }
                else {
                    map.set(key, value);
                }
            });
        }
        else {
            Object.keys(json).forEach((key) => {
                if (Type) {
                    map.set(key, this.fromJson(json[key], Type));
                }
                else {
                    map.set(key, json[key]);
                }
            });
        }
        return map;
    }
}
exports.default = JsonMember;
//# sourceMappingURL=JsonMember.js.map