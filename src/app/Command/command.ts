import { ConcreteMemento, Memento } from './memento'

interface Command {
    execute(): void;
}

export class ComplexCommand implements Command {
    private receiver: Edytor;

    private a: string;

    constructor(receiver: Edytor, a: string) {
        this.receiver = receiver;
        this.a = a;
    }

    public execute(): void {
        this.receiver.dopiszWartosc(this.a);
    }
}

export class Edytor {
    private a!: string;

    public odczytajWartosc(): string{
        return this.a;
    }
    
    public dopiszWartosc(a: string): void {
        this.a = a;
    }

    public save(): Memento {
        return new ConcreteMemento(this.a);
    }

    public restore(memento: Memento): void {
        this.a = memento.getState();
    }
}

export class Caretaker {
    private mementos: Memento[] = [];

    private originator: Edytor;

    constructor(originator: Edytor) {
        this.originator = originator;
    }

    public backup(): void {
        this.mementos.push(this.originator.save());
    }

    public undo(): void {
        if (!this.mementos.length) {
            return;
        }
        const memento = this.mementos.pop()!;
        this.originator.restore(memento);
    }
}

export class Invoker {
    private onStart!: Command;

    public enter(command: Command): void {
        this.onStart = command;
        this.wykonaj();
    }

    public wykonaj(): void {
        this.onStart.execute();
    }
}