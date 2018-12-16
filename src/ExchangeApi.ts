import fetch from 'node-fetch';

import JsonRequest from './JsonRequest';

import CreateDeveloperAppKeysRequest from './account/CreateDeveloperAppKeysRequest';
import DeveloperApp from './account/DeveloperApp';
import GetDeveloperAppKeysResponse from './account/GetDeveloperAppKeysResponse';
import GetAccountFundsRequest from './account/GetAccountFundsRequest';
import AccountFundsResponse from './account/AccountFundsResponse';
import TransferFundsRequest from './account/TransferFundsRequest';
import TransferResponse from './account/TransferResponse';
import AccountDetailsResponse from './account/AccountDetailsResponse';
import GetVendorClientIdResponse from './account/GetVendorClientIdResponse';
import GetApplicationSubscriptionTokenRequest from './account/GetApplicationSubscriptionTokenRequest';
import GetApplicationSubscriptionTokenResponse from './account/GetApplicationSubscriptionTokenResponse';
import ActivateApplicationSubscriptionRequest from './account/ActivateApplicationSubscriptionRequest';
import ActivateApplicationSubscriptionResponse from './account/ActivateApplicationSubscriptionResponse';
import CancelApplicationSubscriptionRequest from './account/CancelApplicationSubscriptionRequest';
import CancelApplicationSubscriptionResponse from './account/CancelApplicationSubscriptionResponse';
import UpdateApplicationSubscriptionRequest from './account/UpdateApplicationSubscriptionRequest';
import UpdateApplicationSubscriptionResponse from './account/UpdateApplicationSubscriptionResponse';
import ListApplicationSubscriptionTokensRequest from './account/ListApplicationSubscriptionTokensRequest';
import ListApplicationSubscriptionTokensResponse from './account/ListApplicationSubscriptionTokensResponse';
import ListAccountSubscriptionTokensResponse from './account/ListAccountSubscriptionTokensResponse';
import GetApplicationSubscriptionHistoryRequest from './account/GetApplicationSubscriptionHistoryRequest';
import GetApplicationSubscriptionHistoryResponse from './account/GetApplicationSubscriptionHistoryResponse';
import GetAccountStatementRequest from './account/GetAccountStatementRequest';
import AccountStatementReport from './account/AccountStatementReport';
import ListCurrencyRatesRequest from './account/ListCurrencyRatesRequest';
import ListCurrencyRatesResponse from './account/ListCurrencyRatesResponse';
import GetAuthorisationCodeRequest from './account/GetAuthorisationCodeRequest';
import AuthorisationResponse from './account/AuthorisationResponse';
import TokenRequest from './account/TokenRequest';
import VendorAccessTokenInfo from './account/VendorAccessTokenInfo';
import GetVendorDetailsRequest from './account/GetVendorDetailsRequest';
import VendorDetails from './account/VendorDetails';
import RevokeAccessToWebAppRequest from './account/RevokeAccessToWebAppRequest';
import RevokeAccessToWebAppResponse from './account/RevokeAccessToWebAppResponse';
import ListAuthorizedWebAppsResponse from './account/ListAuthorizedWebAppsResponse';
import IsAccountSubscribedToWebAppRequest from './account/IsAccountSubscribedToWebAppRequest';
import IsAccountSubscribedToWebAppResponse from './account/IsAccountSubscribedToWebAppResponse';
import GetAffiliateRelationRequest from './account/GetAffiliateRelationRequest';
import GetAffiliateRelationResponse from './account/GetAffiliateRelationResponse';
import HeartbeatRequest from './heartbeat/HeartbeatRequest';
import HeartbeatReport from './heartbeat/HeartbeatReport';
import ListEventTypesRequest from './sport/ListEventTypesRequest';
import ListEventTypesResponse from './sport/ListEventTypesResponse';
import ListCompetitionsRequest from './sport/ListCompetitionsRequest';
import ListCompetitionsResponse from './sport/ListCompetitionsResponse';
import ListTimeRangesRequest from './sport/ListTimeRangesRequest';
import ListTimeRangesResponse from './sport/ListTimeRangesResponse';
import ListEventsRequest from './sport/ListEventsRequest';
import ListEventsResponse from './sport/ListEventsResponse';
import ListMarketTypesRequest from './sport/ListMarketTypesRequest';
import ListMarketTypesResponse from './sport/ListMarketTypesResponse';
import ListCountriesRequest from './sport/ListCountriesRequest';
import ListCountriesResponse from './sport/ListCountriesResponse';
import ListVenuesRequest from './sport/ListVenuesRequest';
import ListVenuesResponse from './sport/ListVenuesResponse';
import ListMarketCatalogueRequest from './sport/ListMarketCatalogueRequest';
import ListMarketCatalogueResponse from './sport/ListMarketCatalogueResponse';
import ListMarketBookRequest from './sport/ListMarketBookRequest';
import ListMarketBookResponse from './sport/ListMarketBookResponse';
import ListRunnerBookRequest from './sport/ListRunnerBookRequest';
import ListRunnerBookResponse from './sport/ListRunnerBookResponse';
import ListCurrentOrdersRequest from './sport/ListCurrentOrdersRequest';
import CurrentOrderSummaryReport from './sport/CurrentOrderSummaryReport';
import ListClearedOrdersRequest from './sport/ListClearedOrdersRequest';
import ClearedOrderSummaryReport from './sport/ClearedOrderSummaryReport';
import PlaceOrdersRequest from './sport/PlaceOrdersRequest';
import PlaceExecutionReport from './sport/PlaceExecutionReport';
import CancelOrdersRequest from './sport/CancelOrdersRequest';
import CancelExecutionReport from './sport/CancelExecutionReport';
import ReplaceOrdersRequest from './sport/ReplaceOrdersRequest';
import ReplaceExecutionReport from './sport/ReplaceExecutionReport';
import UpdateOrdersRequest from './sport/UpdateOrdersRequest';
import UpdateExecutionReport from './sport/UpdateExecutionReport';
import ListMarketProfitAndLossRequest from './sport/ListMarketProfitAndLossRequest';
import ListMarketProfitAndLossResponse from './sport/ListMarketProfitAndLossResponse';
import SetDefaultExposureLimitForMarketGroupsRequest from './sport/SetDefaultExposureLimitForMarketGroupsRequest';
import SetDefaultExposureLimitForMarketGroupsResponse from './sport/SetDefaultExposureLimitForMarketGroupsResponse';
import SetExposureLimitForMarketGroupRequest from './sport/SetExposureLimitForMarketGroupRequest';
import SetExposureLimitForMarketGroupResponse from './sport/SetExposureLimitForMarketGroupResponse';
import RemoveDefaultExposureLimitForMarketGroupsRequest from './sport/RemoveDefaultExposureLimitForMarketGroupsRequest';
import RemoveDefaultExposureLimitForMarketGroupsResponse from './sport/RemoveDefaultExposureLimitForMarketGroupsResponse';
import RemoveExposureLimitForMarketGroupRequest from './sport/RemoveExposureLimitForMarketGroupRequest';
import RemoveExposureLimitForMarketGroupResponse from './sport/RemoveExposureLimitForMarketGroupResponse';
import ListExposureLimitsForMarketGroupsRequest from './sport/ListExposureLimitsForMarketGroupsRequest';
import ListExposureLimitsForMarketGroupsResponse from './sport/ListExposureLimitsForMarketGroupsResponse';
import UnblockMarketGroupRequest from './sport/UnblockMarketGroupRequest';
import UnblockMarketGroupResponse from './sport/UnblockMarketGroupResponse';
import GetExposureReuseEnabledEventsResponse from './sport/GetExposureReuseEnabledEventsResponse';
import AddExposureReuseEnabledEventsRequest from './sport/AddExposureReuseEnabledEventsRequest';
import AddExposureReuseEnabledEventsResponse from './sport/AddExposureReuseEnabledEventsResponse';
import RemoveExposureReuseEnabledEventsRequest from './sport/RemoveExposureReuseEnabledEventsRequest';
import RemoveExposureReuseEnabledEventsResponse from './sport/RemoveExposureReuseEnabledEventsResponse';

