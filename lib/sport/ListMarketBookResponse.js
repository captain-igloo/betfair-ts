"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
const MarketBook_1 = require("../sport/MarketBook");
class ListMarketBookResponse extends JsonResponse_1.default {
    constructor(options) {
        super();
        if (this.validateJson(options)) {
            if (options) {
                this.marketBooks = this.arrayFromJson(options, MarketBook_1.default);
            }
        }
    }
    toJson() {
        throw new Error('not implemented');
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