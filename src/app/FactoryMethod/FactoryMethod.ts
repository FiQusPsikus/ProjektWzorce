import { Entry } from "src/Models/Wpis";
import { EntryRaw } from "src/Models/WpisRaw";

export abstract class Creator {
    public abstract factoryMethod(): Product;
    public dodajWpis(a:Entry): string {
        const product = this.factoryMethod();
        return product.dodajWpis(a);
    }
    public odczytajWpis(a:string): string {
        const product = this.factoryMethod();
        return product.odczytajWpis(a);
    }

    public listWpisow(): Array<EntryRaw> {
        const product = this.factoryMethod();
        return product.listWpisow();
    }
}

export interface Product {
    dodajWpis(a:Entry): string;

    odczytajWpis(a:string): string;

    listWpisow(): Array<EntryRaw>;
}


