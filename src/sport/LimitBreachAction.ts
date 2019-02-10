/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

import LimitBreachActionType from '../sport/enum/LimitBreachActionType';

export default class LimitBreachAction extends JsonMember {
    private actionType: LimitBreachActionType;

    constructor(
        actionType: LimitBreachActionType = new LimitBreachActionType(),
    ) {
        super();
        this.actionType = actionType;
    }

    public fromJson(json: any): void {
        if ('actionType' in json) {
            this.actionType.setValue(json.actionType);
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.actionType.isValid()) {
            json.actionType = this.actionType.getValue();
        }
        return json;
    }

    public isValid(): boolean {
        return this.actionType.isValid();
    }

    public getActionType(): LimitBreachActionType {
        return this.actionType;
    }
    public setActionType(actionType: LimitBreachActionType): void {
        this.actionType = actionType;
    }

}
