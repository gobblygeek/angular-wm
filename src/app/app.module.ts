import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonToggleModule} from '@angular/material/button-toggle'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatButtonModule} from '@angular/material/button'; 

import { NgRedux, NgReduxModule } from "@angular-redux/store";
import { IAppState, rootReducer, INITIAL_STATE } from "./store/store";

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {StatusBarComponent} from './status-bar/status-bar.component'
import {WelcomeComponent} from './formPages/welcome.component'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    StatusBarComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule, NgReduxModule,FormsModule,MatToolbarModule,BrowserAnimationsModule,MatButtonToggleModule,MatIconModule,HttpClientModule,AppRoutingModule,MatCardModule,MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
}
}
