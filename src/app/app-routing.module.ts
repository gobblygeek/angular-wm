import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomeComponent} from "./views/welcome.component";
import {WriteComponent} from "./views/write.component";

//import { DogComponent } from './components/dog/dog.component';

const routes: Routes = [
 { path: '', redirectTo: '/welcome', pathMatch: 'full' },
 { path: 'welcome', component: WelcomeComponent },
 { path: 'Write', component: WriteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }