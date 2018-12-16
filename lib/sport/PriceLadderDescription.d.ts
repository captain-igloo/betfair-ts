/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import PriceLadderType from '../sport/enum/PriceLadderType';
export default class PriceLadderDescription extends JsonMember {
    private type;
    constructor(type?: PriceLadderType);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getType(): PriceLadderType;
    setType(type: PriceLadderType): void;
}
