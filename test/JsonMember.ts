import * as test from 'tape';

import TimeRange from '../src/common/TimeRange';
import MarketBettingType from '../src/sport/enum/MarketBettingType';
import RunnerStatus from '../src/sport/enum/RunnerStatus';
import Side from '../src/sport/enum/Side';
import MarketFilter from '../src/sport/MarketFilter';
import Runner from '../src/sport/Runner';
import Matches from '../src/sport/Matches';
import StatementItem from '../src/account/StatementItem';

test('encode / decode string', (t) => {
    const marketFilter = new MarketFilter({
        textQuery: 'textQuery',
    });
    t.equal(marketFilter.toString(), '{"textQuery":"textQuery"}');
    marketFilter.setTextQuery('');
    t.equal(marketFilter.toString(), '{"textQuery":""}');
    t.end();
});

test('encode / decode boolean', (t) => {
    const marketFilter = new MarketFilter({
        bspOnly: true,
        inPlayOnly: false,
    });
    t.equal(marketFilter.toString(), '{"bspOnly":true,"inPlayOnly":false}');
    t.end();
});

test('encode / decode set of strings', (t) => {
    const marketFilter = new MarketFilter({
        eventTypeIds: ['event-type-id-1'],
        eventIds: new Set(['event-id-1']),
    });
    t.equal(marketFilter.toString(), '{"eventTypeIds":["event-type-id-1"],"eventIds":["event-id-1"]}');
    t.end();
});

test('encode / decode set of Enum', (t) => {
    const marketFilter = new MarketFilter({
        marketBettingTypes: [MarketBettingType.ODDS],
    });
    t.equal(marketFilter.toString(), '{"marketBettingTypes":["ODDS"]}');
    t.end();
});

test('encode / decode JsonMember', (t) => {
    const marketFilter = new MarketFilter({
        marketStartTime: {},
    });
    t.equal(marketFilter.toString(), '{"marketStartTime":{}}');
    marketFilter.setMarketStartTime(new TimeRange({
        from: new Date(1590213497000),
        to: new Date(1590213498000),
    }));
    t.equal(marketFilter.toString(), '{"marketStartTime":{"from":"2020-05-23T05:58:17.000Z","to":"2020-05-23T05:58:18.000Z"}}');
    t.end();
});

test('encode / decode Map<string,JsonMember>', (t) => {
    const matches = {
        matches: [{
            price: 2.22,
            side:  Side.BACK, 
            size: 99,
        }],
    };
    let runner = new Runner({
        adjustmentFactor: 1,
        handicap: 2,
        matchesByStrategy: {
            strategy: matches,
        },
        selectionId: 3,
        status: RunnerStatus.ACTIVE,
    });
    const expected = '{"selectionId":3,"handicap":2,"status":"ACTIVE","adjustmentFactor":1,"matchesByStrategy":{"strategy":{"matches":[{"side":"BACK","price":2.22,"size":99}]}}}';
    t.equal(runner.toString(), expected);
    runner = new Runner({
        adjustmentFactor: 1,
        handicap: 2,
        matchesByStrategy: new Map([['strategy', new Matches(matches)]]),
        selectionId: 3,
        status: RunnerStatus.ACTIVE,
    });
    t.equal(runner.toString(), expected);
    t.end();
});

test('encode / decode Map<string,string>', (t) => {
    let statementItem = new StatementItem({
        itemDate: new Date(1590213497000),
        itemClassData: new Map([['key', 'value']]),
    });
    const expected = '{"itemDate":"2020-05-23T05:58:17.000Z","itemClassData":{"key":"value"}}';
    t.equal(statementItem.toString(), expected);
    statementItem = new StatementItem({
        itemDate: new Date(1590213497000),
        itemClassData: {key: 'value'},
    });
    t.equal(statementItem.toString(), expected);

    t.end();
});
