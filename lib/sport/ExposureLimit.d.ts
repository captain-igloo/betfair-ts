/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import LimitBreachAction, { ILimitBreachActionOptions } from '../sport/LimitBreachAction';
export interface IExposureLimitOptions {
    matched?: number;
    total?: number;
    limitBreachAction?: LimitBreachAction | ILimitBreachActionOptions;
}
export default class ExposureLimit extends JsonMember {
    private matched?;
    private total?;
    private limitBreachAction?;
    constructor(options: IExposureLimitOptions);
    toJson(): IExposureLimitOptions;
    getMatched(): number | undefined;
    setMatched(matched: number): void;
    getTotal(): number | undefined;
    setTotal(total: number): void;
    getLimitBreachAction(): LimitBreachAction | undefined;
    setLimitBreachAction(limitBreachAction: LimitBreachAction): void;
}
