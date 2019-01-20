/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

import LimitBreachAction from '../sport/LimitBreachAction';

export default class ExposureLimit extends JsonMember {
    private matched: number | null;
    private total: number | null;
    private limitBreachAction: LimitBreachAction;

    constructor(
        matched: number | null = null,
        total: number | null = null,
        limitBreachAction: LimitBreachAction = new LimitBreachAction(),
    ) {
        super();
        this.matched = matched;
        this.total = total;
        this.limitBreachAction = limitBreachAction;
    }

    public fromJson(json: any): void {
        if ('matched' in json) {
            this.matched = json.matched;
        }
        if ('total' in json) {
            this.total = json.total;
        }
        if ('limitBreachAction' in json) {
            this.limitBreachAction.fromJson(json.limitBreachAction);
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.matched !== null) {
            json.matched = this.matched;
        }
        if (this.total !== null) {
            json.total = this.total;
        }
        if (this.limitBreachAction.isValid()) {
            json.limitBreachAction = this.limitBreachAction.toJson();
        }
        return json;
    }

    public isValid(): boolean {
        return true;
    }

    public getMatched(): number | null {
        return this.matched;
    }
    public setMatched(matched: number | null): void {
        this.matched = matched;
    }
    public getTotal(): number | null {
        return this.total;
    }
    public setTotal(total: number | null): void {
        this.total = total;
    }
    public getLimitBreachAction(): LimitBreachAction {
        return this.limitBreachAction;
    }
    public setLimitBreachAction(limitBreachAction: LimitBreachAction): void {
        this.limitBreachAction = limitBreachAction;
    }

}
