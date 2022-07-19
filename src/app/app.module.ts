import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextEditorComponent } from './Components/text-editor/text-editor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

import {MatInputModule} from '@angular/material/input';
import { AkwarystykaComponent } from './Components/akwarystyka/akwarystyka.component';
import { TerrarystykaComponent } from './Components/terrarystyka/terrarystyka.component';
import { EntryItemComponent } from './Components/entry-item/entry-item.component';
@NgModule({
  declarations: [
    AppComponent,
    TextEditorComponent,
    AkwarystykaComponent,
    TerrarystykaComponent,
    EntryItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
