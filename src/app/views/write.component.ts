import { Component, AfterViewInit} from '@angular/core';

import { NgRedux, select } from "@angular-redux/store";
import { IAppState } from "../store/store";
import { TOGGLE_LOGIN } from "../store/actions";

declare const tinymce;

@Component({
  selector: 'write',
  templateUrl: './write.component.html'
})
export class WriteComponent implements AfterViewInit{

  constructor(private ngRedux: NgRedux<IAppState>) { }
@select() navLinks;
@select() authState;

  ngAfterViewInit(){
   // tinymce.init({selector:'#TypeHere'});
  }

}
