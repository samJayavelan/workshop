export class PersonalizationClient {

    private userId: number | undefined;

    init(userId: number | undefined): Promise<void> {
        return new Promise(resolve => setTimeout(() => {
            this.userId = userId;
            resolve()
        }, 200));
    }

    get greeting(): string {
        if (!this.userId) return "Argh! Ahoy!";
        
        if (this.userId && this.userId <= 12345) {
            return "Hello";
        } else {
            return "Hi";
        }
    }
}