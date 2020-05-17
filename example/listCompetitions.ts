import {
    CompetitionResult,
    ExchangeApi,
    ListCompetitionsRequest,
    MarketFilter,
} from '../lib/index'; 

const args = process.argv.slice(2);

if (args.length !== 4) {
    console.log('Usage: npm run list-competitions -- <application-key> <username> <password> <event-type-id>');
} else {
    const api = new ExchangeApi(args[0]);
    api.login(args[1], args[2]).then(async (result: boolean) => {
        if (result) {
            const request = new ListCompetitionsRequest({
                filter: new MarketFilter({
                    eventTypeIds: [args[3]],
                }),
            });
            const response = await api.listCompetitions(request);
            if (response.isSuccess()) {
                response.getCompetitionResults()?.forEach((competitionResult: CompetitionResult) => {
                    const competition = competitionResult.getCompetition();
                    if (competition) {
                        console.log(competition.getId(), competition.getName());
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