const API_HOST = 'https://api.betfair.com';

enum Api {
    Account = 'account',
    Betting = 'betting',
    Heartbeat = 'heartbeat',
};

enum LoginEndPoint {
    Global = 'https://identitysso.betfair.com/api/login',
    Italy = 'https://identitysso.betfair.it/api/login',
    Spain = 'https://identitysso.betfair.es/api/login',
    Romania = 'https://identitysso.betfair.ro/api/login',
};

const buildUri = (api: Api, method: string) => {
    return `${API_HOST}/exchange/${api}/rest/v1.0/${method}/`;
};

export default class ExchangeApi {
    private authToken: string = '';
    private loginEndPoint: LoginEndPoint = LoginEndPoint.Global;
    private applicationKey: string;

    constructor(applicationKey: string) {
        this.applicationKey = applicationKey;
    }

    public async login(username: string, password: string): Promise<boolean> {
        this.authToken = '';
        let success = false;

        const resp = await fetch(this.loginEndPoint, {
            body: `username=${username}&password=${password}`,
            headers: {
                Accept: 'application/json',
                'Accept-Encoding': 'gzip',
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-Application': this.applicationKey,
            },
            method: 'POST',
        });

        const json = await resp.json();
        if (json.status == 'SUCCESS') {
            this.authToken = json.token;
            success = true;
        }
        return success;
    }

