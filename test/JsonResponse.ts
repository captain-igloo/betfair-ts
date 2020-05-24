import * as test from 'tape';

import ListVenuesResponse from '../src/sport/ListVenuesResponse';

test('JsonResponse.isSuccess() should return false on error', (t) => {
    const listVenuesResponse = new ListVenuesResponse({
        faultcode: 'faultcode',
        faultstring: 'faultstring',
    } as any);
    t.notOk(listVenuesResponse.isSuccess());
    t.equal(listVenuesResponse.getFaultCode(), 'faultcode');
    t.equal(listVenuesResponse.getFaultString(), 'faultstring');
    t.end();
});

test('JsonResponse.isSuccess() should return true on success', (t) => {
    const listVenuesResponse = new ListVenuesResponse([]);
    t.ok(listVenuesResponse.isSuccess());
    t.equal(listVenuesResponse.getFaultCode(), '');
    t.equal(listVenuesResponse.getFaultString(), '');
    t.end();
});