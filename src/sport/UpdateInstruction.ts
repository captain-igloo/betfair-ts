/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';

import PersistenceType from '../sport/enum/PersistenceType';

export default class UpdateInstruction extends JsonMember {
    private betId: string;
    private newPersistenceType: PersistenceType;

    constructor(
        betId: string = '',
        newPersistenceType: PersistenceType = new PersistenceType(),
    ) {
        super();
        this.betId = betId;
        this.newPersistenceType = newPersistenceType;
    }

    public fromJson(json: any): void {
        if ('betId' in json) {
            this.betId = json.betId;
        }
        if ('newPersistenceType' in json) {
            this.newPersistenceType.setValue(json.newPersistenceType);
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.betId !== '') {
            json.betId = this.betId;
        }
        if (this.newPersistenceType.isValid()) {
            json.newPersistenceType = this.newPersistenceType.getValue();
        }
        return json;
    }

    public isValid(): boolean {
        return this.betId !== '' &&
            this.newPersistenceType.isValid();
    }

    public getBetId(): string {
        return this.betId;
    }
    public setBetId(betId: string): void {
        this.betId = betId;
    }
    public getNewPersistenceType(): PersistenceType {
        return this.newPersistenceType;
    }
    public setNewPersistenceType(newPersistenceType: PersistenceType): void {
        this.newPersistenceType = newPersistenceType;
    }

}
