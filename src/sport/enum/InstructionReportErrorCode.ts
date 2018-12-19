/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';

export default class InstructionReportErrorCode extends Enum {
    public static INVALID_BET_SIZE: string = 'INVALID_BET_SIZE';
    public static INVALID_RUNNER: string = 'INVALID_RUNNER';
    public static BET_TAKEN_OR_LAPSED: string = 'BET_TAKEN_OR_LAPSED';
    public static BET_IN_PROGRESS: string = 'BET_IN_PROGRESS';
    public static RUNNER_REMOVED: string = 'RUNNER_REMOVED';
    public static MARKET_NOT_OPEN_FOR_BETTING: string = 'MARKET_NOT_OPEN_FOR_BETTING';
    public static LOSS_LIMIT_EXCEEDED: string = 'LOSS_LIMIT_EXCEEDED';
    public static MARKET_NOT_OPEN_FOR_BSP_BETTING: string = 'MARKET_NOT_OPEN_FOR_BSP_BETTING';
    public static INVALID_PRICE_EDIT: string = 'INVALID_PRICE_EDIT';
    public static INVALID_ODDS: string = 'INVALID_ODDS';
    public static INSUFFICIENT_FUNDS: string = 'INSUFFICIENT_FUNDS';
    public static INVALID_PERSISTENCE_TYPE: string = 'INVALID_PERSISTENCE_TYPE';
    public static ERROR_IN_MATCHER: string = 'ERROR_IN_MATCHER';
    public static INVALID_BACK_LAY_COMBINATION: string = 'INVALID_BACK_LAY_COMBINATION';
    public static ERROR_IN_ORDER: string = 'ERROR_IN_ORDER';
    public static INVALID_BID_TYPE: string = 'INVALID_BID_TYPE';
    public static INVALID_BET_ID: string = 'INVALID_BET_ID';
    public static CANCELLED_NOT_PLACED: string = 'CANCELLED_NOT_PLACED';
    public static RELATED_ACTION_FAILED: string = 'RELATED_ACTION_FAILED';
    public static NO_ACTION_REQUIRED: string = 'NO_ACTION_REQUIRED';
    public static INVALID_MIN_FILL_SIZE: string = 'INVALID_MIN_FILL_SIZE';
    public static INVALID_CUSTOMER_ORDER_REF: string = 'INVALID_CUSTOMER_ORDER_REF';
    public static TIME_IN_FORCE_CONFLICT: string = 'TIME_IN_FORCE_CONFLICT';
    public static UNEXPECTED_PERSISTENCE_TYPE: string = 'UNEXPECTED_PERSISTENCE_TYPE';
    public static INVALID_ORDER_TYPE: string = 'INVALID_ORDER_TYPE';
    public static UNEXPECTED_MIN_FILL_SIZE: string = 'UNEXPECTED_MIN_FILL_SIZE';
    public static INVALID_CUSTOMER_STRATEGY_REF: string = 'INVALID_CUSTOMER_STRATEGY_REF';
    public static BET_LAPSED_PRICE_IMPROVEMENT_TOO_LARGE: string = 'BET_LAPSED_PRICE_IMPROVEMENT_TOO_LARGE';

    constructor(value: string = '') {
        super();
        this.setValue(value);
    }

    public setValue(value: string): void {
        if (value) {
            if (value !== 'INVALID_BET_SIZE' &&
                value !== 'INVALID_RUNNER' &&
                value !== 'BET_TAKEN_OR_LAPSED' &&
                value !== 'BET_IN_PROGRESS' &&
                value !== 'RUNNER_REMOVED' &&
                value !== 'MARKET_NOT_OPEN_FOR_BETTING' &&
                value !== 'LOSS_LIMIT_EXCEEDED' &&
                value !== 'MARKET_NOT_OPEN_FOR_BSP_BETTING' &&
                value !== 'INVALID_PRICE_EDIT' &&
                value !== 'INVALID_ODDS' &&
                value !== 'INSUFFICIENT_FUNDS' &&
                value !== 'INVALID_PERSISTENCE_TYPE' &&
                value !== 'ERROR_IN_MATCHER' &&
                value !== 'INVALID_BACK_LAY_COMBINATION' &&
                value !== 'ERROR_IN_ORDER' &&
                value !== 'INVALID_BID_TYPE' &&
                value !== 'INVALID_BET_ID' &&
                value !== 'CANCELLED_NOT_PLACED' &&
                value !== 'RELATED_ACTION_FAILED' &&
                value !== 'NO_ACTION_REQUIRED' &&
                value !== 'INVALID_MIN_FILL_SIZE' &&
                value !== 'INVALID_CUSTOMER_ORDER_REF' &&
                value !== 'TIME_IN_FORCE_CONFLICT' &&
                value !== 'UNEXPECTED_PERSISTENCE_TYPE' &&
                value !== 'INVALID_ORDER_TYPE' &&
                value !== 'UNEXPECTED_MIN_FILL_SIZE' &&
                value !== 'INVALID_CUSTOMER_STRATEGY_REF' &&
                value !== 'BET_LAPSED_PRICE_IMPROVEMENT_TOO_LARGE') {
                throw new Error(`Invalid MarketStatus: ${value}`);
            }

            this.value = value;
            this.valid = true;
        }
    }
}
