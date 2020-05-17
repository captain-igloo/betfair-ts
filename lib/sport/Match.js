"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const Side_1 = require("../sport/enum/Side");
class Match extends JsonMember_1.default {
    constructor(options) {
        super();
        this.betId = options.betId;
        this.matchId = options.matchId;
        this.side = this.fromJson(options.side, Side_1.default);
        this.price = options.price;
        this.size = options.size;
        if (options.matchDate) {
            this.matchDate = this.fromJson(options.matchDate, Date);
        }
    }
    toJson() {
        const json = {
            side: this.side.getValue(),
            price: this.price,
            size: this.size,
        };
        if (typeof this.betId !== 'undefined') {
            json.betId = this.betId;
        }
        if (typeof this.matchId !== 'undefined') {
            json.matchId = this.matchId;
        }
        if (typeof this.matchDate !== 'undefined') {
            json.matchDate = this.matchDate.toISOString();
        }
        return json;
    }
    getBetId() {
        return this.betId;
    }
    setBetId(betId) {
        this.betId = betId;
    }
    getMatchId() {
        return this.matchId;
    }
    setMatchId(matchId) {
        this.matchId = matchId;
    }
    getSide() {
        return this.side;
    }
    setSide(side) {
        this.side = side;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        this.price = price;
    }
    getSize() {
        return this.size;
    }
    setSize(size) {
        this.size = size;
    }
    getMatchDate() {
        return this.matchDate;
    }
    setMatchDate(matchDate) {
        this.matchDate = matchDate;
    }
}
exports.default = Match;
//# sourceMappingURL=Match.js.map