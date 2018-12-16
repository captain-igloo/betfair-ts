/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
export default class EventType extends JsonMember {
    private id;
    private name;
    constructor(id?: string, name?: string);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getId(): string;
    setId(id: string): void;
    getName(): string;
    setName(name: string): void;
}
