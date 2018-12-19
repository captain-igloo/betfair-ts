/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';

export default class RunnerStatus extends Enum {
    public static ACTIVE: string = 'ACTIVE';
    public static WINNER: string = 'WINNER';
    public static LOSER: string = 'LOSER';
    public static REMOVED_VACANT: string = 'REMOVED_VACANT';
    public static REMOVED: string = 'REMOVED';
    public static PLACED: string = 'PLACED';

    constructor(value: string = '') {
        super();
        this.setValue(value);
    }

    public setValue(value: string): void {
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
