import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog-angular';
  name='Amit';
  getName(name){
  	alert(name);
  };
  obj={
  name:"peter"
  };
  site=window.location.href;
  myevent(evt) {
  console.warn(evt);
  };
  disabledBox=true;
  enableBox(){
  	this.disabledBox=!this.disabledBox;
  };
  show="green";
  color="blue";
  data1=['anil','peter','bruce','sunny'];
  data=[
  {
  	name:'anil',
  	age:20
  },
  {
  name:'bruce',
  age:36
  },
  {
  name:'amit',
  age:23
  }
  ]

}
