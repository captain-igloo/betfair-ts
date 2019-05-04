"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const Side_1 = require("../sport/enum/Side");
class Match extends JsonMember_1.default {
    constructor(betId = '', matchId = '', side = new Side_1.default(), price = null, size = null, matchDate = null) {
        super();
        this.betId = betId;
        this.matchId = matchId;
        this.side = side;
        this.price = price;
        this.size = size;
        this.matchDate = matchDate;
    }
    fromJson(json) {
        if ('betId' in json) {
            this.betId = json.betId;
        }
        if ('matchId' in json) {
            this.matchId = json.matchId;
        }
        if ('side' in json) {
            this.side.setValue(json.side);
        }
        if ('price' in json) {
            this.price = json.price;
        }
        if ('size' in json) {
            this.size = json.size;
        }
        if ('matchDate' in json) {
            this.matchDate = new Date(json.matchDate);
        }
    }
    toJson() {
        const json = {};
        if (this.betId !== '') {
            json.betId = this.betId;
        }
        if (this.matchId !== '') {
            json.matchId = this.matchId;
        }
        if (this.side.isValid()) {
            json.side = this.side.getValue();
        }
        if (this.price !== null) {
            json.price = this.price;
        }
        if (this.size !== null) {
            json.size = this.size;
        }
        if (this.matchDate !== null) {
            json.matchDate = this.matchDate.toISOString();
        }
        return json;
    }
    isValid() {
        return this.side.isValid() &&
            this.price !== null &&
            this.size !== null;
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