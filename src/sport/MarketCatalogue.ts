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
    private marketId: string;
    private marketName: string;
    private marketStartTime: Date | null;
    private description: MarketDescription;
    private totalMatched: number | null;
    private runners: RunnerCatalog[];
    private eventType: EventType;
    private competition: Competition;
    private event: Event;

    constructor(
        marketId: string = '',
        marketName: string = '',
        marketStartTime: Date | null = null,
        description: MarketDescription = new MarketDescription(),
        totalMatched: number | null = null,
        runners: RunnerCatalog[] = [],
        eventType: EventType = new EventType(),
        competition: Competition = new Competition(),
        event: Event = new Event(),
    ) {
        super();
        this.marketId = marketId;
        this.marketName = marketName;
        this.marketStartTime = marketStartTime;
        this.description = description;
        this.totalMatched = totalMatched;
        this.runners = runners;
        this.eventType = eventType;
        this.competition = competition;
        this.event = event;
    }

    public fromJson(json: any): void {
        if ('marketId' in json) {
            this.marketId = json.marketId;
        }
        if ('marketName' in json) {
            this.marketName = json.marketName;
        }
        if ('marketStartTime' in json) {
            this.marketStartTime = new Date(json.marketStartTime);
        }
        if ('description' in json) {
            this.description.fromJson(json.description);
        }
        if ('totalMatched' in json) {
            this.totalMatched = json.totalMatched;
        }
        if ('runners' in json) {
            this.runners = json.runners.map((runnersJson: any) => {
                const element = new RunnerCatalog();
                element.fromJson(runnersJson);
                return element;
            });
        }
        if ('eventType' in json) {
            this.eventType.fromJson(json.eventType);
        }
        if ('competition' in json) {
            this.competition.fromJson(json.competition);
        }
        if ('event' in json) {
            this.event.fromJson(json.event);
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.marketId !== '') {
            json.marketId = this.marketId;
        }
        if (this.marketName !== '') {
            json.marketName = this.marketName;
        }
        if (this.marketStartTime !== null) {
            json.marketStartTime = this.marketStartTime.toISOString();
        }
        if (this.description.isValid()) {
            json.description = this.description.toJson();
        }
        if (this.totalMatched !== null) {
            json.totalMatched = this.totalMatched;
        }
        if (this.runners.length > 0) {
            json.runners = this.runners.map((value) => value.toJson());
        }
        if (this.eventType.isValid()) {
            json.eventType = this.eventType.toJson();
        }
        if (this.competition.isValid()) {
            json.competition = this.competition.toJson();
        }
        if (this.event.isValid()) {
            json.event = this.event.toJson();
        }
        return json;
    }

    public isValid(): boolean {
        return this.marketId !== '' &&
            this.marketName !== '';
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
    public getMarketStartTime(): Date | null {
        return this.marketStartTime;
    }
    public setMarketStartTime(marketStartTime: Date | null): void {
        this.marketStartTime = marketStartTime;
    }
    public getDescription(): MarketDescription {
        return this.description;
    }
    public setDescription(description: MarketDescription): void {
        this.description = description;
    }
    public getTotalMatched(): number | null {
        return this.totalMatched;
    }
    public setTotalMatched(totalMatched: number | null): void {
        this.totalMatched = totalMatched;
    }
    public getRunners(): RunnerCatalog[] {
        return this.runners;
    }
    public setRunners(runners: RunnerCatalog[]): void {
        this.runners = runners;
    }
    public getEventType(): EventType {
        return this.eventType;
    }
    public setEventType(eventType: EventType): void {
        this.eventType = eventType;
    }
    public getCompetition(): Competition {
        return this.competition;
    }
    public setCompetition(competition: Competition): void {
        this.competition = competition;
    }
    public getEvent(): Event {
        return this.event;
    }
    public setEvent(event: Event): void {
        this.event = event;
    }

}
