import 'isomorphic-fetch';

import JsonRequest from './JsonRequest';

import AccountDetailsResponse from './account/AccountDetailsResponse';
import AccountFundsResponse from './account/AccountFundsResponse';
import AccountStatementReport from './account/AccountStatementReport';
import ActivateApplicationSubscriptionRequest from './account/ActivateApplicationSubscriptionRequest';
import ActivateApplicationSubscriptionResponse from './account/ActivateApplicationSubscriptionResponse';
import AuthorisationResponse from './account/AuthorisationResponse';
import CancelApplicationSubscriptionRequest from './account/CancelApplicationSubscriptionRequest';
import CancelApplicationSubscriptionResponse from './account/CancelApplicationSubscriptionResponse';
import CreateDeveloperAppKeysRequest from './account/CreateDeveloperAppKeysRequest';
import DeveloperApp from './account/DeveloperApp';
import GetAccountFundsRequest from './account/GetAccountFundsRequest';
import GetAccountStatementRequest from './account/GetAccountStatementRequest';
import GetAffiliateRelationRequest from './account/GetAffiliateRelationRequest';
import GetAffiliateRelationResponse from './account/GetAffiliateRelationResponse';
import GetApplicationSubscriptionHistoryRequest from './account/GetApplicationSubscriptionHistoryRequest';
import GetApplicationSubscriptionHistoryResponse from './account/GetApplicationSubscriptionHistoryResponse';
import GetApplicationSubscriptionTokenRequest from './account/GetApplicationSubscriptionTokenRequest';
import GetApplicationSubscriptionTokenResponse from './account/GetApplicationSubscriptionTokenResponse';
import GetAuthorisationCodeRequest from './account/GetAuthorisationCodeRequest';
import GetDeveloperAppKeysResponse from './account/GetDeveloperAppKeysResponse';
import GetVendorClientIdResponse from './account/GetVendorClientIdResponse';
import GetVendorDetailsRequest from './account/GetVendorDetailsRequest';
import IsAccountSubscribedToWebAppRequest from './account/IsAccountSubscribedToWebAppRequest';
import IsAccountSubscribedToWebAppResponse from './account/IsAccountSubscribedToWebAppResponse';
import ListAccountSubscriptionTokensResponse from './account/ListAccountSubscriptionTokensResponse';
import ListApplicationSubscriptionTokensRequest from './account/ListApplicationSubscriptionTokensRequest';
import ListApplicationSubscriptionTokensResponse from './account/ListApplicationSubscriptionTokensResponse';
import ListAuthorizedWebAppsResponse from './account/ListAuthorizedWebAppsResponse';
import ListCurrencyRatesRequest from './account/ListCurrencyRatesRequest';
import ListCurrencyRatesResponse from './account/ListCurrencyRatesResponse';
import RevokeAccessToWebAppRequest from './account/RevokeAccessToWebAppRequest';
import RevokeAccessToWebAppResponse from './account/RevokeAccessToWebAppResponse';
import TokenRequest from './account/TokenRequest';
import TransferFundsRequest from './account/TransferFundsRequest';
import TransferResponse from './account/TransferResponse';
import UpdateApplicationSubscriptionRequest from './account/UpdateApplicationSubscriptionRequest';
import UpdateApplicationSubscriptionResponse from './account/UpdateApplicationSubscriptionResponse';
import VendorAccessTokenInfo from './account/VendorAccessTokenInfo';
import VendorDetails from './account/VendorDetails';
import HeartbeatReport from './heartbeat/HeartbeatReport';
import HeartbeatRequest from './heartbeat/HeartbeatRequest';
import AddExposureReuseEnabledEventsRequest from './sport/AddExposureReuseEnabledEventsRequest';
import AddExposureReuseEnabledEventsResponse from './sport/AddExposureReuseEnabledEventsResponse';
import CancelExecutionReport from './sport/CancelExecutionReport';
import CancelOrdersRequest from './sport/CancelOrdersRequest';
import ClearedOrderSummaryReport from './sport/ClearedOrderSummaryReport';
import CurrentOrderSummaryReport from './sport/CurrentOrderSummaryReport';
import GetExposureReuseEnabledEventsResponse from './sport/GetExposureReuseEnabledEventsResponse';
import ListClearedOrdersRequest from './sport/ListClearedOrdersRequest';
import ListCompetitionsRequest from './sport/ListCompetitionsRequest';
import ListCompetitionsResponse from './sport/ListCompetitionsResponse';
import ListCountriesRequest from './sport/ListCountriesRequest';
import ListCountriesResponse from './sport/ListCountriesResponse';
import ListCurrentOrdersRequest from './sport/ListCurrentOrdersRequest';
import ListEventsRequest from './sport/ListEventsRequest';
import ListEventsResponse from './sport/ListEventsResponse';
import ListEventTypesRequest from './sport/ListEventTypesRequest';
import ListEventTypesResponse from './sport/ListEventTypesResponse';
import ListExposureLimitsForMarketGroupsRequest from './sport/ListExposureLimitsForMarketGroupsRequest';
import ListExposureLimitsForMarketGroupsResponse from './sport/ListExposureLimitsForMarketGroupsResponse';
import ListMarketBookRequest from './sport/ListMarketBookRequest';
import ListMarketBookResponse from './sport/ListMarketBookResponse';
import ListMarketCatalogueRequest from './sport/ListMarketCatalogueRequest';
import ListMarketCatalogueResponse from './sport/ListMarketCatalogueResponse';
import ListMarketProfitAndLossRequest from './sport/ListMarketProfitAndLossRequest';
import ListMarketProfitAndLossResponse from './sport/ListMarketProfitAndLossResponse';
import ListMarketTypesRequest from './sport/ListMarketTypesRequest';
import ListMarketTypesResponse from './sport/ListMarketTypesResponse';
import ListRunnerBookRequest from './sport/ListRunnerBookRequest';
import ListRunnerBookResponse from './sport/ListRunnerBookResponse';
import ListTimeRangesRequest from './sport/ListTimeRangesRequest';
import ListTimeRangesResponse from './sport/ListTimeRangesResponse';
import ListVenuesRequest from './sport/ListVenuesRequest';
import ListVenuesResponse from './sport/ListVenuesResponse';
import PlaceExecutionReport from './sport/PlaceExecutionReport';
import PlaceOrdersRequest from './sport/PlaceOrdersRequest';
import RemoveDefaultExposureLimitForMarketGroupsRequest from './sport/RemoveDefaultExposureLimitForMarketGroupsRequest';
import RemoveDefaultExposureLimitForMarketGroupsResponse from './sport/RemoveDefaultExposureLimitForMarketGroupsResponse';
import RemoveExposureLimitForMarketGroupRequest from './sport/RemoveExposureLimitForMarketGroupRequest';
import RemoveExposureLimitForMarketGroupResponse from './sport/RemoveExposureLimitForMarketGroupResponse';
import RemoveExposureReuseEnabledEventsRequest from './sport/RemoveExposureReuseEnabledEventsRequest';
import RemoveExposureReuseEnabledEventsResponse from './sport/RemoveExposureReuseEnabledEventsResponse';
import ReplaceExecutionReport from './sport/ReplaceExecutionReport';
import ReplaceOrdersRequest from './sport/ReplaceOrdersRequest';
import SetDefaultExposureLimitForMarketGroupsRequest from './sport/SetDefaultExposureLimitForMarketGroupsRequest';
import SetDefaultExposureLimitForMarketGroupsResponse from './sport/SetDefaultExposureLimitForMarketGroupsResponse';
import SetExposureLimitForMarketGroupRequest from './sport/SetExposureLimitForMarketGroupRequest';
import SetExposureLimitForMarketGroupResponse from './sport/SetExposureLimitForMarketGroupResponse';
import UnblockMarketGroupRequest from './sport/UnblockMarketGroupRequest';
import UnblockMarketGroupResponse from './sport/UnblockMarketGroupResponse';
import UpdateExecutionReport from './sport/UpdateExecutionReport';
import UpdateOrdersRequest from './sport/UpdateOrdersRequest';

