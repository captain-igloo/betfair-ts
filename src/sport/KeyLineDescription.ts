/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

import KeyLineSelection from '../sport/KeyLineSelection';

export default class KeyLineDescription extends JsonMember {
    private keyLine: KeyLineSelection[];

    constructor(
        keyLine: KeyLineSelection[] = [],
    ) {
        super();
        this.keyLine = keyLine;
    }

    public fromJson(json: any): void {
        if ('keyLine' in json) {
            this.keyLine = json.keyLine.map((keyLineJson: any) => {
                const element = new KeyLineSelection();
                element.fromJson(keyLineJson);
                return element;
            });
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.keyLine.length > 0) {
            json.keyLine = this.keyLine.map((value) => value.toJson());
        }
        return json;
    }

    public isValid(): boolean {
        return this.keyLine.length > 0;
    }

    public getKeyLine(): KeyLineSelection[] {
        return this.keyLine;
    }
    public setKeyLine(keyLine: KeyLineSelection[]): void {
        this.keyLine = keyLine;
    }

}
