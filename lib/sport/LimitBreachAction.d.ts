/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import LimitBreachActionType from '../sport/enum/LimitBreachActionType';
export interface ILimitBreachActionOptions {
    actionType: LimitBreachActionType | string;
}
export default class LimitBreachAction extends JsonMember {
    private actionType;
    constructor(options: ILimitBreachActionOptions);
    toJson(): ILimitBreachActionOptions;
    getActionType(): LimitBreachActionType;
    setActionType(actionType: LimitBreachActionType): void;
}