declare const fetch: any;

const API_HOST = 'https://api.betfair.com';

enum Api {
    Account = 'account',
    Betting = 'betting',
    Heartbeat = 'heartbeat',
}

export enum LoginEndPoint {
    Global = 'https://identitysso.betfair.com/api/login',
    Italy = 'https://identitysso.betfair.it/api/login',
    Spain = 'https://identitysso.betfair.es/api/login',
    Romania = 'https://identitysso.betfair.ro/api/login',
}

const LOGIN_END_POINT_CERT = 'https://identitysso-cert.betfair.com/api/certlogin';

const buildUri = (api: Api, method: string) => {
    return `${API_HOST}/exchange/${api}/rest/v1.0/${method}/`;
};

export default class ExchangeApi {
    private authToken: string = '';
    private loginEndPoint: LoginEndPoint = LoginEndPoint.Global;
    private applicationKey: string;

    constructor(applicationKey: string = '') {
        this.applicationKey = applicationKey;
    }

    public setApplicationKey(applicationKey: string) {
        this.applicationKey = applicationKey;
    }

    public setLoginEndPoint(loginEndPoint: LoginEndPoint): void {
        this.loginEndPoint = loginEndPoint;
    }

    public async login(username: string, password: string): Promise<boolean> {
        this.authToken = '';
        let success = false;

        const resp = await fetch(this.loginEndPoint, {
            body: `username=${username}&password=${password}`,
            headers: {
                'Accept': 'application/json',
                'Accept-Encoding': 'gzip',
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-Application': this.applicationKey,
            },
            method: 'POST',
        });

        const json = await resp.json();
        if (json.status === 'SUCCESS') {
            this.authToken = json.token;
            success = true;
        }
        return success;
    }

