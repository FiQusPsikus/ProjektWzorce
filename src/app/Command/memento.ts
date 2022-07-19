export interface Memento {
    getState(): string;
}

export class ConcreteMemento implements Memento {
    private state: string;

    constructor(state: string) {
        this.state = state;    }

    public getState(): string {
        return this.state;
    }

}