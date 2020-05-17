import {
    ListEventTypesRequest,
    MarketFilter,
    EventTypeResult,
    ExchangeApi,
} from '../lib/index';

const args = process.argv.slice(2);

if (args.length !== 3) {
    console.log('Usage: npm run list-event-types -- <application-key> <username> <password>');
} else {
    const api = new ExchangeApi(args[0]);
    api.login(args[1], args[2]).then(async (result: boolean) => {
        if (result) {
            const request = new ListEventTypesRequest({
                filter: new MarketFilter({}),
            });
            const response = await api.listEventTypes(request);
            if (response.isSuccess()) {
                response.getEventTypeResults()?.forEach((eventTypeResult: EventTypeResult) => {
                    console.log(eventTypeResult.getEventType()?.getId(), eventTypeResult.getEventType()?.getName());
                });
            } else {
                console.log(response.getFaultCode(), response.getFaultString());
            }
        } else {
            console.log('Failed to log in');
        }
    });
}

