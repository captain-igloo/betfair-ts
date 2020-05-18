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
    private marketId: string;
    private marketName: string;
    private marketStartTime?: Date;
    private description?: MarketDescription;
    private totalMatched?: number;
    private runners?: RunnerCatalog[];
    private eventType?: EventType;
    private competition?: Competition;
    private event?: Event;

    constructor(options: IMarketCatalogueOptions) {
        super();
        this.marketId = options.marketId;
        this.marketName = options.marketName;
        if (options.marketStartTime) {
            this.marketStartTime = this.fromJson(options.marketStartTime, Date);
        }
        this.description = options.description && this.fromJson(options.description, MarketDescription);
        this.totalMatched = options.totalMatched;
        if (options.runners) {
            this.runners = this.arrayFromJson(options.runners, RunnerCatalog);
        }
        this.eventType = options.eventType && this.fromJson(options.eventType, EventType);
        this.competition = options.competition && this.fromJson(options.competition, Competition);
        this.event = options.event && this.fromJson(options.event, Event);
    }

    public toJson(): IMarketCatalogueOptions {
        const json: IMarketCatalogueOptions = {
            marketId: this.marketId,
            marketName: this.marketName,
        };
        if (typeof this.marketStartTime !== 'undefined') {
            json.marketStartTime = this.marketStartTime.toISOString();
        }
        if (this.description) {
            json.description = this.description.toJson();
        }
        if (typeof this.totalMatched !== 'undefined') {
            json.totalMatched = this.totalMatched;
        }
        if (this.runners && this.runners.length > 0) {
            json.runners = this.runners.map((value) => value.toJson());
        }
        if (this.eventType) {
            json.eventType = this.eventType.toJson();
        }
        if (this.competition) {
            json.competition = this.competition.toJson();
        }
        if (this.event) {
            json.event = this.event.toJson();
        }
        return json;
    }

    public getMarketId(): string {
        return this.marketId;
    }
    public setMarketId(marketId: string): void {
        this.marketId = marketId;
    }
    public getMarketName(): string {
        return this.marketName;
    }
    public setMarketName(marketName: string): void {
        this.marketName = marketName;
    }
    public getMarketStartTime(): Date | undefined {
        return this.marketStartTime;
    }
    public setMarketStartTime(marketStartTime: Date): void {
        this.marketStartTime = marketStartTime;
    }
    public getDescription(): MarketDescription | undefined {
        return this.description;
    }
    public setDescription(description: MarketDescription): void {
        this.description = description;
    }
    public getTotalMatched(): number | undefined {
        return this.totalMatched;
    }
    public setTotalMatched(totalMatched: number): void {
        this.totalMatched = totalMatched;
    }
    public getRunners(): RunnerCatalog[] | undefined {
        return this.runners;
    }
    public setRunners(runners: RunnerCatalog[]): void {
        this.runners = runners;
    }
    public getEventType(): EventType | undefined {
        return this.eventType;
    }
    public setEventType(eventType: EventType): void {
        this.eventType = eventType;
    }
    public getCompetition(): Competition | undefined {
        return this.competition;
    }
    public setCompetition(competition: Competition): void {
        this.competition = competition;
    }
    public getEvent(): Event | undefined {
        return this.event;
    }
    public setEvent(event: Event): void {
        this.event = event;
    }

}
