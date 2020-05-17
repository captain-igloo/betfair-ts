import { GetAccountStatementRequest, ExchangeApi } from '../lib/index';

const args = process.argv.slice(2);

if (args.length !== 3) {
    console.log('Usage: npm run get-account-statement -- <application-key> <username> <password>');
} else {
    const api = new ExchangeApi(args[0]);
    api.login(args[1], args[2]).then(async (result: boolean) => {
        if (result) {
            const request = new GetAccountStatementRequest({
                fromRecord: 0,
            });
            const response = await api.getAccountStatement(request);
            if (response.isSuccess()) {
                response.getAccountStatement()?.forEach((statementItem) => {
                    const legacyData = statementItem.getLegacyData();
                    if (legacyData) {
                        console.log(
                            legacyData.getMarketName(),
                            legacyData.getSelectionName(),
                            legacyData.getBetType(),
                            legacyData.getBetSize(),
                            legacyData.getAvgPrice(),
                            legacyData.getWinLose(),
                        );
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
