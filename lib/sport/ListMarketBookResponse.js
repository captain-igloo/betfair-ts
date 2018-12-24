"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
const MarketBook_1 = require("../sport/MarketBook");
class ListMarketBookResponse extends JsonResponse_1.default {
    constructor(marketBooks = []) {
        super();
        this.marketBooks = marketBooks;
    }
    fromJson(json) {
        if (this.validateJson(json)) {
            this.marketBooks = json.map((marketBooksJson) => {
                const element = new MarketBook_1.default();
                element.fromJson(marketBooksJson);
                return element;
            });
        }
    }
    toJson() {
        const json = {};
        if (this.marketBooks.length > 0) {
            json.marketBooks = this.marketBooks.map((value) => value.toJson());
        }
        return json;
    }
    isValid() {
        return this.marketBooks.length > 0;
    }
    getMarketBooks() {
        return this.marketBooks;
    }
    setMarketBooks(marketBooks) {
        this.marketBooks = marketBooks;
    }
}
exports.default = ListMarketBookResponse;
//# sourceMappingURL=ListMarketBookResponse.js.map