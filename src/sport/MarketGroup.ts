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
    private type: MarketGroupType;
    private id: MarketGroupId;

    constructor(options: IMarketGroupOptions) {
        super();
        this.type = this.fromJson(options.type, MarketGroupType);
        this.id = this.fromJson(options.id, MarketGroupId);
    }

    public toJson(): IMarketGroupOptions {
        const json: IMarketGroupOptions = {
            type: this.type.getValue(),
            id: this.id.toJson(),
        };
        return json;
    }

    public getType(): MarketGroupType {
        return this.type;
    }
    public setType(type: MarketGroupType): void {
        this.type = type;
    }
    public getId(): MarketGroupId {
        return this.id;
    }
    public setId(id: MarketGroupId): void {
        this.id = id;
    }

}
