"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
class RunnerCatalog extends JsonMember_1.default {
    constructor(options) {
        super();
        this.selectionId = options.selectionId;
        this.runnerName = options.runnerName;
        this.handicap = options.handicap;
        this.sortPriority = options.sortPriority;
        if (options.metadata) {
            this.metadata = this.mapFromJson(options.metadata);
        }
    }
    toJson() {
        const json = {
            selectionId: this.selectionId,
            runnerName: this.runnerName,
            handicap: this.handicap,
            sortPriority: this.sortPriority,
        };
        if (this.metadata && this.metadata.size > 0) {
            json.metadata = {};
            this.metadata.forEach((value, key) => {
                json.metadata[key] = value;
            });
        }
        return json;
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
//# sourceMappingURL=RunnerCatalog.js.map