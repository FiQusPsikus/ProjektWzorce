import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry-item',
  templateUrl: './entry-item.component.html',
  styleUrls: ['./entry-item.component.css']
})
export class EntryItemComponent implements OnInit {

  constructor() { }
  @Input() fullName = ''
  @Input() description = ''

  ngOnInit(): void {
  }

}
