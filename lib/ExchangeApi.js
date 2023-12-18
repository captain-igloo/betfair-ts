"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginEndPoint = void 0;
require("cross-fetch/polyfill");
const https = require("https");
const axios_1 = require("axios");
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
    // TODO: Revert changes to previous login functionality
    async login(username, password, betfairPrivateKey, betfairPublicCert) {
        const agent = new https.Agent({
            cert: betfairPublicCert,
            key: betfairPrivateKey,
        });
        // Perform a non-interactive login
        const response = await axios_1.default.post(this.loginEndPoint, `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`, {
            headers: {
                'X-Application': this.applicationKey,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            httpsAgent: agent,
        });
        if (response.data.sessionToken) {
            this.authToken = response.data.sessionToken;
            return true;
        }
        console.error(response.data, 'error logging in');
        return false;
    }
    /**
     * Work in progress cert login function. Try and reduce duplication with login()
     */
    async loginCert(username, password, betfairPrivateKey, betfairPublicCert) {
        const agent = new https.Agent({
            cert: betfairPublicCert,
            key: betfairPrivateKey,
        });
        // Perform a non-interactive login
        const response = await axios_1.default.post(
        // TODO: Make flexible for other territories
        'https://identitysso-cert.betfair.com/api/certlogin', `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`, {
            headers: {
                'X-Application': this.applicationKey,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            httpsAgent: agent,
        });
        if (response.data.sessionToken) {
            this.authToken = response.data.sessionToken;
        }
        return response.data;
    }
    logout() {
        this.authToken = '';
    }
    getToken() {
        return this.authToken;
    }
    setToken(token) {
        this.authToken = token;
    }
    async fetchMenu() {
        const uri = `${API_HOST}/exchange/betting/rest/v1/en/navigation/menu.json`;
        const response = await fetch(uri, {
            headers: {
                'Accept': 'application/json',
                'Accept-Encoding': 'gzip',
                'Content-Type': 'application/json',
                'X-Application': this.applicationKey,
                'X-Authentication': this.authToken,
            },
            method: 'POST',
        });
        if (!response.ok) {
            throw response;
        }
        return await response.json();
    }
    async listEventTypes(request) {
        return new ListEventTypesResponse_1.default(await this.performRequest(Api.Betting, 'listEventTypes', request));
    }
    async listCompetitions(request) {
        return new ListCompetitionsResponse_1.default(await this.performRequest(Api.Betting, 'listCompetitions', request));
    }
    async listTimeRanges(request) {
        return new ListTimeRangesResponse_1.default(await this.performRequest(Api.Betting, 'listTimeRanges', request));
    }
    async listEvents(request) {
        return new ListEventsResponse_1.default(await this.performRequest(Api.Betting, 'listEvents', request));
    }
    async listMarketTypes(request) {
        return new ListMarketTypesResponse_1.default(await this.performRequest(Api.Betting, 'listMarketTypes', request));
    }
    async listCountries(request) {
        return new ListCountriesResponse_1.default(await this.performRequest(Api.Betting, 'listCountries', request));
    }
    async listVenues(request) {
        return new ListVenuesResponse_1.default(await this.performRequest(Api.Betting, 'listVenues', request));
    }
    async listMarketCatalogue(request) {
        return new ListMarketCatalogueResponse_1.default(await this.performRequest(Api.Betting, 'listMarketCatalogue', request));
    }
    async listMarketBook(request) {
        return new ListMarketBookResponse_1.default(await this.performRequest(Api.Betting, 'listMarketBook', request));
    }
    async listRunnerBook(request) {
        return new ListRunnerBookResponse_1.default(await this.performRequest(Api.Betting, 'listRunnerBook', request));
    }
    async listCurrentOrders(request) {
        return new CurrentOrderSummaryReport_1.default(await this.performRequest(Api.Betting, 'listCurrentOrders', request));
    }
    async listClearedOrders(request) {
        return new ClearedOrderSummaryReport_1.default(await this.performRequest(Api.Betting, 'listClearedOrders', request));
    }
    async placeOrders(request) {
        return new PlaceExecutionReport_1.default(await this.performRequest(Api.Betting, 'placeOrders', request));
    }
    async cancelOrders(request) {
        return new CancelExecutionReport_1.default(await this.performRequest(Api.Betting, 'cancelOrders', request));
    }
    async replaceOrders(request) {
        return new ReplaceExecutionReport_1.default(await this.performRequest(Api.Betting, 'replaceOrders', request));
    }
    async updateOrders(request) {
        return new UpdateExecutionReport_1.default(await this.performRequest(Api.Betting, 'updateOrders', request));
    }
    async listMarketProfitAndLoss(request) {
        return new ListMarketProfitAndLossResponse_1.default(await this.performRequest(Api.Betting, 'listMarketProfitAndLoss', request));
    }
    async setDefaultExposureLimitForMarketGroups(request) {
        return new SetDefaultExposureLimitForMarketGroupsResponse_1.default(await this.performRequest(Api.Betting, 'setDefaultExposureLimitForMarketGroups', request));
    }
    async setExposureLimitForMarketGroup(request) {
        return new SetExposureLimitForMarketGroupResponse_1.default(await this.performRequest(Api.Betting, 'setExposureLimitForMarketGroup', request));
    }
    async removeDefaultExposureLimitForMarketGroups(request) {
        return new RemoveDefaultExposureLimitForMarketGroupsResponse_1.default(await this.performRequest(Api.Betting, 'removeDefaultExposureLimitForMarketGroups', request));
    }
    async removeExposureLimitForMarketGroup(request) {
        return new RemoveExposureLimitForMarketGroupResponse_1.default(await this.performRequest(Api.Betting, 'removeExposureLimitForMarketGroup', request));
    }
    async listExposureLimitsForMarketGroups(request) {
        return new ListExposureLimitsForMarketGroupsResponse_1.default(await this.performRequest(Api.Betting, 'listExposureLimitsForMarketGroups', request));
    }
    async unblockMarketGroup(request) {
        return new UnblockMarketGroupResponse_1.default(await this.performRequest(Api.Betting, 'unblockMarketGroup', request));
    }
    async getExposureReuseEnabledEvents() {
        return new GetExposureReuseEnabledEventsResponse_1.default(await this.performRequest(Api.Betting, 'getExposureReuseEnabledEvents'));
    }
    async addExposureReuseEnabledEvents(request) {
        return new AddExposureReuseEnabledEventsResponse_1.default(await this.performRequest(Api.Betting, 'addExposureReuseEnabledEvents', request));
    }
    async removeExposureReuseEnabledEvents(request) {
        return new RemoveExposureReuseEnabledEventsResponse_1.default(await this.performRequest(Api.Betting, 'removeExposureReuseEnabledEvents', request));
    }
    async createDeveloperAppKeys(request) {
        return new DeveloperApp_1.default(await this.performRequest(Api.Account, 'createDeveloperAppKeys', request));
    }
    async getDeveloperAppKeys() {
        return new GetDeveloperAppKeysResponse_1.default(await this.performRequest(Api.Account, 'getDeveloperAppKeys'));
    }
    async getAccountFunds(request) {
        return new AccountFundsResponse_1.default(await this.performRequest(Api.Account, 'getAccountFunds', request));
    }
    async transferFunds(request) {
        return new TransferResponse_1.default(await this.performRequest(Api.Account, 'transferFunds', request));
    }
    async getAccountDetails() {
        return new AccountDetailsResponse_1.default(await this.performRequest(Api.Account, 'getAccountDetails'));
    }
    async getVendorClientId() {
        return new GetVendorClientIdResponse_1.default(await this.performRequest(Api.Account, 'getVendorClientId'));
    }
    async getApplicationSubscriptionToken(request) {
        return new GetApplicationSubscriptionTokenResponse_1.default(await this.performRequest(Api.Account, 'getApplicationSubscriptionToken', request));
    }
    async activateApplicationSubscription(request) {
        return new ActivateApplicationSubscriptionResponse_1.default(await this.performRequest(Api.Account, 'activateApplicationSubscription', request));
    }
    async cancelApplicationSubscription(request) {
        return new CancelApplicationSubscriptionResponse_1.default(await this.performRequest(Api.Account, 'cancelApplicationSubscription', request));
    }
    async updateApplicationSubscription(request) {
        return new UpdateApplicationSubscriptionResponse_1.default(await this.performRequest(Api.Account, 'updateApplicationSubscription', request));
    }
    async listApplicationSubscriptionTokens(request) {
        return new ListApplicationSubscriptionTokensResponse_1.default(await this.performRequest(Api.Account, 'listApplicationSubscriptionTokens', request));
    }
    async listAccountSubscriptionTokens() {
        return new ListAccountSubscriptionTokensResponse_1.default(await this.performRequest(Api.Account, 'listAccountSubscriptionTokens'));
    }
    async getApplicationSubscriptionHistory(request) {
        return new GetApplicationSubscriptionHistoryResponse_1.default(await this.performRequest(Api.Account, 'getApplicationSubscriptionHistory', request));
    }
    async getAccountStatement(request) {
        return new AccountStatementReport_1.default(await this.performRequest(Api.Account, 'getAccountStatement', request));
    }
    async listCurrencyRates(request) {
        return new ListCurrencyRatesResponse_1.default(await this.performRequest(Api.Account, 'listCurrencyRates', request));
    }
    async getAuthorisationCode(request) {
        return new AuthorisationResponse_1.default(await this.performRequest(Api.Account, 'getAuthorisationCode', request));
    }
    async token(request) {
        return new VendorAccessTokenInfo_1.default(await this.performRequest(Api.Account, 'token', request));
    }
    async getVendorDetails(request) {
        return new VendorDetails_1.default(await this.performRequest(Api.Account, 'getVendorDetails', request));
    }
    async revokeAccessToWebApp(request) {
        return new RevokeAccessToWebAppResponse_1.default(await this.performRequest(Api.Account, 'revokeAccessToWebApp', request));
    }
    async listAuthorizedWebApps() {
        return new ListAuthorizedWebAppsResponse_1.default(await this.performRequest(Api.Account, 'listAuthorizedWebApps'));
    }
    async isAccountSubscribedToWebApp(request) {
        return new IsAccountSubscribedToWebAppResponse_1.default(await this.performRequest(Api.Account, 'isAccountSubscribedToWebApp', request));
    }
    async getAffiliateRelation(request) {
        return new GetAffiliateRelationResponse_1.default(await this.performRequest(Api.Account, 'getAffiliateRelation', request));
    }
    async heartbeat(request) {
        return new HeartbeatReport_1.default(await this.performRequest(Api.Heartbeat, 'heartbeat', request));
    }
    async performRequest(api, method, request = null) {
        const uri = buildUri(api, method);
        const response = await fetch(uri, {
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
        return await response.json();
    }
}
exports.default = ExchangeApi;
//# sourceMappingURL=ExchangeApi.js.map