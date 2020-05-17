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
    private matched?: number;
    private total?: number;
    private limitBreachAction?: LimitBreachAction;

    constructor(options: IExposureLimitOptions) {
        super();
        this.matched = options.matched;
        this.total = options.total;
        this.limitBreachAction = options.limitBreachAction && this.fromJson(options.limitBreachAction, LimitBreachAction);
    }

    public toJson(): IExposureLimitOptions {
        const json: IExposureLimitOptions = {
        };
        if (typeof this.matched !== 'undefined') {
            json.matched = this.matched;
        }
        if (typeof this.total !== 'undefined') {
            json.total = this.total;
        }
        if (this.limitBreachAction) {
            json.limitBreachAction = this.limitBreachAction.toJson();
        }
        return json;
    }

    public getMatched(): number | undefined {
        return this.matched;
    }
    public setMatched(matched: number): void {
        this.matched = matched;
    }
    public getTotal(): number | undefined {
        return this.total;
    }
    public setTotal(total: number): void {
        this.total = total;
    }
    public getLimitBreachAction(): LimitBreachAction | undefined {
        return this.limitBreachAction;
    }
    public setLimitBreachAction(limitBreachAction: LimitBreachAction): void {
        this.limitBreachAction = limitBreachAction;
    }

}