    public logout(): void {
        this.authToken = '';
    }

    public async listEventTypes(
        request: ListEventTypesRequest,
    ): Promise<ListEventTypesResponse> {
        return new ListEventTypesResponse(await this.performRequest(Api.Betting, 'listEventTypes', request));
    }

    public async listCompetitions(
        request: ListCompetitionsRequest,
    ): Promise<ListCompetitionsResponse> {
        return new ListCompetitionsResponse(await this.performRequest(Api.Betting, 'listCompetitions', request));
    }

    public async listTimeRanges(
        request: ListTimeRangesRequest,
    ): Promise<ListTimeRangesResponse> {
        return new ListTimeRangesResponse(await this.performRequest(Api.Betting, 'listTimeRanges', request));
    }

    public async listEvents(
        request: ListEventsRequest,
    ): Promise<ListEventsResponse> {
        return new ListEventsResponse(await this.performRequest(Api.Betting, 'listEvents', request));
    }

    public async listMarketTypes(
        request: ListMarketTypesRequest,
    ): Promise<ListMarketTypesResponse> {
        return new ListMarketTypesResponse(await this.performRequest(Api.Betting, 'listMarketTypes', request));
    }

    public async listCountries(
        request: ListCountriesRequest,
    ): Promise<ListCountriesResponse> {
        return new ListCountriesResponse(await this.performRequest(Api.Betting, 'listCountries', request));
    }

    public async listVenues(
        request: ListVenuesRequest,
    ): Promise<ListVenuesResponse> {
        return new ListVenuesResponse(await this.performRequest(Api.Betting, 'listVenues', request));
    }

    public async listMarketCatalogue(
        request: ListMarketCatalogueRequest,
    ): Promise<ListMarketCatalogueResponse> {
        return new ListMarketCatalogueResponse(await this.performRequest(Api.Betting, 'listMarketCatalogue', request));
    }

    public async listMarketBook(
        request: ListMarketBookRequest,
    ): Promise<ListMarketBookResponse> {
        return new ListMarketBookResponse(await this.performRequest(Api.Betting, 'listMarketBook', request));
    }

    public async listRunnerBook(
        request: ListRunnerBookRequest,
    ): Promise<ListRunnerBookResponse> {
        return new ListRunnerBookResponse(await this.performRequest(Api.Betting, 'listRunnerBook', request));
    }

    public async listCurrentOrders(
        request: ListCurrentOrdersRequest,
    ): Promise<CurrentOrderSummaryReport> {
        return new CurrentOrderSummaryReport(await this.performRequest(Api.Betting, 'listCurrentOrders', request));
    }

    public async listClearedOrders(
        request: ListClearedOrdersRequest,
    ): Promise<ClearedOrderSummaryReport> {
        return new ClearedOrderSummaryReport(await this.performRequest(Api.Betting, 'listClearedOrders', request));
    }

    public async placeOrders(
        request: PlaceOrdersRequest,
    ): Promise<PlaceExecutionReport> {
        return new PlaceExecutionReport(await this.performRequest(Api.Betting, 'placeOrders', request));
    }

    public async cancelOrders(
        request: CancelOrdersRequest,
    ): Promise<CancelExecutionReport> {
        return new CancelExecutionReport(await this.performRequest(Api.Betting, 'cancelOrders', request));
    }

    public async replaceOrders(
        request: ReplaceOrdersRequest,
    ): Promise<ReplaceExecutionReport> {
        return new ReplaceExecutionReport(await this.performRequest(Api.Betting, 'replaceOrders', request));
    }

    public async updateOrders(
        request: UpdateOrdersRequest,
    ): Promise<UpdateExecutionReport> {
        return new UpdateExecutionReport(await this.performRequest(Api.Betting, 'updateOrders', request));
    }

