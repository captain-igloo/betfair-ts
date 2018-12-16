/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
export default class MarketOnCloseOrder extends JsonMember {
    private liability;
    constructor(liability?: number | null);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getLiability(): number | null;
    setLiability(liability: number | null): void;
}
