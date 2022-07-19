import { Component, OnInit } from '@angular/core';
import { WpisAkwarystycznyService } from 'src/app/Services/Wpisy/wpis-akwarystyczny.service';
import { Entry } from 'src/Models/Wpis';
import { EntryRaw } from 'src/Models/WpisRaw';

@Component({
  selector: 'app-akwarystyka',
  templateUrl: './akwarystyka.component.html',
  styleUrls: ['./akwarystyka.component.css']
})
export class AkwarystykaComponent implements OnInit {

  constructor(private akwarystykaService: WpisAkwarystycznyService) { }

  service: string = "Akwarystyka"
  entryList:Array<EntryRaw> = []
  ngOnInit(): void {
    this.wczytajWpisy()
  }
  wczytajWpisy(): void{
    this.entryList = this.akwarystykaService.listWpisow().reverse()
  }
}
