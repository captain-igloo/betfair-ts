/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';


export default class MarketOnCloseOrder extends JsonMember {
    private liability: number | null;

    constructor(
        liability: number | null = null,
    ) {
        super();
        this.liability = liability;
    }

    public fromJson(json: any): void {
        if ('liability' in json) {
            this.liability = json.liability;
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.liability !== null) {
            json.liability = this.liability;
        }
        return json;
    }

    public isValid(): boolean {
        return this.liability !== null;
    }

    public getLiability(): number | null {
        return this.liability;
    }
    public setLiability(liability: number | null): void {
        this.liability = liability;
    }

}
