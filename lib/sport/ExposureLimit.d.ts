/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import LimitBreachAction from '../sport/LimitBreachAction';
export default class ExposureLimit extends JsonMember {
    private matched;
    private total;
    private limitBreachAction;
    constructor(matched?: number | null, total?: number | null, limitBreachAction?: LimitBreachAction);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getMatched(): number | null;
    setMatched(matched: number | null): void;
    getTotal(): number | null;
    setTotal(total: number | null): void;
    getLimitBreachAction(): LimitBreachAction;
    setLimitBreachAction(limitBreachAction: LimitBreachAction): void;
}
