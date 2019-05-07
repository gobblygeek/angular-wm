import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomeComponent} from "./formPages/welcome.component"

//import { DogComponent } from './components/dog/dog.component';

const routes: Routes = [
 // { path: '', redirectTo: '/dog/all', pathMatch: 'full' },
 // { path: 'dog/:id', component: DogComponent }  
 { path: '', redirectTo: '/welcome', pathMatch: 'full' },
 { path: 'welcome', component: WelcomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }