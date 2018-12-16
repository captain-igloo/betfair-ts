"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const Competition_1 = require("../sport/Competition");
class CompetitionResult extends JsonMember_1.default {
    constructor(competition = new Competition_1.default(), marketCount = null, competitionRegion = '') {
        super();
        this.competition = competition;
        this.marketCount = marketCount;
        this.competitionRegion = competitionRegion;
    }
    fromJson(json) {
        if ('competition' in json) {
            this.competition.fromJson(json.competition);
        }
        if ('marketCount' in json) {
            this.marketCount = json.marketCount;
        }
        if ('competitionRegion' in json) {
            this.competitionRegion = json.competitionRegion;
        }
    }
    toJson() {
        const json = {};
        if (this.competition.isValid()) {
            json.competition = this.competition.toJson();
        }
        if (this.marketCount !== null) {
            json.marketCount = this.marketCount;
        }
        if (this.competitionRegion !== null) {
            json.competitionRegion = this.competitionRegion;
        }
        return json;
    }
    isValid() {
        return true;
    }
    getCompetition() {
        return this.competition;
    }
    setCompetition(competition) {
        this.competition = competition;
    }
    getMarketCount() {
        return this.marketCount;
    }
    setMarketCount(marketCount) {
        this.marketCount = marketCount;
    }
    getCompetitionRegion() {
        return this.competitionRegion;
    }
    setCompetitionRegion(competitionRegion) {
        this.competitionRegion = competitionRegion;
    }
}
exports.default = CompetitionResult;
