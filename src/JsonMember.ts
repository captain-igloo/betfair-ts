import Enum from './Enum';

export default abstract class JsonMember {
    public abstract toJson(): any;

    public toString(): string {
        return JSON.stringify(this.toJson());
    }

    protected fromJson<J, T>(json: J | T, Type: new (json: J) => T): T {
        if (json instanceof Type) {
            return json;
        }
        return new Type(json as J);
    }

    protected arrayFromJson<J, T>(json: (J | T)[], Type: new (json: J) => T): T[] {
        return json.map((v) => {
            return this.fromJson(v, Type);
        });
    }

    protected setFromJson<J, T>(json: Set<J | T> | (J | T)[], Type?: new (json: J) => T): Set<T> {
        const set = new Set<T>();
        json.forEach((value: J | T) => {
            if (Type) {
                set.add(this.fromJson(value, Type));
            } else {
                set.add(value as T);
            }
        });
        return set;
    }

    protected setToJson(member: Set<Enum | string>): string[] {
        const set: string[] = [];
        member.forEach((value) => {
            if (value instanceof Enum) {
                set.push(value.getValue());
            } else {
                set.push(value);
            }
        })
        return set;
    }

    protected mapFromJson<J, T>(
        json: Map<string, J | T> | {[key: string]: J | T},
        Type?: new (json: J) => T
    ): Map<string, T> {
        const map = new Map();
        if (json instanceof Map) {
            json.forEach((value, key) => {
                if (Type) {
                    map.set(key, this.fromJson(value, Type));
                } else {
                    map.set(key, value);
                }
            });
        } else {
            Object.keys(json).forEach((key: string) => {
                if (Type) {
                    map.set(key, this.fromJson(json[key], Type));
                } else {
                    map.set(key, json[key]);
                }
            });
        }
        return map;
    }
}
