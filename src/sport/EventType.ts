/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

export default class EventType extends JsonMember {
    private id: string;
    private name: string;

    constructor(
        id: string = '',
        name: string = '',
    ) {
        super();
        this.id = id;
        this.name = name;
    }

    public fromJson(json: any): void {
        if ('id' in json) {
            this.id = json.id;
        }
        if ('name' in json) {
            this.name = json.name;
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.id !== null) {
            json.id = this.id;
        }
        if (this.name !== null) {
            json.name = this.name;
        }
        return json;
    }

    public isValid(): boolean {
        return true;
    }

    public getId(): string {
        return this.id;
    }
    public setId(id: string): void {
        this.id = id;
    }
    public getName(): string {
        return this.name;
    }
    public setName(name: string): void {
        this.name = name;
    }

}
