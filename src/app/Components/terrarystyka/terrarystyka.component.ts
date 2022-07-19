import { Component, OnInit } from '@angular/core';
import { WpisTerrarystycznyService } from 'src/app/Services/Wpisy/wpis-terrarystyczny.service';
import { Entry } from 'src/Models/Wpis';
import { EntryRaw } from 'src/Models/WpisRaw';

@Component({
  selector: 'app-terrarystyka',
  templateUrl: './terrarystyka.component.html',
  styleUrls: ['./terrarystyka.component.css']
})
export class TerrarystykaComponent implements OnInit {

  constructor(private terrarystykaService: WpisTerrarystycznyService) { }

  service:string = "Terrarystyka"
  entryList:Array<EntryRaw> = []
  ngOnInit(): void {
    this.wczytajWpisy()
  }

  wczytajWpisy(): void{
    this.entryList = this.terrarystykaService.listWpisow().reverse()
  }

}
