/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import MarketGroupType from '../sport/enum/MarketGroupType';
import MarketGroupId from '../sport/MarketGroupId';

export default class MarketGroup extends JsonMember {
    private type: MarketGroupType;
    private id: MarketGroupId;

    constructor(
        type: MarketGroupType = new MarketGroupType(),
        id: MarketGroupId = new MarketGroupId(),
    ) {
        super();
        this.type = type;
        this.id = id;
    }

    public fromJson(json: any): void {
        if ('type' in json) {
            this.type.setValue(json.type);
        }
        if ('id' in json) {
            this.id.fromJson(json.id);
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.type.isValid()) {
            json.type = this.type;
        }
        if (this.id.isValid()) {
            json.id = this.id.toJson();
        }
        return json;
    }

    public isValid(): boolean {
        return this.type.isValid() &&
            this.id.isValid();
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
