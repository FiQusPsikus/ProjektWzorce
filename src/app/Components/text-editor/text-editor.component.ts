import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Caretaker, ComplexCommand, Edytor, Invoker } from 'src/app/Command/command';
import { WpisAkwarystycznyService } from 'src/app/Services/Wpisy/wpis-akwarystyczny.service';
import { WpisTerrarystycznyService } from 'src/app/Services/Wpisy/wpis-terrarystyczny.service';
import { Entry } from 'src/Models/Wpis';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent implements OnInit {
  
  constructor(private akwarystykaService:WpisAkwarystycznyService, private terrarystykaService:WpisTerrarystycznyService) {
    
  }

  profileForm = new FormGroup({
    fullName: new FormControl(''),
    description: new FormControl('')
  });

  value = '';
  invoker = new Invoker();
  edytor = new Edytor();
  caretaker = new Caretaker(this.edytor);
  @Output() customerChange:EventEmitter<string> =new EventEmitter<string>();

  @Input() service = ''
  ngOnInit(): void {

  }

  onInput(a: string): void{
    this.caretaker.backup()
    this.invoker.enter(new ComplexCommand(this.edytor, a));
  }

  backup(): void{
    this.caretaker.undo()
    this.value = this.edytor.odczytajWartosc();
    this.profileForm.get('description')?.setValue(this.value)
  }
  
  onSubmit(): void{
    let entry:Entry = {
      fullName: this.profileForm.value.fullName,
      Description: this.profileForm.value.description
    }
    this.customerChange.emit("Update");
    if(this.service == "Terrarystyka"){ this.terrarystykaService.dodajWpis(entry) }
    if(this.service == "Akwarystyka"){ this.akwarystykaService.dodajWpis(entry) }
  }

}
