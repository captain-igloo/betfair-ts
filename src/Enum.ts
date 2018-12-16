
export default abstract class Enum {
    protected value: string = '';
    protected valid: boolean = false;

    public getValue(): string {
        return this.value;
    }

    public isValid(): boolean {
        return this.valid;
    }
}
