/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import MarketGroupType from '../sport/enum/MarketGroupType';
import MarketGroupId, { IMarketGroupIdOptions } from '../sport/MarketGroupId';
export interface IMarketGroupOptions {
    type: MarketGroupType | string;
    id: MarketGroupId | IMarketGroupIdOptions;
}
export default class MarketGroup extends JsonMember {
    private type;
    private id;
    constructor(options: IMarketGroupOptions);
    toJson(): IMarketGroupOptions;
    getType(): MarketGroupType;
    setType(type: MarketGroupType): void;
    getId(): MarketGroupId;
    setId(id: MarketGroupId): void;
}
