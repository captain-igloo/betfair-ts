/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

import LimitBreachActionType from '../sport/enum/LimitBreachActionType';

export interface ILimitBreachActionOptions {
    actionType: LimitBreachActionType | string;
}

export default class LimitBreachAction extends JsonMember {
    private actionType: LimitBreachActionType;

    constructor(options: ILimitBreachActionOptions) {
        super();
        this.actionType = this.fromJson(options.actionType, LimitBreachActionType);
    }

    public toJson(): ILimitBreachActionOptions {
        const json: ILimitBreachActionOptions = {
            actionType: this.actionType.getValue(),
        };
        return json;
    }

    public getActionType(): LimitBreachActionType {
        return this.actionType;
    }
    public setActionType(actionType: LimitBreachActionType): void {
        this.actionType = actionType;
    }

}
