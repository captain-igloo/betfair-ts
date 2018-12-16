import ExchangeApi from '../src/ExchangeApi';
import EventTypeResult from '../src/sport/EventTypeResult';
import ListEventTypesRequest from '../src/sport/ListEventTypesRequest';
import MarketFilter from '../src/sport/MarketFilter';

const args = process.argv.slice(2);

if (args.length !== 3) {
    console.log('Usage: npm run list-event-types -- <application-key> <username> <password>');
} else {
    const api = new ExchangeApi(args[0]);
    api.login(args[1], args[2]).then(async (result: boolean) => {
        if (result) {
            const request = new ListEventTypesRequest();
            request.setFilter(new MarketFilter());

            if (request.isValid()) {
                const response = await api.listEventTypes(request);
                response.getEventTypeResults().forEach((eventTypeResult: EventTypeResult) => {
                    console.log(eventTypeResult.getEventType().getName());
                });
            }
        }
    });
}

