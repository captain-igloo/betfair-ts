import {
    EventResult,
    ExchangeApi,
    ListEventsRequest,
    MarketFilter,
} from '../lib/index';

const args = process.argv.slice(2);

if (args.length !== 4) {
    console.log('Usage: npm run list-events -- <application-key> <username> <password> <competition-id>');
} else {
    const api = new ExchangeApi(args[0]);
    api.login(args[1], args[2]).then(async (result: boolean) => {
        if (result) {
            const request = new ListEventsRequest({
                filter: new MarketFilter({
                    competitionIds: [args[3]],
                })
            });

            const response = await api.listEvents(request);
            if (response.isSuccess()) {
                response.getEventResults()?.forEach((eventResult: EventResult) => {
                    const event = eventResult.getEvent();
                    if (event) {
                        console.log(event.getId(), event.getName());
                    }
                });
            } else {
                console.log(response.getFaultCode(), response.getFaultString());
            }
        } else {
            console.log('Failed to log in');
        }
    });
}