    public logout(): void {
        this.authToken = '';
    }

    public async listEventTypes(request: ListEventTypesRequest): Promise<ListEventTypesResponse> {
        const response = new ListEventTypesResponse();
        response.fromJson(await this.performRequest(Api.Betting, 'listEventTypes', request));
        return response;
    }
    public async listCompetitions(request: ListCompetitionsRequest): Promise<ListCompetitionsResponse> {
        const response = new ListCompetitionsResponse();
        response.fromJson(await this.performRequest(Api.Betting, 'listCompetitions', request));
        return response;
    }
    public async listTimeRanges(request: ListTimeRangesRequest): Promise<ListTimeRangesResponse> {
        const response = new ListTimeRangesResponse();
        response.fromJson(await this.performRequest(Api.Betting, 'listTimeRanges', request));
        return response;
    }
    public async listEvents(request: ListEventsRequest): Promise<ListEventsResponse> {
        const response = new ListEventsResponse();
        response.fromJson(await this.performRequest(Api.Betting, 'listEvents', request));
        return response;
    }
    public async listMarketTypes(request: ListMarketTypesRequest): Promise<ListMarketTypesResponse> {
        const response = new ListMarketTypesResponse();
        response.fromJson(await this.performRequest(Api.Betting, 'listMarketTypes', request));
        return response;
    }
    public async listCountries(request: ListCountriesRequest): Promise<ListCountriesResponse> {
        const response = new ListCountriesResponse();
        response.fromJson(await this.performRequest(Api.Betting, 'listCountries', request));
        return response;
    }
    public async listVenues(request: ListVenuesRequest): Promise<ListVenuesResponse> {
        const response = new ListVenuesResponse();
        response.fromJson(await this.performRequest(Api.Betting, 'listVenues', request));
        return response;
    }
    public async listMarketCatalogue(request: ListMarketCatalogueRequest): Promise<ListMarketCatalogueResponse> {
        const response = new ListMarketCatalogueResponse();
        response.fromJson(await this.performRequest(Api.Betting, 'listMarketCatalogue', request));
        return response;
    }
    public async listMarketBook(request: ListMarketBookRequest): Promise<ListMarketBookResponse> {
        const response = new ListMarketBookResponse();
        response.fromJson(await this.performRequest(Api.Betting, 'listMarketBook', request));
        return response;
    }
    public async listRunnerBook(request: ListRunnerBookRequest): Promise<ListRunnerBookResponse> {
        const response = new ListRunnerBookResponse();
        response.fromJson(await this.performRequest(Api.Betting, 'listRunnerBook', request));
        return response;
    }
    public async listCurrentOrders(request: ListCurrentOrdersRequest): Promise<CurrentOrderSummaryReport> {
        const response = new CurrentOrderSummaryReport();
        response.fromJson(await this.performRequest(Api.Betting, 'listCurrentOrders', request));
        return response;
    }
    public async listClearedOrders(request: ListClearedOrdersRequest): Promise<ClearedOrderSummaryReport> {
        const response = new ClearedOrderSummaryReport();
        response.fromJson(await this.performRequest(Api.Betting, 'listClearedOrders', request));
        return response;
    }
    public async placeOrders(request: PlaceOrdersRequest): Promise<PlaceExecutionReport> {
        const response = new PlaceExecutionReport();
        response.fromJson(await this.performRequest(Api.Betting, 'placeOrders', request));
        return response;
    }
    public async cancelOrders(request: CancelOrdersRequest): Promise<CancelExecutionReport> {
        const response = new CancelExecutionReport();
        response.fromJson(await this.performRequest(Api.Betting, 'cancelOrders', request));
        return response;
    }
    public async replaceOrders(request: ReplaceOrdersRequest): Promise<ReplaceExecutionReport> {
        const response = new ReplaceExecutionReport();
        response.fromJson(await this.performRequest(Api.Betting, 'replaceOrders', request));
        return response;
    }
    public async updateOrders(request: UpdateOrdersRequest): Promise<UpdateExecutionReport> {
        const response = new UpdateExecutionReport();
        response.fromJson(await this.performRequest(Api.Betting, 'updateOrders', request));
        return response;
    }
    public async listMarketProfitAndLoss(request: ListMarketProfitAndLossRequest): Promise<ListMarketProfitAndLossResponse> {
        const response = new ListMarketProfitAndLossResponse();
        response.fromJson(await this.performRequest(Api.Betting, 'listMarketProfitAndLoss', request));
        return response;
    }
    public async setDefaultExposureLimitForMarketGroups(request: SetDefaultExposureLimitForMarketGroupsRequest): Promise<SetDefaultExposureLimitForMarketGroupsResponse> {
        const response = new SetDefaultExposureLimitForMarketGroupsResponse();
        response.fromJson(await this.performRequest(Api.Betting, 'setDefaultExposureLimitForMarketGroups', request));
        return response;
    }
    public async setExposureLimitForMarketGroup(request: SetExposureLimitForMarketGroupRequest): Promise<SetExposureLimitForMarketGroupResponse> {
        const response = new SetExposureLimitForMarketGroupResponse();
        response.fromJson(await this.performRequest(Api.Betting, 'setExposureLimitForMarketGroup', request));
        return response;
    }
    public async removeDefaultExposureLimitForMarketGroups(request: RemoveDefaultExposureLimitForMarketGroupsRequest): Promise<RemoveDefaultExposureLimitForMarketGroupsResponse> {
        const response = new RemoveDefaultExposureLimitForMarketGroupsResponse();
        response.fromJson(await this.performRequest(Api.Betting, 'removeDefaultExposureLimitForMarketGroups', request));
        return response;
    }
    public async removeExposureLimitForMarketGroup(request: RemoveExposureLimitForMarketGroupRequest): Promise<RemoveExposureLimitForMarketGroupResponse> {
        const response = new RemoveExposureLimitForMarketGroupResponse();
        response.fromJson(await this.performRequest(Api.Betting, 'removeExposureLimitForMarketGroup', request));
        return response;
    }
    public async listExposureLimitsForMarketGroups(request: ListExposureLimitsForMarketGroupsRequest): Promise<ListExposureLimitsForMarketGroupsResponse> {
        const response = new ListExposureLimitsForMarketGroupsResponse();
        response.fromJson(await this.performRequest(Api.Betting, 'listExposureLimitsForMarketGroups', request));
        return response;
    }
    public async unblockMarketGroup(request: UnblockMarketGroupRequest): Promise<UnblockMarketGroupResponse> {
        const response = new UnblockMarketGroupResponse();
        response.fromJson(await this.performRequest(Api.Betting, 'unblockMarketGroup', request));
        return response;
    }
    public async getExposureReuseEnabledEvents(): Promise<GetExposureReuseEnabledEventsResponse> {
        const response = new GetExposureReuseEnabledEventsResponse();
        response.fromJson(await this.performRequest(Api.Betting, 'getExposureReuseEnabledEvents'));
        return response;
    }
    public async addExposureReuseEnabledEvents(request: AddExposureReuseEnabledEventsRequest): Promise<AddExposureReuseEnabledEventsResponse> {
        const response = new AddExposureReuseEnabledEventsResponse();
        response.fromJson(await this.performRequest(Api.Betting, 'addExposureReuseEnabledEvents', request));
        return response;
    }
    public async removeExposureReuseEnabledEvents(request: RemoveExposureReuseEnabledEventsRequest): Promise<RemoveExposureReuseEnabledEventsResponse> {
        const response = new RemoveExposureReuseEnabledEventsResponse();
        response.fromJson(await this.performRequest(Api.Betting, 'removeExposureReuseEnabledEvents', request));
        return response;
    }
public async createDeveloperAppKeys(request: CreateDeveloperAppKeysRequest): Promise<DeveloperApp> {
        const response = new DeveloperApp();
        response.fromJson(await this.performRequest(Api.Account, 'createDeveloperAppKeys', request));
        return response;
    }
    public async getDeveloperAppKeys(): Promise<GetDeveloperAppKeysResponse> {
        const response = new GetDeveloperAppKeysResponse();
        response.fromJson(await this.performRequest(Api.Account, 'getDeveloperAppKeys'));
        return response;
    }
    public async getAccountFunds(request: GetAccountFundsRequest): Promise<AccountFundsResponse> {
        const response = new AccountFundsResponse();
        response.fromJson(await this.performRequest(Api.Account, 'getAccountFunds', request));
        return response;
    }
    public async transferFunds(request: TransferFundsRequest): Promise<TransferResponse> {
        const response = new TransferResponse();
        response.fromJson(await this.performRequest(Api.Account, 'transferFunds', request));
        return response;
    }
    public async getAccountDetails(): Promise<AccountDetailsResponse> {
        const response = new AccountDetailsResponse();
        response.fromJson(await this.performRequest(Api.Account, 'getAccountDetails'));
        return response;
    }
    public async getVendorClientId(): Promise<GetVendorClientIdResponse> {
        const response = new GetVendorClientIdResponse();
        response.fromJson(await this.performRequest(Api.Account, 'getVendorClientId'));
        return response;
    }
    public async getApplicationSubscriptionToken(request: GetApplicationSubscriptionTokenRequest): Promise<GetApplicationSubscriptionTokenResponse> {
        const response = new GetApplicationSubscriptionTokenResponse();
        response.fromJson(await this.performRequest(Api.Account, 'getApplicationSubscriptionToken', request));
        return response;
    }
    public async activateApplicationSubscription(request: ActivateApplicationSubscriptionRequest): Promise<ActivateApplicationSubscriptionResponse> {
        const response = new ActivateApplicationSubscriptionResponse();
        response.fromJson(await this.performRequest(Api.Account, 'activateApplicationSubscription', request));
        return response;
    }
    public async cancelApplicationSubscription(request: CancelApplicationSubscriptionRequest): Promise<CancelApplicationSubscriptionResponse> {
        const response = new CancelApplicationSubscriptionResponse();
        response.fromJson(await this.performRequest(Api.Account, 'cancelApplicationSubscription', request));
        return response;
    }
    public async updateApplicationSubscription(request: UpdateApplicationSubscriptionRequest): Promise<UpdateApplicationSubscriptionResponse> {
        const response = new UpdateApplicationSubscriptionResponse();
        response.fromJson(await this.performRequest(Api.Account, 'updateApplicationSubscription', request));
        return response;
    }
    public async listApplicationSubscriptionTokens(request: ListApplicationSubscriptionTokensRequest): Promise<ListApplicationSubscriptionTokensResponse> {
        const response = new ListApplicationSubscriptionTokensResponse();
        response.fromJson(await this.performRequest(Api.Account, 'listApplicationSubscriptionTokens', request));
        return response;
    }
    public async listAccountSubscriptionTokens(): Promise<ListAccountSubscriptionTokensResponse> {
        const response = new ListAccountSubscriptionTokensResponse();
        response.fromJson(await this.performRequest(Api.Account, 'listAccountSubscriptionTokens'));
        return response;
    }
    public async getApplicationSubscriptionHistory(request: GetApplicationSubscriptionHistoryRequest): Promise<GetApplicationSubscriptionHistoryResponse> {
        const response = new GetApplicationSubscriptionHistoryResponse();
        response.fromJson(await this.performRequest(Api.Account, 'getApplicationSubscriptionHistory', request));
        return response;
    }
    public async getAccountStatement(request: GetAccountStatementRequest): Promise<AccountStatementReport> {
        const response = new AccountStatementReport();
        response.fromJson(await this.performRequest(Api.Account, 'getAccountStatement', request));
        return response;
    }
    public async listCurrencyRates(request: ListCurrencyRatesRequest): Promise<ListCurrencyRatesResponse> {
        const response = new ListCurrencyRatesResponse();
        response.fromJson(await this.performRequest(Api.Account, 'listCurrencyRates', request));
        return response;
    }
    public async getAuthorisationCode(request: GetAuthorisationCodeRequest): Promise<AuthorisationResponse> {
        const response = new AuthorisationResponse();
        response.fromJson(await this.performRequest(Api.Account, 'getAuthorisationCode', request));
        return response;
    }
    public async token(request: TokenRequest): Promise<VendorAccessTokenInfo> {
        const response = new VendorAccessTokenInfo();
        response.fromJson(await this.performRequest(Api.Account, 'token', request));
        return response;
    }
    public async getVendorDetails(request: GetVendorDetailsRequest): Promise<VendorDetails> {
        const response = new VendorDetails();
        response.fromJson(await this.performRequest(Api.Account, 'getVendorDetails', request));
        return response;
    }
    public async revokeAccessToWebApp(request: RevokeAccessToWebAppRequest): Promise<RevokeAccessToWebAppResponse> {
        const response = new RevokeAccessToWebAppResponse();
        response.fromJson(await this.performRequest(Api.Account, 'revokeAccessToWebApp', request));
        return response;
    }
    public async listAuthorizedWebApps(): Promise<ListAuthorizedWebAppsResponse> {
        const response = new ListAuthorizedWebAppsResponse();
        response.fromJson(await this.performRequest(Api.Account, 'listAuthorizedWebApps'));
        return response;
    }
    public async isAccountSubscribedToWebApp(request: IsAccountSubscribedToWebAppRequest): Promise<IsAccountSubscribedToWebAppResponse> {
        const response = new IsAccountSubscribedToWebAppResponse();
        response.fromJson(await this.performRequest(Api.Account, 'isAccountSubscribedToWebApp', request));
        return response;
    }
    public async getAffiliateRelation(request: GetAffiliateRelationRequest): Promise<GetAffiliateRelationResponse> {
        const response = new GetAffiliateRelationResponse();
        response.fromJson(await this.performRequest(Api.Account, 'getAffiliateRelation', request));
        return response;
    }
    public async heartbeat(request: HeartbeatRequest): Promise<HeartbeatReport> {
        const response = new HeartbeatReport();
        response.fromJson(await this.performRequest(Api.Heartbeat, 'heartbeat', request));
        return response;
    }
    
    private async performRequest(api: Api, method: string, request: JsonRequest | null = null): Promise<string> {
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
