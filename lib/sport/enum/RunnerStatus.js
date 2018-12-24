"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const Enum_1 = require("../../Enum");
class RunnerStatus extends Enum_1.default {
    constructor(value = '') {
        super();
        this.setValue(value);
    }
    setValue(value) {
        if (value) {
            if (value !== 'ACTIVE' &&
                value !== 'WINNER' &&
                value !== 'LOSER' &&
                value !== 'REMOVED_VACANT' &&
                value !== 'REMOVED' &&
                value !== 'PLACED') {
                throw new Error(`Invalid MarketStatus: ${value}`);
            }
            this.value = value;
            this.valid = true;
        }
    }
}
RunnerStatus.ACTIVE = 'ACTIVE';
RunnerStatus.WINNER = 'WINNER';
RunnerStatus.LOSER = 'LOSER';
RunnerStatus.REMOVED_VACANT = 'REMOVED_VACANT';
RunnerStatus.REMOVED = 'REMOVED';
RunnerStatus.PLACED = 'PLACED';
exports.default = RunnerStatus;
//# sourceMappingURL=RunnerStatus.js.map