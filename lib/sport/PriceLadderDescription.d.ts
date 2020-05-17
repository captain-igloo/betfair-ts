/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import PriceLadderType from '../sport/enum/PriceLadderType';
export interface IPriceLadderDescriptionOptions {
    type: PriceLadderType | string;
}
export default class PriceLadderDescription extends JsonMember {
    private type;
    constructor(options: IPriceLadderDescriptionOptions);
    toJson(): IPriceLadderDescriptionOptions;
    getType(): PriceLadderType;
    setType(type: PriceLadderType): void;
}
