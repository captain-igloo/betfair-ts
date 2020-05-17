import {
    ExchangeApi,
    ListMarketCatalogueRequest,
    MarketCatalogue,
} from '../lib/index';

const args = process.argv.slice(2);

if (args.length !== 4) {
    console.log('Usage: npm run list-market-catalogue -- <application-key> <username> <password> <event id>');
} else {
    const api = new ExchangeApi(args[0]);
    api.login(args[1], args[2]).then(async (result: boolean) => {
        if (result) {
            const request = new ListMarketCatalogueRequest({
                filter: {
                    eventIds: [args[3]],
                },
                maxResults: 100,
            });

            const response = await api.listMarketCatalogue(request);
            if (response.isSuccess()) {
                response.getMarketCatalogues()?.forEach((marketCatalogue: MarketCatalogue) => {
                    console.log(marketCatalogue.getMarketId(), marketCatalogue.getMarketName());
                });
            } else {
                console.log(response.getFaultCode(), response.getFaultString());
            }
        } else {
            console.log('Failed to log in');
        }
    });
}
