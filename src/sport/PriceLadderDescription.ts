/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

import PriceLadderType from '../sport/enum/PriceLadderType';

export default class PriceLadderDescription extends JsonMember {
    private type: PriceLadderType;

    constructor(
        type: PriceLadderType = new PriceLadderType(),
    ) {
        super();
        this.type = type;
    }

    public fromJson(json: any): void {
        if ('type' in json) {
            this.type.setValue(json.type);
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.type.isValid()) {
            json.type = this.type;
        }
        return json;
    }

    public isValid(): boolean {
        return this.type.isValid();
    }

    public getType(): PriceLadderType {
        return this.type;
    }
    public setType(type: PriceLadderType): void {
        this.type = type;
    }

}
