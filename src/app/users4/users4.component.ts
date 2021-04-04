import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users4',
  templateUrl: './users4.component.html',
  styleUrls: ['./users4.component.css']
})
export class Users4Component implements OnInit {

	@Output() parentComponent:EventEmitter<any>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  	
  }
  callEvent(){
  	this.parentComponent.emit({name:"hello"});
  }

}
