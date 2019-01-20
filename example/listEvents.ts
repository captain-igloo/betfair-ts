import ExchangeApi from '../src/ExchangeApi';
import EventResult from '../src/sport/EventResult';
import ListEventsRequest from '../src/sport/ListEventsRequest';
import MarketFilter from '../src/sport/MarketFilter';

const args = process.argv.slice(2);

if (args.length !== 4) {
    console.log('Usage: npm run list-events -- <application-key> <username> <password> <competition-id>');
} else {
    const api = new ExchangeApi(args[0]);
    api.login(args[1], args[2]).then(async (result: boolean) => {
        if (result) {
            const request = new ListEventsRequest();
            const filter = new MarketFilter();
            filter.setCompetitionIds(new Set([args[3]]));
            request.setFilter(filter);

            if (request.isValid()) {
                const response = await api.listEvents(request);
                if (response.isSuccess()) {
                    response.getEventResults().forEach((eventResult: EventResult) => {
                        console.log(eventResult.getEvent().getId(), eventResult.getEvent().getName());
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
