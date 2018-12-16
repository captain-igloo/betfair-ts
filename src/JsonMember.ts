
export default abstract class JsonMember {
    public abstract toJson(): any;

    public toString(): string {
        return JSON.stringify(this.toJson());
    }
}
