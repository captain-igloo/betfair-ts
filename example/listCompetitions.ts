import ExchangeApi from '../src/ExchangeApi';
import CompetitionResult from '../src/sport/CompetitionResult';
import ListCompetitionsRequest from '../src/sport/ListCompetitionsRequest';
import MarketFilter from '../src/sport/MarketFilter';

const args = process.argv.slice(2);

if (args.length !== 4) {
    console.log('Usage: npm run list-competitions -- <application-key> <username> <password> <event-type-id>');
} else {
    const api = new ExchangeApi(args[0]);
    api.login(args[1], args[2]).then(async (result: boolean) => {
        if (result) {
            const request = new ListCompetitionsRequest();
            const filter = new MarketFilter();
            filter.setEventTypeIds(new Set([args[3]]));
            request.setFilter(filter);

            if (request.isValid()) {
                const response = await api.listCompetitions(request);
                if (response.isSuccess()) {
                    response.getCompetitionResults().forEach((competitionResult: CompetitionResult) => {
                        console.log(competitionResult.getCompetition().getId(), competitionResult.getCompetition().getName());
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
