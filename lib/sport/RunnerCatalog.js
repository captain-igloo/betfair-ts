"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
class RunnerCatalog extends JsonMember_1.default {
    constructor(selectionId = null, runnerName = '', handicap = null, sortPriority = null, metadata = new Map()) {
        super();
        this.selectionId = selectionId;
        this.runnerName = runnerName;
        this.handicap = handicap;
        this.sortPriority = sortPriority;
        this.metadata = metadata;
    }
    fromJson(json) {
        if ('selectionId' in json) {
            this.selectionId = json.selectionId;
        }
        if ('runnerName' in json) {
            this.runnerName = json.runnerName;
        }
        if ('handicap' in json) {
            this.handicap = json.handicap;
        }
        if ('sortPriority' in json) {
            this.sortPriority = json.sortPriority;
        }
        if ('metadata' in json) {
            this.metadata = json.metadata;
        }
    }
    toJson() {
        const json = {};
        if (this.selectionId !== null) {
            json.selectionId = this.selectionId;
        }
        if (this.runnerName !== null) {
            json.runnerName = this.runnerName;
        }
        if (this.handicap !== null) {
            json.handicap = this.handicap;
        }
        if (this.sortPriority !== null) {
            json.sortPriority = this.sortPriority;
        }
        if (this.metadata.size > 0) {
            json.metadata = this.metadata;
        }
        return json;
    }
    isValid() {
        return this.selectionId !== null &&
            this.runnerName !== null &&
            this.handicap !== null &&
            this.sortPriority !== null;
    }
    getSelectionId() {
        return this.selectionId;
    }
    setSelectionId(selectionId) {
        this.selectionId = selectionId;
    }
    getRunnerName() {
        return this.runnerName;
    }
    setRunnerName(runnerName) {
        this.runnerName = runnerName;
    }
    getHandicap() {
        return this.handicap;
    }
    setHandicap(handicap) {
        this.handicap = handicap;
    }
    getSortPriority() {
        return this.sortPriority;
    }
    setSortPriority(sortPriority) {
        this.sortPriority = sortPriority;
    }
    getMetadata() {
        return this.metadata;
    }
    setMetadata(metadata) {
        this.metadata = metadata;
    }
}
exports.default = RunnerCatalog;
