import { Component } from '@angular/core';

import { NgRedux, select } from "@angular-redux/store";
import { IAppState } from "../store/store";

@Component({
  selector: 'status-bar',
  templateUrl: './status-bar.component.html'
})
export class StatusBarComponent {

  constructor(private ngRedux: NgRedux<IAppState>) { }
@select() authState;
@select() userData;

}
