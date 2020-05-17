/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

import PriceLadderType from '../sport/enum/PriceLadderType';

export interface IPriceLadderDescriptionOptions {
    type: PriceLadderType | string;
}

export default class PriceLadderDescription extends JsonMember {
    private type: PriceLadderType;

    constructor(options: IPriceLadderDescriptionOptions) {
        super();
        this.type = this.fromJson(options.type, PriceLadderType);
    }

    public toJson(): IPriceLadderDescriptionOptions {
        const json: IPriceLadderDescriptionOptions = {
            type: this.type.getValue(),
        };
        return json;
    }

    public getType(): PriceLadderType {
        return this.type;
    }
    public setType(type: PriceLadderType): void {
        this.type = type;
    }

}
