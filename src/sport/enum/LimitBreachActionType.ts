/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import Enum from '../../Enum';

export default class LimitBreachActionType extends Enum {
    public static REJECT_BETS: string = 'REJECT_BETS';
    public static STOP_BETTING: string = 'STOP_BETTING';
    public static TEAR_DOWN_MARKET_GROUP: string = 'TEAR_DOWN_MARKET_GROUP';

    constructor(value: string = '') {
        super();
        this.setValue(value);
    }

    public setValue(value: string): void {
        if (value) {
            if (value !== 'REJECT_BETS' && value !== 'STOP_BETTING' && value !== 'TEAR_DOWN_MARKET_GROUP') {
                throw new Error(`Invalid MarketStatus: ${value}`);
            }

            this.value = value;
            this.valid = true;
        }
    }
}
