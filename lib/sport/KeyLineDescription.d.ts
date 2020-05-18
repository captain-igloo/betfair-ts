/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import KeyLineSelection, { IKeyLineSelectionOptions } from '../sport/KeyLineSelection';
export interface IKeyLineDescriptionOptions {
    keyLine: (KeyLineSelection | IKeyLineSelectionOptions)[];
}
export default class KeyLineDescription extends JsonMember {
    private keyLine;
    constructor(options: IKeyLineDescriptionOptions);
    toJson(): IKeyLineDescriptionOptions;
    getKeyLine(): KeyLineSelection[];
    setKeyLine(keyLine: KeyLineSelection[]): void;
}
