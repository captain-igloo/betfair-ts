/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';

export default class MarketProjection extends Enum {
    public static COMPETITION: string = 'COMPETITION';
    public static EVENT: string = 'EVENT';
    public static EVENT_TYPE: string = 'EVENT_TYPE';
    public static MARKET_START_TIME: string = 'MARKET_START_TIME';
    public static MARKET_DESCRIPTION: string = 'MARKET_DESCRIPTION';
    public static RUNNER_DESCRIPTION: string = 'RUNNER_DESCRIPTION';
    public static RUNNER_METADATA: string = 'RUNNER_METADATA';

    constructor(value: string = '') {
        super();
        this.setValue(value);
    }

    public setValue(value: string): void {
        if (value) {
            if (value !== 'COMPETITION' &&
                value !== 'EVENT' &&
                value !== 'EVENT_TYPE' &&
                value !== 'MARKET_START_TIME' &&
                value !== 'MARKET_DESCRIPTION' &&
                value !== 'RUNNER_DESCRIPTION' &&
                value !== 'RUNNER_METADATA') {
                throw new Error(`Invalid MarketProjection: ${value}`);
            }

            this.value = value;
            this.valid = true;
        }
    }
}
