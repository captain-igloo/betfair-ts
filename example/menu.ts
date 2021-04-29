import { ExchangeApi } from '../lib/index';

const args = process.argv.slice(2);

if (args.length !== 3) {
    console.log('Usage: npm run menu -- <application-key> <username> <password>');
} else {
    const api = new ExchangeApi(args[0]);
    api.login(args[1], args[2]).then(async (result: boolean) => {
        if (result) {
            console.log(await api.fetchMenu());
        } else {
            console.log('Failed to log in');
        }
    });
}
