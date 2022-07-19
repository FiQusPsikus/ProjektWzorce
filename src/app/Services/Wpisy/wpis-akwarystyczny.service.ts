import { Injectable } from '@angular/core';
import { Product } from 'src/app/FactoryMethod/FactoryMethod';
import { FlyweightFactory } from 'src/app/Flyweight/flyWeight';
import { Entry } from 'src/Models/Wpis';
import { EntryRaw } from 'src/Models/WpisRaw';

@Injectable({
  providedIn: 'root'
})
export class WpisAkwarystycznyService implements Product{

  constructor() { }

  factory = new FlyweightFactory([])

  odczytajWpis(a: string): string {
    throw new Error('Method not implemented.');
  }

  listWpisow(): Array<EntryRaw> {
    let entryArray:Array<Entry> = []
    if (localStorage.getItem('akwarystyka')){
      let entryRawArray = localStorage.getItem('akwarystyka')
      entryArray = JSON.parse(String(entryRawArray))
    }else{
      entryArray = []
    }

    let Array:Array<EntryRaw> = [];
    entryArray.forEach(entry => {
      const flyweight = this.factory.getOwner([entry.fullName]);
        let Description = entry.Description
        let entryRaw:EntryRaw = {
          fullName: flyweight,
          Description: Description
        }
        Array.push(entryRaw)
        // entry = flyweight.operation([entry.Description]);
    })
    
    return Array
  }
  
  dodajWpis(entry:Entry): string {
    let entryRawArray = localStorage.getItem('akwarystyka');
    let entryArray
    if(!entryRawArray){
      entryArray = []
    }else{
      entryArray = JSON.parse(String(entryRawArray))
    }
    entryArray.push(entry)
    localStorage.setItem('akwarystyka', JSON.stringify(entryArray));
    return 'Dodano';
    
  }
  
}