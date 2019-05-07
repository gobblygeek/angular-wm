import { Component, OnInit } from '@angular/core';

import { NgRedux, select } from "@angular-redux/store";
import { IAppState } from "../store/store";
import { GET_LOGIN_STATE } from "../store/actions";

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent implements OnInit {

  constructor(private ngRedux: NgRedux<IAppState>) { }
@select() navLinks;
@select() authState;
  disabled = true;
  ngOnInit() {
  	this.ngRedux.dispatch({ type: GET_LOGIN_STATE });
    console.log(this.authState)
  }

}