    public async listMarketProfitAndLoss(
        request: ListMarketProfitAndLossRequest,
    ): Promise<ListMarketProfitAndLossResponse> {
        return new ListMarketProfitAndLossResponse(await this.performRequest(Api.Betting, 'listMarketProfitAndLoss', request));
    }

    public async setDefaultExposureLimitForMarketGroups(
        request: SetDefaultExposureLimitForMarketGroupsRequest,
    ): Promise<SetDefaultExposureLimitForMarketGroupsResponse> {
        return new SetDefaultExposureLimitForMarketGroupsResponse(await this.performRequest(Api.Betting, 'setDefaultExposureLimitForMarketGroups', request));
    }

    public async setExposureLimitForMarketGroup(
        request: SetExposureLimitForMarketGroupRequest,
    ): Promise<SetExposureLimitForMarketGroupResponse> {
        return new SetExposureLimitForMarketGroupResponse(await this.performRequest(Api.Betting, 'setExposureLimitForMarketGroup', request));
    }

    public async removeDefaultExposureLimitForMarketGroups(
        request: RemoveDefaultExposureLimitForMarketGroupsRequest,
    ): Promise<RemoveDefaultExposureLimitForMarketGroupsResponse> {
        return new RemoveDefaultExposureLimitForMarketGroupsResponse(await this.performRequest(Api.Betting, 'removeDefaultExposureLimitForMarketGroups', request));
    }

    public async removeExposureLimitForMarketGroup(
        request: RemoveExposureLimitForMarketGroupRequest,
    ): Promise<RemoveExposureLimitForMarketGroupResponse> {
        return new RemoveExposureLimitForMarketGroupResponse(await this.performRequest(Api.Betting, 'removeExposureLimitForMarketGroup', request));
    }

    public async listExposureLimitsForMarketGroups(
        request: ListExposureLimitsForMarketGroupsRequest,
    ): Promise<ListExposureLimitsForMarketGroupsResponse> {
        return new ListExposureLimitsForMarketGroupsResponse(await this.performRequest(Api.Betting, 'listExposureLimitsForMarketGroups', request));
    }

    public async unblockMarketGroup(
        request: UnblockMarketGroupRequest,
    ): Promise<UnblockMarketGroupResponse> {
        return new UnblockMarketGroupResponse(await this.performRequest(Api.Betting, 'unblockMarketGroup', request));
    }

    public async getExposureReuseEnabledEvents(): Promise<GetExposureReuseEnabledEventsResponse> {
        return new GetExposureReuseEnabledEventsResponse(await this.performRequest(Api.Betting, 'getExposureReuseEnabledEvents'));
    }
    public async addExposureReuseEnabledEvents(
        request: AddExposureReuseEnabledEventsRequest,
    ): Promise<AddExposureReuseEnabledEventsResponse> {
        return new AddExposureReuseEnabledEventsResponse(await this.performRequest(Api.Betting, 'addExposureReuseEnabledEvents', request));
    }

    public async removeExposureReuseEnabledEvents(
        request: RemoveExposureReuseEnabledEventsRequest,
    ): Promise<RemoveExposureReuseEnabledEventsResponse> {
        return new RemoveExposureReuseEnabledEventsResponse(await this.performRequest(Api.Betting, 'removeExposureReuseEnabledEvents', request));
    }

    public async createDeveloperAppKeys(
        request: CreateDeveloperAppKeysRequest,
    ): Promise<DeveloperApp> {
        return new DeveloperApp(await this.performRequest(Api.Account, 'createDeveloperAppKeys', request));
    }

    public async getDeveloperAppKeys(): Promise<GetDeveloperAppKeysResponse> {
        return new GetDeveloperAppKeysResponse(await this.performRequest(Api.Account, 'getDeveloperAppKeys'));
    }
    public async getAccountFunds(
        request: GetAccountFundsRequest,
    ): Promise<AccountFundsResponse> {
        return new AccountFundsResponse(await this.performRequest(Api.Account, 'getAccountFunds', request));
    }

    public async transferFunds(
        request: TransferFundsRequest,
    ): Promise<TransferResponse> {
        return new TransferResponse(await this.performRequest(Api.Account, 'transferFunds', request));
    }

    public async getAccountDetails(): Promise<AccountDetailsResponse> {
        return new AccountDetailsResponse(await this.performRequest(Api.Account, 'getAccountDetails'));
    }

    public async getVendorClientId(): Promise<GetVendorClientIdResponse> {
        return new GetVendorClientIdResponse(await this.performRequest(Api.Account, 'getVendorClientId'));
    }

