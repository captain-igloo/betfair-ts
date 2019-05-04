/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import KeyLineSelection from '../sport/KeyLineSelection';
export default class KeyLineDescription extends JsonMember {
    private keyLine;
    constructor(keyLine?: KeyLineSelection[]);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getKeyLine(): KeyLineSelection[];
    setKeyLine(keyLine: KeyLineSelection[]): void;
}
