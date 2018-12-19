/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import Competition from '../sport/Competition';
import Event from '../sport/Event';
import EventType from '../sport/EventType';
import MarketDescription from '../sport/MarketDescription';
import RunnerCatalog from '../sport/RunnerCatalog';
export default class MarketCatalogue extends JsonMember {
    private marketId;
    private marketName;
    private marketStartTime;
    private description;
    private totalMatched;
    private runners;
    private eventType;
    private competition;
    private event;
    constructor(marketId?: string, marketName?: string, marketStartTime?: Date | null, description?: MarketDescription, totalMatched?: number | null, runners?: RunnerCatalog[], eventType?: EventType, competition?: Competition, event?: Event);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getMarketId(): string;
    setMarketId(marketId: string): void;
    getMarketName(): string;
    setMarketName(marketName: string): void;
    getMarketStartTime(): Date | null;
    setMarketStartTime(marketStartTime: Date | null): void;
    getDescription(): MarketDescription;
    setDescription(description: MarketDescription): void;
    getTotalMatched(): number | null;
    setTotalMatched(totalMatched: number | null): void;
    getRunners(): RunnerCatalog[];
    setRunners(runners: RunnerCatalog[]): void;
    getEventType(): EventType;
    setEventType(eventType: EventType): void;
    getCompetition(): Competition;
    setCompetition(competition: Competition): void;
    getEvent(): Event;
    setEvent(event: Event): void;
}
