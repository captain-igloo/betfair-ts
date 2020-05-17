"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
const MarketCatalogue_1 = require("../sport/MarketCatalogue");
class ListMarketCatalogueResponse extends JsonResponse_1.default {
    constructor(options) {
        super();
        if (this.validateJson(options)) {
            if (options) {
                this.marketCatalogues = this.arrayFromJson(options, MarketCatalogue_1.default);
            }
        }
    }
    toJson() {
        throw new Error('not implemented');
    }
    getMarketCatalogues() {
        return this.marketCatalogues;
    }
    setMarketCatalogues(marketCatalogues) {
        this.marketCatalogues = marketCatalogues;
    }
}
exports.default = ListMarketCatalogueResponse;
//# sourceMappingURL=ListMarketCatalogueResponse.js.map