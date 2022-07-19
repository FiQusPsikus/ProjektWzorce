import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AkwarystykaComponent } from './Components/akwarystyka/akwarystyka.component';
import { TerrarystykaComponent } from './Components/terrarystyka/terrarystyka.component';

const routes: Routes = [
  { path: 'akwarystyka', component: AkwarystykaComponent },
  { path: 'terrarystyka', component: TerrarystykaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
