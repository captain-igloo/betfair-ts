/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
export interface ICompetitionOptions {
    id?: string;
    name?: string;
}
export default class Competition extends JsonMember {
    private id?;
    private name?;
    constructor(options: ICompetitionOptions);
    toJson(): ICompetitionOptions;
    getId(): string | undefined;
    setId(id: string): void;
    getName(): string | undefined;
    setName(name: string): void;
}
