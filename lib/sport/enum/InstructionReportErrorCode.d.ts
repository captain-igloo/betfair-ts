/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';
export default class InstructionReportErrorCode extends Enum {
    static INVALID_BET_SIZE: string;
    static INVALID_RUNNER: string;
    static BET_TAKEN_OR_LAPSED: string;
    static BET_IN_PROGRESS: string;
    static RUNNER_REMOVED: string;
    static MARKET_NOT_OPEN_FOR_BETTING: string;
    static LOSS_LIMIT_EXCEEDED: string;
    static MARKET_NOT_OPEN_FOR_BSP_BETTING: string;
    static INVALID_PRICE_EDIT: string;
    static INVALID_ODDS: string;
    static INSUFFICIENT_FUNDS: string;
    static INVALID_PERSISTENCE_TYPE: string;
    static ERROR_IN_MATCHER: string;
    static INVALID_BACK_LAY_COMBINATION: string;
    static ERROR_IN_ORDER: string;
    static INVALID_BID_TYPE: string;
    static INVALID_BET_ID: string;
    static CANCELLED_NOT_PLACED: string;
    static RELATED_ACTION_FAILED: string;
    static NO_ACTION_REQUIRED: string;
    static INVALID_MIN_FILL_SIZE: string;
    static INVALID_CUSTOMER_ORDER_REF: string;
    static TIME_IN_FORCE_CONFLICT: string;
    static UNEXPECTED_PERSISTENCE_TYPE: string;
    static INVALID_ORDER_TYPE: string;
    static UNEXPECTED_MIN_FILL_SIZE: string;
    static INVALID_CUSTOMER_STRATEGY_REF: string;
    static BET_LAPSED_PRICE_IMPROVEMENT_TOO_LARGE: string;
    constructor(value?: string);
    setValue(value: string): void;
}
