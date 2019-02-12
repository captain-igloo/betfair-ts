/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';

import MarketBook from '../sport/MarketBook';

export default class ListMarketBookResponse extends JsonResponse {
    private marketBooks: MarketBook[];

    constructor(
        marketBooks: MarketBook[] = [],
    ) {
        super();
        this.marketBooks = marketBooks;
    }

    public fromJson(json: any): void {
        if (this.validateJson(json)) {
            this.marketBooks = json.map((marketBooksJson: any) => {
                const element = new MarketBook();
                element.fromJson(marketBooksJson);
                return element;
            });
        }
    }

    public toJson(): any {
        let json: any = {};
        if (this.marketBooks.length > 0) {
            json.marketBooks = this.marketBooks.map((value) => value.toJson());
        }
        return json;
    }

    public isValid(): boolean {
        return this.marketBooks.length > 0;
    }

    public getMarketBooks(): MarketBook[] {
        return this.marketBooks;
    }
    public setMarketBooks(marketBooks: MarketBook[]): void {
        this.marketBooks = marketBooks;
    }

}
