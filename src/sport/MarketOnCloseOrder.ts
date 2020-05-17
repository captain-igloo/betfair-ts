/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';


export interface IMarketOnCloseOrderOptions {
    liability: number;
}

export default class MarketOnCloseOrder extends JsonMember {
    private liability: number;

    constructor(options: IMarketOnCloseOrderOptions) {
        super();
        this.liability = options.liability;
    }

    public toJson(): IMarketOnCloseOrderOptions {
        const json: IMarketOnCloseOrderOptions = {
            liability: this.liability,
        };
        return json;
    }

    public getLiability(): number {
        return this.liability;
    }
    public setLiability(liability: number): void {
        this.liability = liability;
    }

}
