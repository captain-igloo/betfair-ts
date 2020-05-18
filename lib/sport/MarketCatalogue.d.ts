/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import Competition, { ICompetitionOptions } from '../sport/Competition';
import Event, { IEventOptions } from '../sport/Event';
import EventType, { IEventTypeOptions } from '../sport/EventType';
import MarketDescription, { IMarketDescriptionOptions } from '../sport/MarketDescription';
import RunnerCatalog, { IRunnerCatalogOptions } from '../sport/RunnerCatalog';
export interface IMarketCatalogueOptions {
    marketId: string;
    marketName: string;
    marketStartTime?: Date | string;
    description?: MarketDescription | IMarketDescriptionOptions;
    totalMatched?: number;
    runners?: (RunnerCatalog | IRunnerCatalogOptions)[];
    eventType?: EventType | IEventTypeOptions;
    competition?: Competition | ICompetitionOptions;
    event?: Event | IEventOptions;
}
export default class MarketCatalogue extends JsonMember {
    private marketId;
    private marketName;
    private marketStartTime?;
    private description?;
    private totalMatched?;
    private runners?;
    private eventType?;
    private competition?;
    private event?;
    constructor(options: IMarketCatalogueOptions);
    toJson(): IMarketCatalogueOptions;
    getMarketId(): string;
    setMarketId(marketId: string): void;
    getMarketName(): string;
    setMarketName(marketName: string): void;
    getMarketStartTime(): Date | undefined;
    setMarketStartTime(marketStartTime: Date): void;
    getDescription(): MarketDescription | undefined;
    setDescription(description: MarketDescription): void;
    getTotalMatched(): number | undefined;
    setTotalMatched(totalMatched: number): void;
    getRunners(): RunnerCatalog[] | undefined;
    setRunners(runners: RunnerCatalog[]): void;
    getEventType(): EventType | undefined;
    setEventType(eventType: EventType): void;
    getCompetition(): Competition | undefined;
    setCompetition(competition: Competition): void;
    getEvent(): Event | undefined;
    setEvent(event: Event): void;
}