    public async getApplicationSubscriptionToken(
        request: GetApplicationSubscriptionTokenRequest,
    ): Promise<GetApplicationSubscriptionTokenResponse> {
        return new GetApplicationSubscriptionTokenResponse(await this.performRequest(Api.Account, 'getApplicationSubscriptionToken', request));
    }

    public async activateApplicationSubscription(
        request: ActivateApplicationSubscriptionRequest,
    ): Promise<ActivateApplicationSubscriptionResponse> {
        return new ActivateApplicationSubscriptionResponse(await this.performRequest(Api.Account, 'activateApplicationSubscription', request));
    }

    public async cancelApplicationSubscription(
        request: CancelApplicationSubscriptionRequest,
    ): Promise<CancelApplicationSubscriptionResponse> {
        return new CancelApplicationSubscriptionResponse(await this.performRequest(Api.Account, 'cancelApplicationSubscription', request));
    }

    public async updateApplicationSubscription(
        request: UpdateApplicationSubscriptionRequest,
    ): Promise<UpdateApplicationSubscriptionResponse> {
        return new UpdateApplicationSubscriptionResponse(await this.performRequest(Api.Account, 'updateApplicationSubscription', request));
    }

    public async listApplicationSubscriptionTokens(
        request: ListApplicationSubscriptionTokensRequest,
    ): Promise<ListApplicationSubscriptionTokensResponse> {
        return new ListApplicationSubscriptionTokensResponse(await this.performRequest(Api.Account, 'listApplicationSubscriptionTokens', request));
    }

    public async listAccountSubscriptionTokens(): Promise<ListAccountSubscriptionTokensResponse> {
        return new ListAccountSubscriptionTokensResponse(await this.performRequest(Api.Account, 'listAccountSubscriptionTokens'));
    }

    public async getApplicationSubscriptionHistory(
        request: GetApplicationSubscriptionHistoryRequest,
    ): Promise<GetApplicationSubscriptionHistoryResponse> {
        return new GetApplicationSubscriptionHistoryResponse(await this.performRequest(Api.Account, 'getApplicationSubscriptionHistory', request));
    }

    public async getAccountStatement(
        request: GetAccountStatementRequest,
    ): Promise<AccountStatementReport> {
        return new AccountStatementReport(await this.performRequest(Api.Account, 'getAccountStatement', request));
    }

    public async listCurrencyRates(
        request: ListCurrencyRatesRequest,
    ): Promise<ListCurrencyRatesResponse> {
        return new ListCurrencyRatesResponse(await this.performRequest(Api.Account, 'listCurrencyRates', request));
    }

    public async getAuthorisationCode(
        request: GetAuthorisationCodeRequest,
    ): Promise<AuthorisationResponse> {
        return new AuthorisationResponse(await this.performRequest(Api.Account, 'getAuthorisationCode', request));
    }

    public async token(
        request: TokenRequest,
    ): Promise<VendorAccessTokenInfo> {
        return new VendorAccessTokenInfo(await this.performRequest(Api.Account, 'token', request));
    }

    public async getVendorDetails(
        request: GetVendorDetailsRequest,
    ): Promise<VendorDetails> {
        return new VendorDetails(await this.performRequest(Api.Account, 'getVendorDetails', request));
    }

    public async revokeAccessToWebApp(
        request: RevokeAccessToWebAppRequest,
    ): Promise<RevokeAccessToWebAppResponse> {
        return new RevokeAccessToWebAppResponse(await this.performRequest(Api.Account, 'revokeAccessToWebApp', request));
    }

    public async listAuthorizedWebApps(): Promise<ListAuthorizedWebAppsResponse> {
        return new ListAuthorizedWebAppsResponse(await this.performRequest(Api.Account, 'listAuthorizedWebApps'));
    }

    public async isAccountSubscribedToWebApp(
        request: IsAccountSubscribedToWebAppRequest,
    ): Promise<IsAccountSubscribedToWebAppResponse> {
        return new IsAccountSubscribedToWebAppResponse(await this.performRequest(Api.Account, 'isAccountSubscribedToWebApp', request));
    }

    public async getAffiliateRelation(
        request: GetAffiliateRelationRequest,
    ): Promise<GetAffiliateRelationResponse> {
        return new GetAffiliateRelationResponse(await this.performRequest(Api.Account, 'getAffiliateRelation', request));
    }

    public async heartbeat(
        request: HeartbeatRequest,
    ): Promise<HeartbeatReport> {
        return new HeartbeatReport(await this.performRequest(Api.Heartbeat, 'heartbeat', request));
    }

    private async performRequest(api: Api, method: string, request: JsonRequest | null = null): Promise<any> {
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
