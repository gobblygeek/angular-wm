import { Component} from '@angular/core';

import { NgRedux, select } from "@angular-redux/store";
import { IAppState } from "../store/store";
import { TOGGLE_LOGIN } from "../store/actions";

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent {

  constructor(private ngRedux: NgRedux<IAppState>) { }
@select() navLinks;
@select() authState;

  login(){
    this.ngRedux.dispatch({ type: "TOGGLE_LOGIN" });
  }

}
