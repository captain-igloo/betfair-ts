
export default abstract class Enum {
    protected value: string = '';
    protected valid: boolean = false;

    public getValue(): string {
        return this.value;
    }

    public toJSON() {
        // provides only the value, not the whole structure of the Enum.
        return this.value;
    }
}
