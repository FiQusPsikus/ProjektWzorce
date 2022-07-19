import { Entry } from "src/Models/Wpis";

export class Flyweight {
    public fullName: any;

    constructor(fullName: any) {
        this.fullName = fullName;
    }

    getFullName(){
        return this.fullName
    }
}

export class FlyweightFactory {
    private flyweights: {[key: string]: Flyweight} = <any>{};

    constructor(initialFlyweights: string[][]) {
        for (const state of initialFlyweights) {
            this.flyweights[this.getKey(state)] = new Flyweight(state);
        }
    }

    private getKey(state: string[]): string {
        return state.join('_');
    }

    public getOwner(sharedState: string[]): Flyweight {
        const key = this.getKey(sharedState);

        if (!(key in this.flyweights)) {
            console.log('Tworzenie.');
            this.flyweights[key] = new Flyweight(sharedState);
        } else {
            console.log('Ponowne użycie.');
        }

        return this.flyweights[key];
    }
}