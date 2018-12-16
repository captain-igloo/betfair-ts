/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import MarketGroupType from '../sport/enum/MarketGroupType';
import MarketGroupId from '../sport/MarketGroupId';
export default class MarketGroup extends JsonMember {
    private type;
    private id;
    constructor(type?: MarketGroupType, id?: MarketGroupId);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getType(): MarketGroupType;
    setType(type: MarketGroupType): void;
    getId(): MarketGroupId;
    setId(id: MarketGroupId): void;
}
