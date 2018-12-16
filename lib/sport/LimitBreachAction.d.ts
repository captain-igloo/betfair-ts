/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import LimitBreachActionType from '../sport/enum/LimitBreachActionType';
export default class LimitBreachAction extends JsonMember {
    private actionType;
    constructor(actionType?: LimitBreachActionType);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getActionType(): LimitBreachActionType;
    setActionType(actionType: LimitBreachActionType): void;
}
