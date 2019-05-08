import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button'; 

import { NgRedux, NgReduxModule } from "@angular-redux/store";
import { IAppState, rootReducer, INITIAL_STATE } from "./store/store";

import { AppComponent } from './app.component';
import {WriteComponent} from "./views/write.component"
import {WelcomeComponent} from "./views/welcome.component";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {StatusBarComponent} from './status-bar/status-bar.component'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    StatusBarComponent,
    WelcomeComponent,
    WriteComponent
  ],
  imports: [
    BrowserModule, NgReduxModule,FormsModule,MatToolbarModule,BrowserAnimationsModule,MatIconModule,HttpClientModule,AppRoutingModule,MatCardModule,MatButtonModule,MatMenuModule,MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
}
}
