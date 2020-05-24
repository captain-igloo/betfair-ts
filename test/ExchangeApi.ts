import * as fetchMock from 'fetch-mock';
import * as test from 'tape';

import ExchangeApi, { LoginEndPoint } from '../src/ExchangeApi';
import ListEventTypesRequest from '../src/sport/ListEventTypesRequest';
import MarketFilter from '../src/sport/MarketFilter';

test('login() should send username and password and return true', async (t) => {
    fetchMock.post('https://identitysso.betfair.com/api/login', {
        body: {
            status: 'SUCCESS',
            token: 'token',
        },
    });

    const exchangeApi = new ExchangeApi('application-key');
    const response = await exchangeApi.login('username', 'password');
    const last = fetchMock.lastCall() as fetchMock.MockCall;
    // should send username and password
    t.equal('username=username&password=password', (last[1] as RequestInit).body);
    // check headers
    t.same({
        Accept: 'application/json',
        'Accept-Encoding': 'gzip',
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Application': 'application-key',
    }, (last[1] as RequestInit).headers);
    // response should be true
    t.ok(response);
    fetchMock.restore();
    t.end();
});

test('Failed login should return false', async (t) => {
    fetchMock.post('https://identitysso.betfair.com/api/login', {
        body: {
            status: 'FAILED',
        },
    });

    const exchangeApi = new ExchangeApi('application-key');
    const response = await exchangeApi.login('username', 'password');
    // response should be false
    t.notOk(response);
    fetchMock.restore();
    t.end();
});

test('set login end point', async (t) => {
    fetchMock.post('https://identitysso.betfair.it/api/login', {
        body: {
            status: 'SUCCESS',
            token: 'token',
        },
    });

    const exchangeApi = new ExchangeApi('application-key');
    exchangeApi.setLoginEndPoint(LoginEndPoint.Italy);
    const response = await exchangeApi.login('username', 'password');
    t.ok(response);
    fetchMock.restore();
    t.end();
});

test('logout destroys token', async (t) => {
    fetchMock.post('https://identitysso.betfair.com/api/login', {
        body: {
            status: 'SUCCESS',
            token: 'token',
        },
    });
    fetchMock.post('https://api.betfair.com/exchange/betting/rest/v1.0/listEventTypes/', {
        body: [],
    });

    const exchangeApi = new ExchangeApi('application-key');
    await exchangeApi.login('username', 'password');
    exchangeApi.logout();
    const request = new ListEventTypesRequest({
        filter: new MarketFilter({}),
    });
    const response = await exchangeApi.listEventTypes(request);

    const last = fetchMock.lastCall() as fetchMock.MockCall;
    t.equal('', ((last[1] as RequestInit).headers as any)['X-Authentication']);

    fetchMock.restore();
    t.end();
});
