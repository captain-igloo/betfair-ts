/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

import KeyLineSelection, { IKeyLineSelectionOptions } from '../sport/KeyLineSelection';

export interface IKeyLineDescriptionOptions {
    keyLine: Array<KeyLineSelection | IKeyLineSelectionOptions>;
}

export default class KeyLineDescription extends JsonMember {
    private keyLine: KeyLineSelection[];

    constructor(options: IKeyLineDescriptionOptions) {
        super();
        this.keyLine = this.arrayFromJson(options.keyLine, KeyLineSelection);
    }

    public toJson(): IKeyLineDescriptionOptions {
        const json: IKeyLineDescriptionOptions = {
            keyLine: this.keyLine.map((value) => value.toJson()),
        };
        return json;
    }

    public getKeyLine(): KeyLineSelection[] {
        return this.keyLine;
    }
    public setKeyLine(keyLine: KeyLineSelection[]): void {
        this.keyLine = keyLine;
    }

}
