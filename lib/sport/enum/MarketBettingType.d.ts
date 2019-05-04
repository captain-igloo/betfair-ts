/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';
export default class MarketBettingType extends Enum {
    static ODDS: string;
    static LINE: string;
    static RANGE: string;
    static ASIAN_HANDICAP_DOUBLE_LINE: string;
    static ASIAN_HANDICAP_SINGLE_LINE: string;
    static FIXED_ODDS: string;
    constructor(value?: string);
    setValue(value: string): void;
}
