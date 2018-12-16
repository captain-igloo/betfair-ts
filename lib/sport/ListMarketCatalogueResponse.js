"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonResponse_1 = require("../JsonResponse");
const MarketCatalogue_1 = require("../sport/MarketCatalogue");
class ListMarketCatalogueResponse extends JsonResponse_1.default {
    constructor(marketCatalogues = []) {
        super();
        this.marketCatalogues = marketCatalogues;
    }
    fromJson(json) {
        if (this.validateJson(json)) {
            this.marketCatalogues = json.map((marketCataloguesJson) => {
                const element = new MarketCatalogue_1.default();
                element.fromJson(marketCataloguesJson);
                return element;
            });
        }
    }
    toJson() {
        const json = {};
        if (this.marketCatalogues.length > 0) {
            json.marketCatalogues = this.marketCatalogues.map((value) => value.toJson());
        }
        return json;
    }
    isValid() {
        return this.marketCatalogues.length > 0;
    }
    getMarketCatalogues() {
        return this.marketCatalogues;
    }
    setMarketCatalogues(marketCatalogues) {
        this.marketCatalogues = marketCatalogues;
    }
}
exports.default = ListMarketCatalogueResponse;
