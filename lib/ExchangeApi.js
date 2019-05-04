"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const LOGIN_END_POINT_CERT = 'https://identitysso-cert.betfair.com/api/certlogin';
const buildUri = (api, method) => {
    return `${API_HOST}/exchange/${api}/rest/v1.0/${method}/`;
};
class ExchangeApi {
    constructor(applicationKey) {
        this.authToken = '';
        this.loginEndPoint = LoginEndPoint.Global;
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
    listEventTypes(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = new ListEventTypesResponse_1.default();
            response.fromJson(yield this.performRequest(Api.Betting, 'listEventTypes', request));
            return response;
        });
    }
    listCompetitions(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = new ListCompetitionsResponse_1.default();
            response.fromJson(yield this.performRequest(Api.Betting, 'listCompetitions', request));
            return response;
        });
    }
    listTimeRanges(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = new ListTimeRangesResponse_1.default();
            response.fromJson(yield this.performRequest(Api.Betting, 'listTimeRanges', request));
            return response;
        });
    }
    listEvents(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = new ListEventsResponse_1.default();
            response.fromJson(yield this.performRequest(Api.Betting, 'listEvents', request));
            return response;
        });
    }
    listMarketTypes(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = new ListMarketTypesResponse_1.default();
            response.fromJson(yield this.performRequest(Api.Betting, 'listMarketTypes', request));
            return response;
        });
    }
    listCountries(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = new ListCountriesResponse_1.default();
            response.fromJson(yield this.performRequest(Api.Betting, 'listCountries', request));
            return response;
        });
    }
    listVenues(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = new ListVenuesResponse_1.default();
            response.fromJson(yield this.performRequest(Api.Betting, 'listVenues', request));
            return response;
        });
    }
    listMarketCatalogue(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = new ListMarketCatalogueResponse_1.default();
            response.fromJson(yield this.performRequest(Api.Betting, 'listMarketCatalogue', request));
            return response;
        });
    }
    listMarketBook(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = new ListMarketBookResponse_1.default();
            response.fromJson(yield this.performRequest(Api.Betting, 'listMarketBook', request));
            return response;
        });
    }
    listRunnerBook(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = new ListRunnerBookResponse_1.default();
            response.fromJson(yield this.performRequest(Api.Betting, 'listRunnerBook', request));
            return response;
        });
    }
    listCurrentOrders(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = new CurrentOrderSummaryReport_1.default();
            response.fromJson(yield this.performRequest(Api.Betting, 'listCurrentOrders', request));
            return response;
        });
    }
    listClearedOrders(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = new ClearedOrderSummaryReport_1.default();
            response.fromJson(yield this.performRequest(Api.Betting, 'listClearedOrders', request));
            return response;
        });
    }
    placeOrders(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = new PlaceExecutionReport_1.default();
            response.fromJson(yield this.performRequest(Api.Betting, 'placeOrders', request));
            return response;
        });
    }
    cancelOrders(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = new CancelExecutionReport_1.default();
            response.fromJson(yield this.performRequest(Api.Betting, 'cancelOrders', request));
            return response;
        });
    }
    replaceOrders(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = new ReplaceExecutionReport_1.default();
            response.fromJson(yield this.performRequest(Api.Betting, 'replaceOrders', request));
            return response;
        });
    }
    updateOrders(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = new UpdateExecutionReport_1.default();
            response.fromJson(yield this.performRequest(Api.Betting, 'updateOrders', request));
            return response;
        });
    }
    listMarketProfitAndLoss(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = new ListMarketProfitAndLossResponse_1.default();
            response.fromJson(yield this.performRequest(Api.Betting, 'listMarketProfitAndLoss', request));
            return response;
        });
    }
    setDefaultExposureLimitForMarketGroups(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = new SetDefaultExposureLimitForMarketGroupsResponse_1.default();
            response.fromJson(yield this.performRequest(Api.Betting, 'setDefaultExposureLimitForMarketGroups', request));
            return response;
        });
    }
    setExposureLimitForMarketGroup(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = new SetExposureLimitForMarketGroupResponse_1.default();
            response.fromJson(yield this.performRequest(Api.Betting, 'setExposureLimitForMarketGroup', request));
            return response;
        });
    }
    removeDefaultExposureLimitForMarketGroups(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = new RemoveDefaultExposureLimitForMarketGroupsResponse_1.default();
            response.fromJson(yield this.performRequest(Api.Betting, 'removeDefaultExposureLimitForMarketGroups', request));
            return response;
        });
    }
    removeExposureLimitForMarketGroup(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = new RemoveExposureLimitForMarketGroupResponse_1.default();
            response.fromJson(yield this.performRequest(Api.Betting, 'removeExposureLimitForMarketGroup', request));
            return response;
        });
    }
    listExposureLimitsForMarketGroups(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = new ListExposureLimitsForMarketGroupsResponse_1.default();
            response.fromJson(yield this.performRequest(Api.Betting, 'listExposureLimitsForMarketGroups', request));
            return response;
        });
    }
    unblockMarketGroup(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = new UnblockMarketGroupResponse_1.default();
            response.fromJson(yield this.performRequest(Api.Betting, 'unblockMarketGroup', request));
            return response;
        });
    }
    getExposureReuseEnabledEvents() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = new GetExposureReuseEnabledEventsResponse_1.default();
            response.fromJson(yield this.performRequest(Api.Betting, 'getExposureReuseEnabledEvents'));
            return response;
        });
    }
    addExposureReuseEnabledEvents(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = new AddExposureReuseEnabledEventsResponse_1.default();
            response.fromJson(yield this.performRequest(Api.Betting, 'addExposureReuseEnabledEvents', request));
            return response;
        });
    }
    removeExposureReuseEnabledEvents(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = new RemoveExposureReuseEnabledEventsResponse_1.default();
            response.fromJson(yield this.performRequest(Api.Betting, 'removeExposureReuseEnabledEvents', request));
            return response;
        });
    }
    createDeveloperAppKeys(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = new DeveloperApp_1.default();
            response.fromJson(yield this.performRequest(Api.Account, 'createDeveloperAppKeys', request));
            return response;
        });
    }
    getDeveloperAppKeys() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = new GetDeveloperAppKeysResponse_1.default();
            response.fromJson(yield this.performRequest(Api.Account, 'getDeveloperAppKeys'));
            return response;
        });
    }
    getAccountFunds(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = new AccountFundsResponse_1.default();
            response.fromJson(yield this.performRequest(Api.Account, 'getAccountFunds', request));
            return response;
        });
    }
    transferFunds(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = new TransferResponse_1.default();
            response.fromJson(yield this.performRequest(Api.Account, 'transferFunds', request));
            return response;
        });
    }
    getAccountDetails() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = new AccountDetailsResponse_1.default();
            response.fromJson(yield this.performRequest(Api.Account, 'getAccountDetails'));
            return response;
        });
    }
    getVendorClientId() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = new GetVendorClientIdResponse_1.default();
            response.fromJson(yield this.performRequest(Api.Account, 'getVendorClientId'));
            return response;
        });
    }
    getApplicationSubscriptionToken(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = new GetApplicationSubscriptionTokenResponse_1.default();
            response.fromJson(yield this.performRequest(Api.Account, 'getApplicationSubscriptionToken', request));
            return response;
        });
    }
    activateApplicationSubscription(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = new ActivateApplicationSubscriptionResponse_1.default();
            response.fromJson(yield this.performRequest(Api.Account, 'activateApplicationSubscription', request));
            return response;
        });
    }
    cancelApplicationSubscription(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = new CancelApplicationSubscriptionResponse_1.default();
            response.fromJson(yield this.performRequest(Api.Account, 'cancelApplicationSubscription', request));
            return response;
        });
    }
    updateApplicationSubscription(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = new UpdateApplicationSubscriptionResponse_1.default();
            response.fromJson(yield this.performRequest(Api.Account, 'updateApplicationSubscription', request));
            return response;
        });
    }
    listApplicationSubscriptionTokens(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = new ListApplicationSubscriptionTokensResponse_1.default();
            response.fromJson(yield this.performRequest(Api.Account, 'listApplicationSubscriptionTokens', request));
            return response;
        });
    }
    listAccountSubscriptionTokens() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = new ListAccountSubscriptionTokensResponse_1.default();
            response.fromJson(yield this.performRequest(Api.Account, 'listAccountSubscriptionTokens'));
            return response;
        });
    }
    getApplicationSubscriptionHistory(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = new GetApplicationSubscriptionHistoryResponse_1.default();
            response.fromJson(yield this.performRequest(Api.Account, 'getApplicationSubscriptionHistory', request));
            return response;
        });
    }
    getAccountStatement(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = new AccountStatementReport_1.default();
            response.fromJson(yield this.performRequest(Api.Account, 'getAccountStatement', request));
            return response;
        });
    }
    listCurrencyRates(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = new ListCurrencyRatesResponse_1.default();
            response.fromJson(yield this.performRequest(Api.Account, 'listCurrencyRates', request));
            return response;
        });
    }
    getAuthorisationCode(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = new AuthorisationResponse_1.default();
            response.fromJson(yield this.performRequest(Api.Account, 'getAuthorisationCode', request));
            return response;
        });
    }
    token(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = new VendorAccessTokenInfo_1.default();
            response.fromJson(yield this.performRequest(Api.Account, 'token', request));
            return response;
        });
    }
    getVendorDetails(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = new VendorDetails_1.default();
            response.fromJson(yield this.performRequest(Api.Account, 'getVendorDetails', request));
            return response;
        });
    }
    revokeAccessToWebApp(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = new RevokeAccessToWebAppResponse_1.default();
            response.fromJson(yield this.performRequest(Api.Account, 'revokeAccessToWebApp', request));
            return response;
        });
    }
    listAuthorizedWebApps() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = new ListAuthorizedWebAppsResponse_1.default();
            response.fromJson(yield this.performRequest(Api.Account, 'listAuthorizedWebApps'));
            return response;
        });
    }
    isAccountSubscribedToWebApp(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = new IsAccountSubscribedToWebAppResponse_1.default();
            response.fromJson(yield this.performRequest(Api.Account, 'isAccountSubscribedToWebApp', request));
            return response;
        });
    }
    getAffiliateRelation(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = new GetAffiliateRelationResponse_1.default();
            response.fromJson(yield this.performRequest(Api.Account, 'getAffiliateRelation', request));
            return response;
        });
    }
    heartbeat(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = new HeartbeatReport_1.default();
            response.fromJson(yield this.performRequest(Api.Heartbeat, 'heartbeat', request));
            return response;
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