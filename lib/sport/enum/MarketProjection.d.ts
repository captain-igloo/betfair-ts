/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';
export default class MarketProjection extends Enum {
    static COMPETITION: string;
    static EVENT: string;
    static EVENT_TYPE: string;
    static MARKET_START_TIME: string;
    static MARKET_DESCRIPTION: string;
    static RUNNER_DESCRIPTION: string;
    static RUNNER_METADATA: string;
    constructor(value?: string);
    setValue(value: string): void;
}
