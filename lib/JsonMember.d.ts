import Enum from './Enum';
export default abstract class JsonMember {
    abstract toJson(): any;
    toString(): string;
    protected fromJson<J, T>(json: J | T, Type: new (json: J) => T): T;
    protected arrayFromJson<J, T>(json: (J | T)[], Type: new (json: J) => T): T[];
    protected setFromJson<J, T>(json: Set<J | T> | (J | T)[], Type?: new (json: J) => T): Set<T>;
    protected setToJson(member: Set<Enum | string>): string[];
    protected mapFromJson<J, T>(json: Map<string, J | T> | {
        [key: string]: J | T;
    }, Type?: new (json: J) => T): Map<string, T>;
}
