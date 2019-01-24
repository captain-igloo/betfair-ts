import ExchangeApi from '../src/ExchangeApi';
import MarketFilter from '../src/sport/MarketFilter';
import ListMarketCatalogueRequest from '../src/sport/ListMarketCatalogueRequest';
import MarketCatalogue from '../src/sport/MarketCatalogue';

const args = process.argv.slice(2);

if (args.length !== 4) {
    console.log('Usage: npm run list-market-catalogue -- <application-key> <username> <password> <event id>');
} else {
    const api = new ExchangeApi(args[0]);
    api.login(args[1], args[2]).then(async (result: boolean) => {
        if (result) {
            const request = new ListMarketCatalogueRequest();
            const filter = new MarketFilter();
            filter.setEventIds(new Set([args[3]]));
            request.setFilter(filter);
            request.setMaxResults(100);

            if (request.isValid()) {
                const response = await api.listMarketCatalogue(request);
                if (response.isSuccess()) {
                    response.getMarketCatalogues().forEach((marketCatalogue: MarketCatalogue) => {
                        console.log(marketCatalogue.getMarketId(), marketCatalogue.getMarketName());
                    });
                } else {
                    console.log(response.getFaultCode(), response.getFaultString());
                }
            } else {
                console.log('Invalid request');
            }
        } else {
            console.log('Failed to log in');
        }
    });
}
