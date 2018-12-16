/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';
export default class LimitBreachActionType extends Enum {
    static REJECT_BETS: string;
    static STOP_BETTING: string;
    static TEAR_DOWN_MARKET_GROUP: string;
    constructor(value?: string);
    setValue(value: string): void;
}
