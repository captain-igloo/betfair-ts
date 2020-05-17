/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';


export interface ICompetitionOptions {
    id?: string;
    name?: string;
}

export default class Competition extends JsonMember {
    private id?: string;
    private name?: string;

    constructor(options: ICompetitionOptions) {
        super();
        this.id = options.id;
        this.name = options.name;
    }

    public toJson(): ICompetitionOptions {
        const json: ICompetitionOptions = {
        };
        if (typeof this.id !== 'undefined') {
            json.id = this.id;
        }
        if (typeof this.name !== 'undefined') {
            json.name = this.name;
        }
        return json;
    }

    public getId(): string | undefined {
        return this.id;
    }
    public setId(id: string): void {
        this.id = id;
    }
    public getName(): string | undefined {
        return this.name;
    }
    public setName(name: string): void {
        this.name = name;
    }

}
