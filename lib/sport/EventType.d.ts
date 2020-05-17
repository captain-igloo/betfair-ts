/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
export interface IEventTypeOptions {
    id?: string;
    name?: string;
}
export default class EventType extends JsonMember {
    private id?;
    private name?;
    constructor(options: IEventTypeOptions);
    toJson(): IEventTypeOptions;
    getId(): string | undefined;
    setId(id: string): void;
    getName(): string | undefined;
    setName(name: string): void;
}
