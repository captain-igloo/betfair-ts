"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginEndPoint = void 0;
require("isomorphic-fetch");
const AccountDetailsResponse_1 = require("./account/AccountDetailsResponse");
const AccountFundsResponse_1 = require("./account/AccountFundsResponse");
const AccountStatementReport_1 = require("./account/AccountStatementReport");
const ActivateApplicationSubscriptionResponse_1 = require("./account/ActivateApplicationSubscriptionResponse");
const AuthorisationResponse_1 = require("./account/AuthorisationResponse");
const CancelApplicationSubscriptionResponse_1 = require("./account/CancelApplicationSubscriptionResponse");
const DeveloperApp_1 = require("./account/DeveloperApp");
const GetAffiliateRelationResponse_1 = require("./account/GetAffiliateRelationResponse");
const GetApplicationSubscriptionHistoryResponse_1 = require("./account/GetApplicationSubscriptionHistoryResponse");
const GetApplicationSubscriptionTokenResponse_1 = require("./account/GetApplicationSubscriptionTokenResponse");
const GetDeveloperAppKeysResponse_1 = require("./account/GetDeveloperAppKeysResponse");
const GetVendorClientIdResponse_1 = require("./account/GetVendorClientIdResponse");
const IsAccountSubscribedToWebAppResponse_1 = require("./account/IsAccountSubscribedToWebAppResponse");
const ListAccountSubscriptionTokensResponse_1 = require("./account/ListAccountSubscriptionTokensResponse");
const ListApplicationSubscriptionTokensResponse_1 = require("./account/ListApplicationSubscriptionTokensResponse");
const ListAuthorizedWebAppsResponse_1 = require("./account/ListAuthorizedWebAppsResponse");
const ListCurrencyRatesResponse_1 = require("./account/ListCurrencyRatesResponse");
const RevokeAccessToWebAppResponse_1 = require("./account/RevokeAccessToWebAppResponse");
const TransferResponse_1 = require("./account/TransferResponse");
const UpdateApplicationSubscriptionResponse_1 = require("./account/UpdateApplicationSubscriptionResponse");
const VendorAccessTokenInfo_1 = require("./account/VendorAccessTokenInfo");
const VendorDetails_1 = require("./account/VendorDetails");
const HeartbeatReport_1 = require("./heartbeat/HeartbeatReport");
const AddExposureReuseEnabledEventsResponse_1 = require("./sport/AddExposureReuseEnabledEventsResponse");
const CancelExecutionReport_1 = require("./sport/CancelExecutionReport");
const ClearedOrderSummaryReport_1 = require("./sport/ClearedOrderSummaryReport");
const CurrentOrderSummaryReport_1 = require("./sport/CurrentOrderSummaryReport");
const GetExposureReuseEnabledEventsResponse_1 = require("./sport/GetExposureReuseEnabledEventsResponse");
const ListCompetitionsResponse_1 = require("./sport/ListCompetitionsResponse");
const ListCountriesResponse_1 = require("./sport/ListCountriesResponse");
const ListEventsResponse_1 = require("./sport/ListEventsResponse");
const ListEventTypesResponse_1 = require("./sport/ListEventTypesResponse");
const ListExposureLimitsForMarketGroupsResponse_1 = require("./sport/ListExposureLimitsForMarketGroupsResponse");
const ListMarketBookResponse_1 = require("./sport/ListMarketBookResponse");
const ListMarketCatalogueResponse_1 = require("./sport/ListMarketCatalogueResponse");
const ListMarketProfitAndLossResponse_1 = require("./sport/ListMarketProfitAndLossResponse");
const ListMarketTypesResponse_1 = require("./sport/ListMarketTypesResponse");
const ListRunnerBookResponse_1 = require("./sport/ListRunnerBookResponse");
const ListTimeRangesResponse_1 = require("./sport/ListTimeRangesResponse");
const ListVenuesResponse_1 = require("./sport/ListVenuesResponse");
const PlaceExecutionReport_1 = require("./sport/PlaceExecutionReport");
const RemoveDefaultExposureLimitForMarketGroupsResponse_1 = require("./sport/RemoveDefaultExposureLimitForMarketGroupsResponse");
const RemoveExposureLimitForMarketGroupResponse_1 = require("./sport/RemoveExposureLimitForMarketGroupResponse");
const RemoveExposureReuseEnabledEventsResponse_1 = require("./sport/RemoveExposureReuseEnabledEventsResponse");
const ReplaceExecutionReport_1 = require("./sport/ReplaceExecutionReport");
const SetDefaultExposureLimitForMarketGroupsResponse_1 = require("./sport/SetDefaultExposureLimitForMarketGroupsResponse");
const SetExposureLimitForMarketGroupResponse_1 = require("./sport/SetExposureLimitForMarketGroupResponse");
const UnblockMarketGroupResponse_1 = require("./sport/UnblockMarketGroupResponse");
const UpdateExecutionReport_1 = require("./sport/UpdateExecutionReport");
const API_HOST = 'https://api.betfair.com';
var Api;
(function (Api) {
    Api["Account"] = "account";
    Api["Betting"] = "betting";
    Api["Heartbeat"] = "heartbeat";
})(Api || (Api = {}));
var LoginEndPoint;
(function (LoginEndPoint) {
    LoginEndPoint["Global"] = "https://identitysso.betfair.com/api/login";
    LoginEndPoint["Italy"] = "https://identitysso.betfair.it/api/login";
    LoginEndPoint["Spain"] = "https://identitysso.betfair.es/api/login";
    LoginEndPoint["Romania"] = "https://identitysso.betfair.ro/api/login";
})(LoginEndPoint = exports.LoginEndPoint || (exports.LoginEndPoint = {}));
const buildUri = (api, method) => {
    return `${API_HOST}/exchange/${api}/rest/v1.0/${method}/`;
};
class ExchangeApi {
    constructor(applicationKey = '') {
        this.authToken = '';
        this.loginEndPoint = LoginEndPoint.Global;
        this.applicationKey = applicationKey;
    }
    setApplicationKey(applicationKey) {
        this.applicationKey = applicationKey;
    }
    setLoginEndPoint(loginEndPoint) {
        this.loginEndPoint = loginEndPoint;
    }
    login(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            this.authToken = '';
            let success = false;
            const resp = yield fetch(this.loginEndPoint, {
                body: `username=${username}&password=${password}`,
                headers: {
                    'Accept': 'application/json',
                    'Accept-Encoding': 'gzip',
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'X-Application': this.applicationKey,
                },
                method: 'POST',
            });
            const json = yield resp.json();
            if (json.status === 'SUCCESS') {
                this.authToken = json.token;
                success = true;
            }
            return success;
        });
    }
    logout() {
        this.authToken = '';
    }
    fetchMenu() {
        return __awaiter(this, void 0, void 0, function* () {
            const uri = `${API_HOST}/exchange/betting/rest/v1/en/navigation/menu.json`;
            const response = yield fetch(uri, {
                headers: {
                    'Accept': 'application/json',
                    'Accept-Encoding': 'gzip',
                    'Content-Type': 'application/json',
                    'X-Application': this.applicationKey,
                    'X-Authentication': this.authToken,
                },
                method: 'POST',
            });
            return yield response.json();
        });
    }
    listEventTypes(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return new ListEventTypesResponse_1.default(yield this.performRequest(Api.Betting, 'listEventTypes', request));
        });
    }
    listCompetitions(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return new ListCompetitionsResponse_1.default(yield this.performRequest(Api.Betting, 'listCompetitions', request));
        });
    }
    listTimeRanges(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return new ListTimeRangesResponse_1.default(yield this.performRequest(Api.Betting, 'listTimeRanges', request));
        });
    }
    listEvents(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return new ListEventsResponse_1.default(yield this.performRequest(Api.Betting, 'listEvents', request));
        });
    }
    listMarketTypes(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return new ListMarketTypesResponse_1.default(yield this.performRequest(Api.Betting, 'listMarketTypes', request));
        });
    }
    listCountries(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return new ListCountriesResponse_1.default(yield this.performRequest(Api.Betting, 'listCountries', request));
        });
    }
    listVenues(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return new ListVenuesResponse_1.default(yield this.performRequest(Api.Betting, 'listVenues', request));
        });
    }
    listMarketCatalogue(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return new ListMarketCatalogueResponse_1.default(yield this.performRequest(Api.Betting, 'listMarketCatalogue', request));
        });
    }
    listMarketBook(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return new ListMarketBookResponse_1.default(yield this.performRequest(Api.Betting, 'listMarketBook', request));
        });
    }
    listRunnerBook(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return new ListRunnerBookResponse_1.default(yield this.performRequest(Api.Betting, 'listRunnerBook', request));
        });
    }
    listCurrentOrders(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return new CurrentOrderSummaryReport_1.default(yield this.performRequest(Api.Betting, 'listCurrentOrders', request));
        });
    }
    listClearedOrders(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return new ClearedOrderSummaryReport_1.default(yield this.performRequest(Api.Betting, 'listClearedOrders', request));
        });
    }
    placeOrders(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return new PlaceExecutionReport_1.default(yield this.performRequest(Api.Betting, 'placeOrders', request));
        });
    }
    cancelOrders(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return new CancelExecutionReport_1.default(yield this.performRequest(Api.Betting, 'cancelOrders', request));
        });
    }
    replaceOrders(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return new ReplaceExecutionReport_1.default(yield this.performRequest(Api.Betting, 'replaceOrders', request));
        });
    }
    updateOrders(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return new UpdateExecutionReport_1.default(yield this.performRequest(Api.Betting, 'updateOrders', request));
        });
    }
    listMarketProfitAndLoss(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return new ListMarketProfitAndLossResponse_1.default(yield this.performRequest(Api.Betting, 'listMarketProfitAndLoss', request));
        });
    }
    setDefaultExposureLimitForMarketGroups(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return new SetDefaultExposureLimitForMarketGroupsResponse_1.default(yield this.performRequest(Api.Betting, 'setDefaultExposureLimitForMarketGroups', request));
        });
    }
    setExposureLimitForMarketGroup(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return new SetExposureLimitForMarketGroupResponse_1.default(yield this.performRequest(Api.Betting, 'setExposureLimitForMarketGroup', request));
        });
    }
    removeDefaultExposureLimitForMarketGroups(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return new RemoveDefaultExposureLimitForMarketGroupsResponse_1.default(yield this.performRequest(Api.Betting, 'removeDefaultExposureLimitForMarketGroups', request));
        });
    }
    removeExposureLimitForMarketGroup(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return new RemoveExposureLimitForMarketGroupResponse_1.default(yield this.performRequest(Api.Betting, 'removeExposureLimitForMarketGroup', request));
        });
    }
    listExposureLimitsForMarketGroups(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return new ListExposureLimitsForMarketGroupsResponse_1.default(yield this.performRequest(Api.Betting, 'listExposureLimitsForMarketGroups', request));
        });
    }
    unblockMarketGroup(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return new UnblockMarketGroupResponse_1.default(yield this.performRequest(Api.Betting, 'unblockMarketGroup', request));
        });
    }
    getExposureReuseEnabledEvents() {
        return __awaiter(this, void 0, void 0, function* () {
            return new GetExposureReuseEnabledEventsResponse_1.default(yield this.performRequest(Api.Betting, 'getExposureReuseEnabledEvents'));
        });
    }
    addExposureReuseEnabledEvents(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return new AddExposureReuseEnabledEventsResponse_1.default(yield this.performRequest(Api.Betting, 'addExposureReuseEnabledEvents', request));
        });
    }
    removeExposureReuseEnabledEvents(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return new RemoveExposureReuseEnabledEventsResponse_1.default(yield this.performRequest(Api.Betting, 'removeExposureReuseEnabledEvents', request));
        });
    }
    createDeveloperAppKeys(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return new DeveloperApp_1.default(yield this.performRequest(Api.Account, 'createDeveloperAppKeys', request));
        });
    }
    getDeveloperAppKeys() {
        return __awaiter(this, void 0, void 0, function* () {
            return new GetDeveloperAppKeysResponse_1.default(yield this.performRequest(Api.Account, 'getDeveloperAppKeys'));
        });
    }
    getAccountFunds(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return new AccountFundsResponse_1.default(yield this.performRequest(Api.Account, 'getAccountFunds', request));
        });
    }
    transferFunds(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return new TransferResponse_1.default(yield this.performRequest(Api.Account, 'transferFunds', request));
        });
    }
    getAccountDetails() {
        return __awaiter(this, void 0, void 0, function* () {
            return new AccountDetailsResponse_1.default(yield this.performRequest(Api.Account, 'getAccountDetails'));
        });
    }
    getVendorClientId() {
        return __awaiter(this, void 0, void 0, function* () {
            return new GetVendorClientIdResponse_1.default(yield this.performRequest(Api.Account, 'getVendorClientId'));
        });
    }
    getApplicationSubscriptionToken(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return new GetApplicationSubscriptionTokenResponse_1.default(yield this.performRequest(Api.Account, 'getApplicationSubscriptionToken', request));
        });
    }
    activateApplicationSubscription(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return new ActivateApplicationSubscriptionResponse_1.default(yield this.performRequest(Api.Account, 'activateApplicationSubscription', request));
        });
    }
    cancelApplicationSubscription(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return new CancelApplicationSubscriptionResponse_1.default(yield this.performRequest(Api.Account, 'cancelApplicationSubscription', request));
        });
    }
    updateApplicationSubscription(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return new UpdateApplicationSubscriptionResponse_1.default(yield this.performRequest(Api.Account, 'updateApplicationSubscription', request));
        });
    }
    listApplicationSubscriptionTokens(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return new ListApplicationSubscriptionTokensResponse_1.default(yield this.performRequest(Api.Account, 'listApplicationSubscriptionTokens', request));
        });
    }
    listAccountSubscriptionTokens() {
        return __awaiter(this, void 0, void 0, function* () {
            return new ListAccountSubscriptionTokensResponse_1.default(yield this.performRequest(Api.Account, 'listAccountSubscriptionTokens'));
        });
    }
    getApplicationSubscriptionHistory(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return new GetApplicationSubscriptionHistoryResponse_1.default(yield this.performRequest(Api.Account, 'getApplicationSubscriptionHistory', request));
        });
    }
    getAccountStatement(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return new AccountStatementReport_1.default(yield this.performRequest(Api.Account, 'getAccountStatement', request));
        });
    }
    listCurrencyRates(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return new ListCurrencyRatesResponse_1.default(yield this.performRequest(Api.Account, 'listCurrencyRates', request));
        });
    }
    getAuthorisationCode(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return new AuthorisationResponse_1.default(yield this.performRequest(Api.Account, 'getAuthorisationCode', request));
        });
    }
    token(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return new VendorAccessTokenInfo_1.default(yield this.performRequest(Api.Account, 'token', request));
        });
    }
    getVendorDetails(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return new VendorDetails_1.default(yield this.performRequest(Api.Account, 'getVendorDetails', request));
        });
    }
    revokeAccessToWebApp(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return new RevokeAccessToWebAppResponse_1.default(yield this.performRequest(Api.Account, 'revokeAccessToWebApp', request));
        });
    }
    listAuthorizedWebApps() {
        return __awaiter(this, void 0, void 0, function* () {
            return new ListAuthorizedWebAppsResponse_1.default(yield this.performRequest(Api.Account, 'listAuthorizedWebApps'));
        });
    }
    isAccountSubscribedToWebApp(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return new IsAccountSubscribedToWebAppResponse_1.default(yield this.performRequest(Api.Account, 'isAccountSubscribedToWebApp', request));
        });
    }
    getAffiliateRelation(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return new GetAffiliateRelationResponse_1.default(yield this.performRequest(Api.Account, 'getAffiliateRelation', request));
        });
    }
    heartbeat(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return new HeartbeatReport_1.default(yield this.performRequest(Api.Heartbeat, 'heartbeat', request));
        });
    }
    performRequest(api, method, request = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const uri = buildUri(api, method);
            const response = yield fetch(uri, {
                body: request ? request.toString() : '',
                headers: {
                    'Accept': 'application/json',
                    'Accept-Encoding': 'gzip',
                    'Content-Type': 'application/json',
                    'X-Application': this.applicationKey,
                    'X-Authentication': this.authToken,
                },
                method: 'POST',
            });
            return yield response.json();
        });
    }
}
exports.default = ExchangeApi;
//# sourceMappingURL=ExchangeApi.js.map